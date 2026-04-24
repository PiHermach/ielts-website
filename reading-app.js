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
        } else if (group.type === 'multiple-choice-table') {
            // Multiple choice with table layout (A-G format)
            
            // Create table with header
            html += '<div class="matching-table-container">';
            html += '<table class="matching-table">';
            
            // Header row
            html += '<thead><tr><th class="matching-header-empty"></th>';
            group.options.forEach(opt => {
                html += `<th class="matching-header-cell">${opt}</th>`;
            });
            html += '</tr></thead>';
            
            // Question rows
            html += '<tbody>';
            group.questions.forEach(q => {
                const isFlagged = flaggedQuestions.has(q.id);
                const isAnswered = userAnswers[q.id] && userAnswers[q.id].trim() !== '';
                
                html += `<tr class="matching-row ${isAnswered ? 'answered' : ''}" id="question-${q.id}">`;
                html += `<td class="matching-question-cell">`;
                html += `<i class="fas fa-flag flag-icon ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag(${q.id})"></i>`;
                html += `<span class="question-number-inline">${q.id}</span>`;
                html += `<span class="question-text-inline">${q.text}</span>`;
                html += `</td>`;
                
                // Radio button cells
                group.options.forEach(opt => {
                    html += `<td class="matching-radio-cell">`;
                    html += `<input type="radio" name="q${q.id}" value="${opt}" ${userAnswers[q.id] === opt ? 'checked' : ''} onchange="saveAnswer(${q.id}, '${opt}')">`;
                    html += `</td>`;
                });
                
                html += '</tr>';
            });
            html += '</tbody>';
            html += '</table>';
            html += '</div>';
        } else if (group.type === 'matching') {
            // Matching questions with table layout
            if (group.note) {
                html += `<div class="question-note"><strong>NB:</strong> ${group.note}</div>`;
            }
            
            // Show list of options for reference first
            if (group.optionsList) {
                html += '<div class="options-list-reference">';
                html += '<h4>List of options</h4>';
                html += '<div class="options-grid">';
                group.optionsList.forEach(opt => {
                    html += `<div class="option-item">${opt.key}. ${opt.value}</div>`;
                });
                html += '</div></div>';
            }
            
            // Create table with header
            html += '<div class="matching-table-container">';
            html += '<table class="matching-table">';
            
            // Header row
            html += '<thead><tr><th class="matching-header-empty"></th>';
            group.optionsList.forEach(opt => {
                html += `<th class="matching-header-cell">${opt.key}</th>`;
            });
            html += '</tr></thead>';
            
            // Question rows
            html += '<tbody>';
            group.questions.forEach(q => {
                const isFlagged = flaggedQuestions.has(q.id);
                const isAnswered = userAnswers[q.id] && userAnswers[q.id].trim() !== '';
                
                html += `<tr class="matching-row ${isAnswered ? 'answered' : ''}" id="question-${q.id}">`;
                html += `<td class="matching-question-cell">`;
                html += `<i class="fas fa-flag flag-icon ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag(${q.id})"></i>`;
                html += `<span class="question-number-inline">${q.id}</span>`;
                html += `<span class="question-text-inline">${q.text}</span>`;
                html += `</td>`;
                
                // Radio button cells
                group.optionsList.forEach(opt => {
                    html += `<td class="matching-radio-cell">`;
                    html += `<input type="radio" name="q${q.id}" value="${opt.key}" ${userAnswers[q.id] === opt.key ? 'checked' : ''} onchange="saveAnswer(${q.id}, '${opt.key}')">`;
                    html += `</td>`;
                });
                
                html += '</tr>';
            });
            html += '</tbody>';
            html += '</table>';
            html += '</div>';
        } else if (group.type === 'multiple-choice') {
            // Regular multiple choice
            group.questions.forEach(q => {
                const isFlagged = flaggedQuestions.has(q.id);
                const isAnswered = userAnswers[q.id] && userAnswers[q.id].trim() !== '';
                
                html += `
                    <div class="question-item mc-item ${isAnswered ? 'answered' : ''}" id="question-${q.id}">
                        <i class="fas fa-flag flag-icon ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag(${q.id})"></i>
                        <div class="question-number">${q.id}</div>
                        <div class="question-content">
                            <label class="question-text">${q.text}</label>
                            <div class="radio-group-vertical">
                                ${q.options.map(opt => `
                                    <label class="radio-label-vertical">
                                        <input type="radio" 
                                               name="q${q.id}" 
                                               value="${opt.key}"
                                               ${userAnswers[q.id] === opt.key ? 'checked' : ''}
                                               onchange="saveAnswer(${q.id}, '${opt.key}')">
                                        <span>${opt.text}</span>
                                    </label>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
            });
        } else if (group.type === 'summary-completion') {
            // Summary completion with word list and drag & drop
            if (group.summaryText) {
                html += '<div class="summary-container">';
                
                // Create drop zones for each question
                let summaryHTML = group.summaryText;
                group.questions.forEach(q => {
                    const currentAnswer = userAnswers[q.id] || '';
                    // Find the word display text if answer exists
                    let displayText = '';
                    if (currentAnswer && group.wordList) {
                        const wordItem = group.wordList.find(w => w.value.toLowerCase() === currentAnswer.toLowerCase());
                        displayText = wordItem ? `${wordItem.key}. ${wordItem.value}` : currentAnswer;
                    }
                    const regex = new RegExp(`<input[^>]*id="answer-${q.id}"[^>]*>`, 'g');
                    summaryHTML = summaryHTML.replace(regex, 
                        `<span class="question-number-inline">${q.id}</span><span class="drop-zone ${currentAnswer ? 'filled' : ''}" id="drop-${q.id}" data-question-id="${q.id}" ondrop="handleDrop(event, ${q.id})" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)" onclick="clearDropZone(${q.id})">${displayText}</span>`
                    );
                });
                html += summaryHTML;
                html += '</div>';
            }
            
            if (group.wordList) {
                html += '<div class="word-list">';
                html += '<h4>List of words</h4>';
                html += '<div class="word-buttons" id="wordButtons">';
                group.wordList.forEach(word => {
                    const isUsed = Object.values(userAnswers).some(ans => ans && ans.toLowerCase() === word.value.toLowerCase());
                    // Only show words that are NOT used
                    if (!isUsed) {
                        html += `<button class="word-btn" draggable="true" ondragstart="handleDragStart(event)" data-word="${word.value}" data-key="${word.key}" data-full="${word.key}. ${word.value}">${word.key}. ${word.value}</button>`;
                    }
                });
                html += '</div></div>';
            }
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
    const questionsPanel = document.getElementById('questionsPanel');
    
    // Function to handle text selection
    const handleSelection = (e, panel) => {
        // Prevent if resizing
        if (isResizing) return;
        
        // Small delay to ensure selection is complete
        setTimeout(() => {
            const selection = window.getSelection();
            const selectedText = selection.toString().trim();
            
            if (selectedText && selection.rangeCount > 0) {
                selectedRange = selection.getRangeAt(0);
                const rect = selectedRange.getBoundingClientRect();
                
                // Get menu width (approximate)
                const menuWidth = 180;
                const menuHeight = 80; // Approximate menu height
                
                // Position menu using absolute positioning relative to viewport
                const menuLeft = rect.left + (rect.width / 2) - (menuWidth / 2);
                const menuTop = rect.top - menuHeight - 17; // Position menu height + 17px above the selection
                
                // Make sure menu stays within viewport
                const finalLeft = Math.max(10, Math.min(menuLeft, window.innerWidth - menuWidth - 10));
                const finalTop = Math.max(70, menuTop); // Keep below header
                
                // Position menu using fixed positioning
                selectionMenu.style.position = 'fixed';
                selectionMenu.style.display = 'block';
                selectionMenu.style.left = `${finalLeft}px`;
                selectionMenu.style.top = `${finalTop}px`;
            } else {
                selectionMenu.style.display = 'none';
            }
        }, 50);
    };
    
    // Remove old event listeners if exist
    const oldPassageHandler = passagePanel._mouseupHandler;
    if (oldPassageHandler) {
        passagePanel.removeEventListener('mouseup', oldPassageHandler);
    }
    
    const oldQuestionsHandler = questionsPanel._mouseupHandler;
    if (oldQuestionsHandler) {
        questionsPanel.removeEventListener('mouseup', oldQuestionsHandler);
    }
    
    // Create handlers for both panels
    const passageHandler = (e) => handleSelection(e, passagePanel);
    const questionsHandler = (e) => handleSelection(e, questionsPanel);
    
    // Store handler references and add event listeners
    passagePanel._mouseupHandler = passageHandler;
    questionsPanel._mouseupHandler = questionsHandler;
    passagePanel.addEventListener('mouseup', passageHandler);
    questionsPanel.addEventListener('mouseup', questionsHandler);
    
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
            // Silently handle selection errors
        }
    }
}

// Show note input
function showNoteInput() {
    if (selectedRange) {
        const selectionMenu = document.getElementById('selectionMenu');
        const noteInputMenu = document.getElementById('noteInputMenu');
        const noteText = document.getElementById('noteText');
        
        // Position note input at same place as selection menu (using fixed positioning)
        noteInputMenu.style.position = 'fixed';
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
            // Silently handle selection errors
        }
    } else if (!noteText) {
        // Silently handle empty note
        return;
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

// Close settings when clicking outside
document.addEventListener('click', (e) => {
    const settingsMenu = document.getElementById('settingsMenu');
    const settingsIcon = e.target.closest('.fa-bars');
    
    if (settingsMenu && !settingsMenu.contains(e.target) && !settingsIcon) {
        settingsMenu.style.display = 'none';
    }
});

// Timer
function startTimer() {
    let timeLeft = 60 * 60; // 60 minutes in seconds
    
    const updateTimer = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        // Format as MM:SS
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        document.getElementById('timer').textContent = formattedTime;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitTest();
        }
        
        timeLeft--;
    };
    
    // Update immediately
    updateTimer();
    
    // Then update every second
    const timerInterval = setInterval(updateTimer, 1000);
}

// Submit test
function submitTest() {
    let totalQuestions = 0;
    readingData.passages.forEach(p => {
        p.questionGroups.forEach(group => {
            if (group.questions) {
                totalQuestions += group.questions.length;
            }
        });
    });
    
    const answeredCount = Object.keys(userAnswers).filter(k => userAnswers[k] && userAnswers[k].trim() !== '').length;
    
    // Calculate score and breakdown
    let correct = 0;
    let wrong = 0;
    let skipped = 0;
    const breakdown = [];
    const detailedAnswers = []; // Store detailed answer info
    
    readingData.passages.forEach(passage => {
        passage.questionGroups.forEach(group => {
            const groupStats = {
                type: getQuestionTypeName(group.type),
                total: 0,
                correct: 0,
                wrong: 0,
                skipped: 0
            };
            
            if (group.questions) {
                group.questions.forEach(q => {
                    groupStats.total++;
                    const userAnswer = (userAnswers[q.id] || '').trim();
                    const correctAnswer = q.answer;
                    const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
                    const isSkipped = !userAnswer;
                    
                    // Store detailed answer info
                    detailedAnswers.push({
                        questionId: q.id,
                        questionText: q.text,
                        userAnswer: userAnswer || '(Không trả lời)',
                        correctAnswer: correctAnswer,
                        isCorrect: isCorrect,
                        isSkipped: isSkipped,
                        type: getQuestionTypeName(group.type)
                    });
                    
                    if (isSkipped) {
                        skipped++;
                        groupStats.skipped++;
                    } else if (isCorrect) {
                        correct++;
                        groupStats.correct++;
                    } else {
                        wrong++;
                        groupStats.wrong++;
                    }
                });
            }
            
            if (groupStats.total > 0) {
                breakdown.push(groupStats);
            }
        });
    });
    
    // Calculate band score
    const bandScore = getBandScoreFromCorrect(correct);
    
    // Calculate tokens earned based on band score
    const tokensEarned = calculateTokens(bandScore);
    
    // Get current test identifier (basic or advanced)
    const testId_type = window.location.pathname.includes('basic') ? 'reading-basic' : 'reading-advanced';
    const testId = `${testId_type}-${new Date().toISOString().split('T')[0]}`; // Test type + date
    
    // Check if user already completed this test today and award tokens
    let isFirstCompletion = false;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        
        if (userIndex !== -1) {
            // Initialize tokens and completedTests if not present
            if (users[userIndex].tokens === undefined) {
                users[userIndex].tokens = 0;
            }
            if (!users[userIndex].completedTests) {
                users[userIndex].completedTests = [];
            }
            
            // Check if this test was already completed today
            if (!users[userIndex].completedTests.includes(testId)) {
                // First time completing this test today - award tokens
                users[userIndex].tokens += tokensEarned;
                users[userIndex].completedTests.push(testId);
                isFirstCompletion = true;
                
                // Update currentUser tokens
                currentUser.tokens = users[userIndex].tokens;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
            }
            
            // Save updated users
            localStorage.setItem('users', JSON.stringify(users));
            
            // Sync to cloud
            if (typeof window._cloudSaveUser === 'function') {
                window._cloudSaveUser(users[userIndex]);
            }
        }
    }
    
    // Save results to localStorage
    const testType = window.location.pathname.includes('basic') ? 'basic' : 'advanced';
    const results = {
        correct,
        wrong,
        skipped,
        total: totalQuestions,
        breakdown,
        detailedAnswers,
        bandScore,
        tokensEarned: isFirstCompletion ? tokensEarned : 0,
        isFirstCompletion,
        testType,
        userAnswers: {...userAnswers} // snapshot of all answers for review page
    };
    
    localStorage.setItem('testResults', JSON.stringify(results));
    
    // Redirect to result page
    window.location.href = 'result.html';
}

// Calculate tokens based on band score (exponential growth)
function calculateTokens(bandScore) {
    // Formula: tokens = 10 * (bandScore^2.5)
    // This creates exponential growth:
    // 5.0 -> 56 tokens
    // 6.0 -> 88 tokens
    // 7.0 -> 130 tokens
    // 8.0 -> 181 tokens
    // 8.5 -> 213 tokens
    // 9.0 -> 243 tokens
    const tokens = Math.floor(10 * Math.pow(bandScore, 2.5));
    return tokens;
}

// Get band score from correct answers
function getBandScoreFromCorrect(correctAnswers) {
    const bandScoreTable = {
        40: 9.0, 39: 8.5, 38: 8.5, 37: 8.0, 36: 8.0,
        35: 7.5, 34: 7.5, 33: 7.0, 32: 7.0, 31: 6.5,
        30: 6.5, 29: 6.0, 28: 6.0, 27: 6.0, 26: 5.5,
        25: 5.5, 24: 5.5, 23: 5.0, 22: 5.0, 21: 5.0,
        20: 5.0, 19: 4.5, 18: 4.0, 17: 4.0, 16: 4.0,
        15: 3.5, 14: 3.5, 13: 3.0, 12: 3.0, 11: 3.0,
        10: 2.5, 9: 2.5, 8: 2.5, 7: 2.0, 6: 2.0,
        5: 2.0, 4: 2.0, 3: 1.0, 2: 1.0, 1: 1.0, 0: 0.0
    };
    return bandScoreTable[correctAnswers] || 0.0;
}

function getQuestionTypeName(type) {
    const names = {
        'tfng': 'TRUE/FALSE/NOT GIVEN',
        'gap-filling': 'Gap Filling',
        'multiple-choice-table': 'Multiple Choice (Table)',
        'matching': 'Matching',
        'summary-completion': 'Summary Completion',
        'multiple-choice': 'Multiple Choice'
    };
    return names[type] || type;
}


// Drag and Drop functions
let draggedWord = null;
let draggedElement = null;
let draggedKey = null;

function handleDragStart(event) {
    draggedWord = event.target.getAttribute('data-word');
    draggedKey = event.target.getAttribute('data-key');
    draggedElement = event.target;
    event.target.style.opacity = '0.5';
}

function handleDragOver(event) {
    event.preventDefault();
    event.currentTarget.classList.add('drag-over');
}

function handleDragLeave(event) {
    event.currentTarget.classList.remove('drag-over');
}

function handleDrop(event, questionId) {
    event.preventDefault();
    event.stopPropagation();
    const dropZone = event.currentTarget;
    dropZone.classList.remove('drag-over');
    
    if (draggedWord && draggedKey) {
        // Save the answer
        userAnswers[questionId] = draggedWord;
        
        // Update navigation
        updateNavigation();
        
        // Reload the entire summary section to show the answer
        reloadSummarySection();
        
        draggedWord = null;
        draggedKey = null;
        draggedElement = null;
    }
}

// Clear drop zone by clicking
function clearDropZone(questionId) {
    const dropZone = document.getElementById(`drop-${questionId}`);
    if (!dropZone || !dropZone.classList.contains('filled')) return;
    
    // Remove answer
    delete userAnswers[questionId];
    
    // Update navigation
    updateNavigation();
    
    // Reload the entire summary section
    reloadSummarySection();
}

// Reload summary section to update drop zones and word list
function reloadSummarySection() {
    const passage = readingData.passages[currentPart - 1];
    passage.questionGroups.forEach(group => {
        if (group.type === 'summary-completion') {
            // Find the summary container
            const summaryContainer = document.querySelector('.summary-container');
            const wordList = document.querySelector('.word-list');
            
            if (summaryContainer && group.summaryText) {
                // Rebuild summary with updated answers
                let summaryHTML = group.summaryText;
                group.questions.forEach(q => {
                    const currentAnswer = userAnswers[q.id] || '';
                    let displayText = '';
                    if (currentAnswer && group.wordList) {
                        const wordItem = group.wordList.find(w => w.value.toLowerCase() === currentAnswer.toLowerCase());
                        displayText = wordItem ? `${wordItem.key}. ${wordItem.value}` : currentAnswer;
                    }
                    const regex = new RegExp(`<input[^>]*id="answer-${q.id}"[^>]*>`, 'g');
                    summaryHTML = summaryHTML.replace(regex, 
                        `<span class="question-number-inline">${q.id}</span><span class="drop-zone ${currentAnswer ? 'filled' : ''}" id="drop-${q.id}" data-question-id="${q.id}" ondrop="handleDrop(event, ${q.id})" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)" onclick="clearDropZone(${q.id})">${displayText}</span>`
                    );
                });
                summaryContainer.innerHTML = summaryHTML;
            }
            
            if (wordList && group.wordList) {
                // Rebuild word list
                const wordButtons = wordList.querySelector('.word-buttons');
                if (wordButtons) {
                    let html = '';
                    group.wordList.forEach(word => {
                        const isUsed = Object.values(userAnswers).some(ans => ans && ans.toLowerCase() === word.value.toLowerCase());
                        if (!isUsed) {
                            html += `<button class="word-btn" draggable="true" ondragstart="handleDragStart(event)" data-word="${word.value}" data-key="${word.key}" data-full="${word.key}. ${word.value}">${word.key}. ${word.value}</button>`;
                        }
                    });
                    wordButtons.innerHTML = html;
                }
            }
        }
    });
}

// Reload word list to update visibility (kept for compatibility)
function reloadWordList() {
    reloadSummarySection();
}

// Reset opacity when drag ends
document.addEventListener('dragend', (e) => {
    if (e.target.classList.contains('word-btn')) {
        e.target.style.opacity = '1';
    }
});
