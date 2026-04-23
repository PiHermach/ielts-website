// Global variables
let currentPart = 1;
let currentQuestion = 1;
let currentHighlight = null;
let selectedRange = null;
let userAnswers = {};
let flaggedQuestions = new Set();
let isResizing = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadPassage(1);
    loadQuestions(1);
    updateNavigation();
    setupResizer();
    setupSelectionMenu();
    startTimer();
});

// Load passage
function loadPassage(partId) {
    const passage = readingData.passages[partId - 1];
    const passagePanel = document.getElementById('passagePanel');
    
    passagePanel.innerHTML = `
        <div class="passage-title">${passage.title}</div>
        <div class="passage-content" id="passageContent">
            ${passage.content}
        </div>
    `;
    
    document.getElementById('currentPassage').textContent = `PASSAGE ${partId}`;
    
    // Re-setup selection menu after content is loaded
    setupSelectionMenu();
}

// Load questions
function loadQuestions(partId) {
    const passage = readingData.passages[partId - 1];
    const questionsPanel = document.getElementById('questionsPanel');
    
    let html = '';
    
    passage.questionGroups.forEach(group => {
        html += '<div class="question-section">';
        html += `<div class="question-group-header">
                    <h3>${group.title}</h3>
                    ${group.instruction ? `<div class="question-instruction">${group.instruction}</div>` : ''}
                 </div>`;
        
        if (group.type === 'tfng') {
            // TRUE/FALSE/NOT GIVEN questions
            group.questions.forEach(q => {
                const isFlagged = flaggedQuestions.has(q.id);
                const isAnswered = userAnswers[q.id] && userAnswers[q.id].trim() !== '';
                
                html += `
                    <div class="question-item tfng-item ${isAnswered ? 'answered' : ''}" id="question-${q.id}">
                        <i class="fas fa-flag flag-icon ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag(${q.id})"></i>
                        <div class="question-number">${q.id}</div>
                        <div class="question-content">
                            <label class="question-text">${q.text}</label>
                            <div class="radio-group-vertical">
                                ${group.options.map(opt => `
                                    <label class="radio-label-vertical">
                                        <input type="radio" 
                                               name="q${q.id}" 
                                               value="${opt}"
                                               ${userAnswers[q.id] === opt ? 'checked' : ''}
                                               onchange="saveAnswer(${q.id}, '${opt}')">
                                        <span>${opt}</span>
                                    </label>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
            });
        } else if (group.type === 'gap-filling') {
            // Gap filling questions
            group.questions.forEach(q => {
                const isFlagged = flaggedQuestions.has(q.id);
                const isAnswered = userAnswers[q.id] && userAnswers[q.id].trim() !== '';
                
                html += `
                    <div class="question-item ${isAnswered ? 'answered' : ''}" id="question-${q.id}">
                        <i class="fas fa-flag flag-icon ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag(${q.id})"></i>
                        <div class="question-number">${q.id}</div>
                        <div class="question-content">
                            <label class="question-text">${q.text}</label>
                            <input type="text" 
                                   id="answer-${q.id}" 
                                   placeholder="Type your answer here" 
                                   value="${userAnswers[q.id] || ''}"
                                   onchange="saveAnswer(${q.id}, this.value)">
                        </div>
                    </div>
                `;
            });
        }
        
        html += '</div>';
    });
    
    questionsPanel.innerHTML = html;
}

// Save answer
function saveAnswer(questionId, value) {
    userAnswers[questionId] = value;
    updateNavigation();
    
    // Update question item style
    const questionItem = document.getElementById(`question-${questionId}`);
    if (value.trim() !== '') {
        questionItem.classList.add('answered');
    } else {
        questionItem.classList.remove('answered');
    }
}

// Toggle flag
function toggleFlag(questionId) {
    if (flaggedQuestions.has(questionId)) {
        flaggedQuestions.delete(questionId);
    } else {
        flaggedQuestions.add(questionId);
    }
    
    // Update flag icon
    const flagIcon = document.querySelector(`#question-${questionId} .flag-icon`);
    flagIcon.classList.toggle('flagged');
    
    updateNavigation();
}

// Show part
function showPart(partId) {
    currentPart = partId;
    const passage = readingData.passages[partId - 1];
    
    // Get first question from first group
    let allQuestions = [];
    passage.questionGroups.forEach(group => {
        allQuestions = allQuestions.concat(group.questions);
    });
    currentQuestion = allQuestions[0].id;
    
    loadPassage(partId);
    loadQuestions(partId);
    updateNavigation();
    
    // Update active part button
    document.querySelectorAll('.part-btn').forEach((btn, idx) => {
        btn.classList.toggle('active', idx + 1 === partId);
    });
}

// Update navigation
function updateNavigation() {
    const navCenter = document.getElementById('navCenter');
    const passage = readingData.passages[currentPart - 1];
    
    // Get all questions from all groups
    let allQuestions = [];
    passage.questionGroups.forEach(group => {
        allQuestions = allQuestions.concat(group.questions);
    });
    
    let html = '';
    
    // Add all part buttons
    for (let i = 1; i <= 3; i++) {
        const partPassage = readingData.passages[i - 1];
        let partAllQuestions = [];
        partPassage.questionGroups.forEach(group => {
            partAllQuestions = partAllQuestions.concat(group.questions);
        });
        const partHasFlag = partAllQuestions.some(q => flaggedQuestions.has(q.id));
        
        html += `
            <button class="part-btn ${i === currentPart ? 'active' : ''}" onclick="showPart(${i})">
                Part ${i}
                ${partHasFlag ? '<span class="part-flag">🚩</span>' : ''}
            </button>
        `;
    }
    
    // Add question numbers for current part
    allQuestions.forEach(q => {
        const isAnswered = userAnswers[q.id] && userAnswers[q.id].trim() !== '';
        const isFlagged = flaggedQuestions.has(q.id);
        const isActive = q.id === currentQuestion;
        
        html += `
            <button class="nav-btn ${isActive ? 'active' : ''} ${isAnswered ? 'answered' : ''} ${isFlagged ? 'flagged' : ''}" 
                    onclick="goToQuestion(${q.id})">
                ${q.id}
            </button>
        `;
    });
    
    navCenter.innerHTML = html;
    
    // Update part info
    const answeredCount = allQuestions.filter(q => userAnswers[q.id] && userAnswers[q.id].trim() !== '').length;
    document.getElementById('partInfo').textContent = `Part ${currentPart}: ${answeredCount} of ${allQuestions.length}`;
}

// Go to question
function goToQuestion(questionId) {
    currentQuestion = questionId;
    
    // Find which part this question belongs to
    for (let i = 0; i < readingData.passages.length; i++) {
        const passage = readingData.passages[i];
        let allQuestions = [];
        passage.questionGroups.forEach(group => {
            allQuestions = allQuestions.concat(group.questions);
        });
        
        if (allQuestions.some(q => q.id === questionId)) {
            if (currentPart !== i + 1) {
                showPart(i + 1);
            }
            break;
        }
    }
    
    // Scroll to question
    const questionElement = document.getElementById(`question-${questionId}`);
    if (questionElement) {
        questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Focus input if it's a text input
        const input = document.getElementById(`answer-${questionId}`);
        if (input) {
            setTimeout(() => input.focus(), 300);
        }
    }
    
    updateNavigation();
}

// Previous question
function prevQuestion() {
    const passage = readingData.passages[currentPart - 1];
    let allQuestions = [];
    passage.questionGroups.forEach(group => {
        allQuestions = allQuestions.concat(group.questions);
    });
    
    const currentIndex = allQuestions.findIndex(q => q.id === currentQuestion);
    
    if (currentIndex > 0) {
        goToQuestion(allQuestions[currentIndex - 1].id);
    } else if (currentPart > 1) {
        // Go to previous part
        showPart(currentPart - 1);
        const prevPassage = readingData.passages[currentPart - 1];
        let prevAllQuestions = [];
        prevPassage.questionGroups.forEach(group => {
            prevAllQuestions = prevAllQuestions.concat(group.questions);
        });
        goToQuestion(prevAllQuestions[prevAllQuestions.length - 1].id);
    }
}

// Next question
function nextQuestion() {
    const passage = readingData.passages[currentPart - 1];
    let allQuestions = [];
    passage.questionGroups.forEach(group => {
        allQuestions = allQuestions.concat(group.questions);
    });
    
    const currentIndex = allQuestions.findIndex(q => q.id === currentQuestion);
    
    if (currentIndex < allQuestions.length - 1) {
        goToQuestion(allQuestions[currentIndex + 1].id);
    } else if (currentPart < 3) {
        // Go to next part
        showPart(currentPart + 1);
        const nextPassage = readingData.passages[currentPart - 1];
        let nextAllQuestions = [];
        nextPassage.questionGroups.forEach(group => {
            nextAllQuestions = nextAllQuestions.concat(group.questions);
        });
        goToQuestion(nextAllQuestions[0].id);
    }
}

// Resizer
function setupResizer() {
    const resizer = document.getElementById('resizer');
    const leftPanel = document.querySelector('.passage-panel');
    const rightPanel = document.querySelector('.questions-panel');
    
    resizer.addEventListener('mousedown', () => {
        isResizing = true;
        document.body.style.cursor = 'col-resize';
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        
        const containerWidth = document.querySelector('.main-container').offsetWidth;
        const leftWidth = e.clientX;
        const rightWidth = containerWidth - leftWidth - 5;
        
        if (leftWidth > 300 && rightWidth > 300) {
            const leftPercent = (leftWidth / containerWidth) * 100;
            const rightPercent = (rightWidth / containerWidth) * 100;
            
            leftPanel.style.width = `${leftPercent}%`;
            rightPanel.style.width = `${rightPercent}%`;
        }
    });
    
    document.addEventListener('mouseup', () => {
        isResizing = false;
        document.body.style.cursor = 'default';
    });
}

// Selection menu
function setupSelectionMenu() {
    const selectionMenu = document.getElementById('selectionMenu');
    const highlightMenu = document.getElementById('highlightMenu');
    const passagePanel = document.getElementById('passagePanel');
    
    // Remove old event listener if exists
    const oldHandler = passagePanel._mouseupHandler;
    if (oldHandler) {
        passagePanel.removeEventListener('mouseup', oldHandler);
    }
    
    // Create new handler
    const mouseupHandler = (e) => {
        // Prevent if resizing
        if (isResizing) return;
        
        // Small delay to ensure selection is complete
        setTimeout(() => {
            const selection = window.getSelection();
            const selectedText = selection.toString().trim();
            
            if (selectedText && selection.rangeCount > 0) {
                selectedRange = selection.getRangeAt(0);
                const rect = selectedRange.getBoundingClientRect();
                const panelRect = passagePanel.getBoundingClientRect();
                
                // Calculate position relative to passage panel
                const relativeTop = rect.top - panelRect.top + passagePanel.scrollTop;
                const relativeLeft = rect.left - panelRect.left + passagePanel.scrollLeft;
                
                // Get menu width (approximate)
                const menuWidth = 180;
                
                // Position menu just above selection (very close to text)
                selectionMenu.style.display = 'block';
                selectionMenu.style.left = `${relativeLeft + (rect.width / 2) - (menuWidth / 2)}px`;
                selectionMenu.style.top = `${relativeTop - 10}px`;
            } else {
                selectionMenu.style.display = 'none';
            }
        }, 50);
    };
    
    // Store handler reference and add event listener
    passagePanel._mouseupHandler = mouseupHandler;
    passagePanel.addEventListener('mouseup', mouseupHandler);
    
    // Hide menus when clicking outside (only setup once)
    if (!document._selectionMenuSetup) {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.selection-menu') && 
                !e.target.closest('.note-input-menu') &&
                !e.target.closest('.note-view-menu') &&
                !e.target.closest('.highlight')) {
                selectionMenu.style.display = 'none';
                highlightMenu.style.display = 'none';
                document.getElementById('noteInputMenu').style.display = 'none';
                document.getElementById('noteViewMenu').style.display = 'none';
            }
        });
        
        // Also hide when clicking on questions panel
        document.querySelector('.questions-panel').addEventListener('click', () => {
            selectionMenu.style.display = 'none';
            highlightMenu.style.display = 'none';
            document.getElementById('noteInputMenu').style.display = 'none';
            document.getElementById('noteViewMenu').style.display = 'none';
        });
        
        document._selectionMenuSetup = true;
    }
}

// Highlight selection
function highlightSelection() {
    if (selectedRange) {
        const span = document.createElement('span');
        span.className = 'highlight';
        span.onclick = function(e) {
            e.stopPropagation();
            currentHighlight = this;
            const highlightMenu = document.getElementById('highlightMenu');
            highlightMenu.style.display = 'block';
            highlightMenu.style.left = `${e.pageX}px`;
            highlightMenu.style.top = `${e.pageY + 10}px`;
        };
        
        try {
            selectedRange.surroundContents(span);
            document.getElementById('selectionMenu').style.display = 'none';
            window.getSelection().removeAllRanges();
        } catch(e) {
            alert('Please select text within a single paragraph');
        }
    }
}

// Show note input
function showNoteInput() {
    if (selectedRange) {
        const selectionMenu = document.getElementById('selectionMenu');
        const noteInputMenu = document.getElementById('noteInputMenu');
        const noteText = document.getElementById('noteText');
        
        // Position note input at same place as selection menu
        noteInputMenu.style.left = selectionMenu.style.left;
        noteInputMenu.style.top = selectionMenu.style.top;
        
        selectionMenu.style.display = 'none';
        noteInputMenu.style.display = 'block';
        noteText.value = '';
        noteText.focus();
    }
}

// Save note
function saveNote() {
    const noteText = document.getElementById('noteText').value.trim();
    
    if (selectedRange && noteText) {
        const span = document.createElement('span');
        span.className = 'highlight note';
        span.setAttribute('data-note', noteText);
        span.onclick = function(e) {
            e.stopPropagation();
            currentHighlight = this;
            const noteViewMenu = document.getElementById('noteViewMenu');
            const noteContent = document.getElementById('noteContent');
            
            noteContent.textContent = this.getAttribute('data-note');
            noteViewMenu.style.display = 'block';
            noteViewMenu.style.left = `${e.pageX}px`;
            noteViewMenu.style.top = `${e.pageY + 10}px`;
        };
        
        try {
            selectedRange.surroundContents(span);
            document.getElementById('noteInputMenu').style.display = 'none';
            window.getSelection().removeAllRanges();
        } catch(e) {
            alert('Please select text within a single paragraph');
        }
    } else if (!noteText) {
        alert('Please enter a note');
    }
}

// Cancel note
function cancelNote() {
    document.getElementById('noteInputMenu').style.display = 'none';
    window.getSelection().removeAllRanges();
}

// Delete note
function deleteNote() {
    if (currentHighlight) {
        const parent = currentHighlight.parentNode;
        while (currentHighlight.firstChild) {
            parent.insertBefore(currentHighlight.firstChild, currentHighlight);
        }
        parent.removeChild(currentHighlight);
        document.getElementById('noteViewMenu').style.display = 'none';
        currentHighlight = null;
    }
}

// Delete highlight
function deleteHighlight() {
    if (currentHighlight) {
        const parent = currentHighlight.parentNode;
        while (currentHighlight.firstChild) {
            parent.insertBefore(currentHighlight.firstChild, currentHighlight);
        }
        parent.removeChild(currentHighlight);
        document.getElementById('highlightMenu').style.display = 'none';
        currentHighlight = null;
    }
}

// Settings
function toggleSettings() {
    const menu = document.getElementById('settingsMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function changeTheme() {
    const theme = document.getElementById('themeSelect').value;
    document.body.className = document.body.className.replace(/theme-\w+-\w+/, `theme-${theme}`);
}

function changeSize() {
    const size = document.getElementById('sizeSelect').value;
    document.body.className = document.body.className.replace(/size-\w+/, `size-${size}`);
}

// Timer
function startTimer() {
    let timeLeft = 60 * 60; // 60 minutes
    
    setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timer').textContent = `${minutes} minutes remaining`;
        
        if (timeLeft <= 0) {
            alert('Time is up!');
            submitTest();
        }
    }, 60000); // Update every minute
}

// Submit test
function submitTest() {
    let totalQuestions = 0;
    readingData.passages.forEach(p => {
        p.questionGroups.forEach(group => {
            totalQuestions += group.questions.length;
        });
    });
    
    const answeredCount = Object.keys(userAnswers).filter(k => userAnswers[k].trim() !== '').length;
    
    if (answeredCount < totalQuestions) {
        if (!confirm(`You have only answered ${answeredCount} out of ${totalQuestions} questions. Do you want to submit anyway?`)) {
            return;
        }
    }
    
    // Calculate score
    let correct = 0;
    readingData.passages.forEach(passage => {
        passage.questionGroups.forEach(group => {
            group.questions.forEach(q => {
                const userAnswer = (userAnswers[q.id] || '').trim().toLowerCase();
                const correctAnswer = q.answer.toLowerCase();
                if (userAnswer === correctAnswer) {
                    correct++;
                }
            });
        });
    });
    
    alert(`Test submitted!\n\nYour score: ${correct}/${totalQuestions}\nPercentage: ${Math.round((correct/totalQuestions)*100)}%`);
}
