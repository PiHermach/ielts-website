window._basicData = (function(){ // IELTS Reading Practice Test - Basic Level
const readingData = {
    passages: [
        {
            id: 1,
            title: "The Benefits of Video Games in Education",
            content: `
                <p>For many years, video games were viewed as a mere distraction, a hobby that took children away from their studies. However, recent research suggests that when used correctly, video games can be powerful tools for learning. Educational experts are now looking at how the mechanics of games—such as immediate feedback, goal setting, and problem-solving—can be integrated into the classroom.</p>

                <p>One of the primary benefits is increased engagement. Traditional teaching methods, like lectures or reading from textbooks, can sometimes fail to hold a student's attention. In contrast, video games are designed to be immersive. They require active participation, meaning students are not just passive receivers of information but are making decisions that affect the outcome of the game.</p>

                <p>Furthermore, video games can help develop "soft skills" such as teamwork and communication. Many modern games are multiplayer, requiring players to work together to achieve a common goal. This mirrors real-world workplace environments where collaboration is essential. Additionally, games often involve complex puzzles that require logical thinking and persistence. Unlike a math problem on a piece of paper, a game allows a student to try, fail, and immediately try again, reducing the fear of making mistakes.</p>

                <p>Despite these advantages, balance is key. Excessive gaming can lead to health issues and social isolation. Therefore, the goal for educators is not to replace books with controllers, but to use games as a supplement to traditional learning to create a more dynamic educational experience.</p>
            `,
            questionGroups: [
                {
                    type: "tfng",
                    title: "Questions 1-7",
                    instruction: "Do the following statements agree with the information given in the passage?<br>Write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.",
                    options: ["TRUE", "FALSE", "NOT GIVEN"],
                    questions: [
                        {
                            id: 1, text: "In the past, most people thought video games were helpful for students.", answer: "FALSE",
                            explanation: "Paragraph 1: <em>\"For many years, video games were viewed as a <strong>mere distraction</strong>, a hobby that took children <strong>away from their studies</strong>.\"</em> This directly contradicts the statement. The passage says games were seen as a distraction <em>from</em> studying, not as helpful <em>for</em> studying. The key contrast is between <strong>\"distraction\"</strong> (negative) and <strong>\"helpful\"</strong> (positive)."
                        },
                        {
                            id: 2, text: "Educational experts are studying the mechanics of games to improve teaching.", answer: "TRUE",
                            explanation: "Paragraph 1: <em>\"Educational experts are now looking at how the <strong>mechanics of games</strong>—such as immediate feedback, goal setting, and problem-solving—can be <strong>integrated into the classroom</strong>.\"</em> This is a direct match. <em>\"Integrated into the classroom\"</em> = improving teaching. The statement is a paraphrase of this sentence."
                        },
                        {
                            id: 3, text: "Video games make students more passive compared to traditional lectures.", answer: "FALSE",
                            explanation: "Paragraph 2: <em>\"They require <strong>active participation</strong>, meaning students are <strong>not just passive receivers</strong> of information.\"</em> The passage explicitly says games make students <em>active</em>, not passive. The statement reverses this — it claims games make students <em>more</em> passive, which directly contradicts the text."
                        },
                        {
                            id: 4, text: "Multiplayer games can help students learn how to work in teams.", answer: "TRUE",
                            explanation: "Paragraph 3: <em>\"Many modern games are <strong>multiplayer</strong>, requiring players to <strong>work together</strong> to achieve a common goal. This mirrors real-world <strong>workplace environments where collaboration is essential</strong>.\"</em> Working together = teamwork. The statement is a direct paraphrase of this information."
                        },
                        {
                            id: 5, text: "Playing video games is more expensive than buying school textbooks.", answer: "NOT GIVEN",
                            explanation: "The passage <strong>never mentions cost, price, or expense</strong> of video games or textbooks at any point. It discusses educational benefits and drawbacks, but financial comparison is entirely absent. When a topic is not addressed anywhere in the text, the answer is NOT GIVEN."
                        },
                        {
                            id: 6, text: "The 'try and fail' nature of games helps reduce the fear of failure.", answer: "TRUE",
                            explanation: "Paragraph 3: <em>\"a game allows a student to try, fail, and immediately try again, <strong>reducing the fear of making mistakes</strong>.\"</em> The statement paraphrases this precisely: <em>\"try and fail\"</em> = <em>\"try, fail, and immediately try again\"</em>; <em>\"fear of failure\"</em> = <em>\"fear of making mistakes.\"</em> This is a direct match."
                        },
                        {
                            id: 7, text: "Teachers believe that video games should completely replace traditional books.", answer: "FALSE",
                            explanation: "Paragraph 4: <em>\"the goal for educators is <strong>not to replace books</strong> with controllers, but to use games as a <strong>supplement</strong> to traditional learning.\"</em> The passage explicitly says games should NOT replace books — they should supplement them. The statement claims the opposite, making it FALSE."
                        }
                    ]
                },
                {
                    type: "gap-filling",
                    title: "Questions 8-13",
                    instruction: "Complete the notes below. Write NO MORE THAN TWO WORDS from the passage for each answer.",
                    questions: [
                        {
                            id: 8, text: "Games provide ___________ and encourage goal setting.", answer: "immediate feedback",
                            explanation: "Paragraph 1: <em>\"the mechanics of games—such as <strong>immediate feedback</strong>, goal setting, and problem-solving.\"</em> The note says <em>\"Games provide ___ and encourage goal setting\"</em> — both <em>\"immediate feedback\"</em> and <em>\"goal setting\"</em> are listed together in the passage. The answer is the two-word phrase <strong>immediate feedback</strong>."
                        },
                        {
                            id: 9, text: "Active ___________ is required, unlike reading textbooks.", answer: "participation",
                            explanation: "Paragraph 2: <em>\"They require active <strong>participation</strong>.\"</em> The note uses the exact word <em>\"Active\"</em> from the passage, and the blank follows it. The answer is <strong>participation</strong> — one word that completes the phrase <em>\"active participation\"</em> from the text."
                        },
                        {
                            id: 10, text: "Multiplayer modes mirror ___________ environments.", answer: "workplace",
                            explanation: "Paragraph 3: <em>\"This mirrors real-world <strong>workplace</strong> environments where collaboration is essential.\"</em> The note paraphrases <em>\"mirrors\"</em> directly and uses <em>\"environments\"</em> from the passage. The missing word is <strong>workplace</strong> — the specific type of environment mentioned."
                        },
                        {
                            id: 11, text: "Puzzles in games help improve ___________ thinking.", answer: "logical",
                            explanation: "Paragraph 3: <em>\"games often involve complex puzzles that require <strong>logical</strong> thinking and persistence.\"</em> The note says <em>\"Puzzles in games help improve ___ thinking\"</em> — this paraphrases <em>\"require logical thinking.\"</em> The answer is <strong>logical</strong>."
                        },
                        {
                            id: 12, text: "Too much gaming might cause ___________ and health problems.", answer: "social isolation",
                            explanation: "Paragraph 4: <em>\"Excessive gaming can lead to health issues and <strong>social isolation</strong>.\"</em> The note reverses the order (health problems listed second in the note, first in the passage) but the content matches. The answer is the two-word phrase <strong>social isolation</strong>."
                        },
                        {
                            id: 13, text: "Games should be seen as a ___________ to classroom learning.", answer: "supplement",
                            explanation: "Paragraph 4: <em>\"to use games as a <strong>supplement</strong> to traditional learning.\"</em> The note paraphrases <em>\"traditional learning\"</em> as <em>\"classroom learning\"</em> — both refer to conventional education. The answer is <strong>supplement</strong>, meaning an addition that enhances rather than replaces."
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "The Red Squirrel: A Survival Story",
            content: `
                <p><strong>A.</strong> The red squirrel is a small mammal native to Europe and Asia. Characterized by its reddish-brown fur and large, bushy tail, it has long been a symbol of the forest. These creatures are primarily arboreal, meaning they spend most of their lives in trees, where they are safe from ground-dwelling predators.</p>

                <p><strong>B.</strong> The diet of a red squirrel consists mostly of seeds from pine cones, though they also enjoy hazelnuts, berries, and occasionally bird eggs. One of their most famous behaviors is "caching," where they hide food in the ground or in tree hollows to survive the cold winter months when fresh food is scarce. Interestingly, they have an excellent sense of smell, allowing them to locate buried nuts even under deep snow.</p>

                <p><strong>C.</strong> In recent decades, the red squirrel population in the UK has declined significantly. The main reason is the introduction of the Eastern gray squirrel from North America. Gray squirrels are larger, stronger, and more aggressive. More importantly, they carry a virus called "squirrel pox" which is harmless to grays but fatal to reds.</p>

                <p><strong>D.</strong> Conservation efforts are currently underway to protect the remaining red squirrel habitats. In parts of Scotland and Northern England, "buffer zones" have been established where gray squirrel numbers are controlled. Public awareness campaigns also encourage citizens to report sightings of red squirrels to help researchers track their movements and health.</p>
            `,
            questionGroups: [
                {
                    type: "multiple-choice-table",
                    title: "Questions 14-18",
                    instruction: "Which paragraph contains the following information?<br>Choose the correct letter, A-D.",
                    options: ["A", "B", "C", "D"],
                    questions: [
                        {
                            id: 14, text: "A description of what the red squirrel looks like.", answer: "A",
                            explanation: "Paragraph A: <em>\"Characterized by its <strong>reddish-brown fur</strong> and <strong>large, bushy tail</strong>.\"</em> This is a physical description of the animal's appearance. No other paragraph describes the squirrel's physical features. The key words are <strong>fur</strong> and <strong>tail</strong> — both visual, descriptive details."
                        },
                        {
                            id: 15, text: "Information about a deadly disease.", answer: "C",
                            explanation: "Paragraph C: <em>\"they carry a virus called '<strong>squirrel pox</strong>' which is harmless to grays but <strong>fatal to reds</strong>.\"</em> The word <strong>fatal</strong> means deadly. This is the only paragraph that mentions a disease. The question uses <em>\"deadly disease\"</em> as a paraphrase of <em>\"fatal virus.\"</em>"
                        },
                        {
                            id: 16, text: "How red squirrels find food during the winter.", answer: "B",
                            explanation: "Paragraph B: <em>\"they have an excellent <strong>sense of smell</strong>, allowing them to <strong>locate buried nuts even under deep snow</strong>.\"</em> This directly answers how they find food in winter. The question paraphrases <em>\"locate buried nuts under snow\"</em> as <em>\"find food during the winter.\"</em>"
                        },
                        {
                            id: 17, text: "A list of various things the red squirrel eats.", answer: "B",
                            explanation: "Paragraph B: <em>\"The diet of a red squirrel consists mostly of <strong>seeds from pine cones</strong>, though they also enjoy <strong>hazelnuts, berries</strong>, and occasionally <strong>bird eggs</strong>.\"</em> This is a clear list of food items. The question asks for <em>\"various things the red squirrel eats\"</em> — paragraph B provides exactly this list."
                        },
                        {
                            id: 18, text: "Examples of actions taken to save the species.", answer: "D",
                            explanation: "Paragraph D: <em>\"<strong>Conservation efforts</strong> are currently underway... '<strong>buffer zones</strong>' have been established... <strong>Public awareness campaigns</strong> also encourage citizens to report sightings.\"</em> These are all concrete actions taken to protect the species. The question asks for <em>\"actions taken to save the species\"</em> — paragraph D lists three specific conservation measures."
                        }
                    ]
                },
                {
                    type: "gap-filling",
                    title: "Questions 19-26",
                    instruction: "Complete the sentences below. Write ONE WORD ONLY from the passage for each answer.",
                    questions: [
                        {
                            id: 19, text: "Red squirrels spend the majority of their time in ___________ to avoid predators.", answer: "trees",
                            explanation: "Paragraph A: <em>\"they spend most of their lives in <strong>trees</strong>, where they are safe from ground-dwelling predators.\"</em> The sentence uses <em>\"majority of their time\"</em> as a paraphrase of <em>\"most of their lives.\"</em> The answer is <strong>trees</strong> — one word, taken directly from the passage."
                        },
                        {
                            id: 20, text: "The practice of hiding food is known as ___________.", answer: "caching",
                            explanation: "Paragraph B: <em>\"One of their most famous behaviors is '<strong>caching</strong>,' where they hide food in the ground or in tree hollows.\"</em> The passage defines caching as the practice of hiding food. The question paraphrases the definition and asks for the technical term. The answer is <strong>caching</strong>."
                        },
                        {
                            id: 21, text: "A red squirrel uses its ___________ to find food hidden under snow.", answer: "smell",
                            explanation: "Paragraph B: <em>\"they have an excellent sense of <strong>smell</strong>, allowing them to locate buried nuts even under deep snow.\"</em> The question asks what body sense they use. The answer is <strong>smell</strong> — the specific sense mentioned. Note: the passage says <em>\"sense of smell\"</em> but the answer is just <strong>smell</strong> (one word only)."
                        },
                        {
                            id: 22, text: "The ___________ squirrel was brought to the UK from another continent.", answer: "gray",
                            explanation: "Paragraph C: <em>\"the introduction of the Eastern <strong>gray</strong> squirrel from North America.\"</em> North America is another continent. The question paraphrases <em>\"introduction from North America\"</em> as <em>\"brought to the UK from another continent.\"</em> The answer is <strong>gray</strong>."
                        },
                        {
                            id: 23, text: "Gray squirrels are described as being more ___________ than red squirrels.", answer: "aggressive",
                            explanation: "Paragraph C: <em>\"Gray squirrels are larger, stronger, and more <strong>aggressive</strong>.\"</em> The question asks for the comparative adjective used to describe gray squirrels. The passage lists three qualities; the question specifically asks about the one that describes behaviour: <strong>aggressive</strong>."
                        },
                        {
                            id: 24, text: "The squirrel pox ___________ does not kill gray squirrels.", answer: "virus",
                            explanation: "Paragraph C: <em>\"they carry a <strong>virus</strong> called 'squirrel pox' which is harmless to grays but fatal to reds.\"</em> The question says <em>\"does not kill gray squirrels\"</em> — this paraphrases <em>\"harmless to grays.\"</em> The blank asks what type of thing squirrel pox is: a <strong>virus</strong>."
                        },
                        {
                            id: 25, text: "'Buffer zones' are located in ___________ and England.", answer: "Scotland",
                            explanation: "Paragraph D: <em>\"In parts of <strong>Scotland</strong> and Northern England, 'buffer zones' have been established.\"</em> The question fills in the first location. The answer is <strong>Scotland</strong> — taken directly from the passage."
                        },
                        {
                            id: 26, text: "Members of the ___________ are asked to help by reporting where they see red squirrels.", answer: "public",
                            explanation: "Paragraph D: <em>\"<strong>Public</strong> awareness campaigns also encourage citizens to report sightings of red squirrels.\"</em> The question says <em>\"Members of the ___\"</em> — this refers to the general public. <em>\"Citizens\"</em> in the passage = <em>\"members of the public.\"</em> The answer is <strong>public</strong>."
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "The Evolution of the Bicycle",
            content: `
                <p>The bicycle is one of the most efficient forms of transport ever invented. However, the modern bike did not appear overnight; it evolved over nearly two centuries of innovation. The earliest ancestor of the bicycle was the "dandy horse," invented by Baron Karl von Drais in 1817. This wooden machine had two wheels but no pedals; the rider moved it by pushing their feet against the ground.</p>

                <p>In the 1860s, French inventors added pedals to the front wheel, creating the "velocipede." While revolutionary, it was nicknamed the "boneshaker" because its iron tires and wooden frame made for an incredibly uncomfortable ride on cobblestone streets. People enjoyed the speed but hated the vibration.</p>

                <p>The next major step was the "penny-farthing," famous for its giant front wheel and tiny back wheel. The large wheel allowed the rider to travel further with each turn of the pedals. However, it was dangerous. Because the rider sat so high up, hitting a small stone could send them flying over the handlebars. This led to the development of the "Safety Bicycle" in the 1880s, which featured two wheels of equal size and a chain drive. This design is very similar to the bicycles we see today. With the later addition of rubber tires filled with air, the bicycle became a comfortable and popular choice for millions.</p>
            `,
            questionGroups: [
                {
                    type: "multiple-choice",
                    title: "Questions 27-32",
                    instruction: "Choose the correct letter, A, B, or C.",
                    questions: [
                        {
                            id: 27,
                            text: "The 'dandy horse' was different from modern bikes because it:",
                            options: [
                                { key: "A", text: "Was made of metal." },
                                { key: "B", text: "Did not have any wheels." },
                                { key: "C", text: "Had no pedals." }
                            ],
                            answer: "C",
                            explanation: "Paragraph 1: <em>\"This wooden machine had two wheels but <strong>no pedals</strong>; the rider moved it by pushing their feet against the ground.\"</em> Option C (<em>\"Had no pedals\"</em>) is a direct match. Option A is wrong — it was made of <em>wood</em>, not metal. Option B is wrong — it had <em>two wheels</em>. The defining difference from modern bikes is the absence of pedals."
                        },
                        {
                            id: 28,
                            text: "The 'boneshaker' got its nickname because:",
                            options: [
                                { key: "A", text: "It was very fast." },
                                { key: "B", text: "It was uncomfortable to ride." },
                                { key: "C", text: "It was made by a doctor." }
                            ],
                            answer: "B",
                            explanation: "Paragraph 2: <em>\"it was nicknamed the 'boneshaker' because its iron tires and wooden frame made for an <strong>incredibly uncomfortable ride</strong> on cobblestone streets.\"</em> Option B (<em>\"uncomfortable to ride\"</em>) directly matches. The passage also says <em>\"People enjoyed the speed\"</em> — so speed (Option A) was a positive, not the reason for the nickname. Option C is invented."
                        },
                        {
                            id: 29,
                            text: "What was the main advantage of the penny-farthing?",
                            options: [
                                { key: "A", text: "It was safer than earlier models." },
                                { key: "B", text: "It covered more distance per pedal turn." },
                                { key: "C", text: "It was easier to climb onto." }
                            ],
                            answer: "B",
                            explanation: "Paragraph 3: <em>\"The large wheel allowed the rider to <strong>travel further with each turn of the pedals</strong>.\"</em> Option B (<em>\"covered more distance per pedal turn\"</em>) is a direct paraphrase. Option A is wrong — the passage says it was <em>dangerous</em>. Option C is wrong — sitting <em>\"so high up\"</em> implies it was harder, not easier, to mount."
                        },
                        {
                            id: 30,
                            text: "The 'Safety Bicycle' was invented in the:",
                            options: [
                                { key: "A", text: "1810s." },
                                { key: "B", text: "1860s." },
                                { key: "C", text: "1880s." }
                            ],
                            answer: "C",
                            explanation: "Paragraph 3: <em>\"This led to the development of the 'Safety Bicycle' in the <strong>1880s</strong>.\"</em> This is a direct factual answer. The 1810s (Option A) is when the dandy horse was invented (1817). The 1860s (Option B) is when the velocipede/boneshaker appeared. The Safety Bicycle was specifically the <strong>1880s</strong>."
                        },
                        {
                            id: 31,
                            text: "What made the Safety Bicycle safer?",
                            options: [
                                { key: "A", text: "Having wheels of the same size." },
                                { key: "B", text: "Using a giant front wheel." },
                                { key: "C", text: "Having no chain." }
                            ],
                            answer: "A",
                            explanation: "Paragraph 3: <em>\"the 'Safety Bicycle' in the 1880s, which featured <strong>two wheels of equal size</strong> and a chain drive.\"</em> Option A (<em>\"wheels of the same size\"</em>) directly matches <em>\"two wheels of equal size.\"</em> Option B describes the penny-farthing (dangerous, not safe). Option C is wrong — the Safety Bicycle <em>had</em> a chain drive."
                        },
                        {
                            id: 32,
                            text: "What final invention made the ride much smoother?",
                            options: [
                                { key: "A", text: "Iron tires." },
                                { key: "B", text: "Air-filled rubber tires." },
                                { key: "C", text: "Wooden handlebars." }
                            ],
                            answer: "B",
                            explanation: "Paragraph 3: <em>\"With the later addition of <strong>rubber tires filled with air</strong>, the bicycle became a comfortable and popular choice for millions.\"</em> Option B (<em>\"Air-filled rubber tires\"</em>) is a direct paraphrase of <em>\"rubber tires filled with air.\"</em> Option A (iron tires) was used in the boneshaker and caused discomfort. Option C is not mentioned."
                        }
                    ]
                },
                {
                    type: "gap-filling",
                    title: "Questions 33-40",
                    instruction: "Complete the summary below. Write NO MORE THAN TWO WORDS from the passage for each answer.",
                    questions: [
                        {
                            id: 33, text: "The history of the bicycle began with Baron Karl von Drais, who created a ___________ vehicle.", answer: "wooden",
                            explanation: "Paragraph 1: <em>\"This <strong>wooden</strong> machine had two wheels but no pedals.\"</em> The summary describes the dandy horse as a <em>\"___ vehicle\"</em> — the passage calls it a <em>\"wooden machine.\"</em> The answer is <strong>wooden</strong>."
                        },
                        {
                            id: 34, text: "Later, the velocipede introduced ___________.", answer: "pedals",
                            explanation: "Paragraph 2: <em>\"French inventors added <strong>pedals</strong> to the front wheel, creating the 'velocipede.'\"</em> The summary says the velocipede <em>\"introduced ___\"</em> — the key innovation of the velocipede was the addition of <strong>pedals</strong>."
                        },
                        {
                            id: 35, text: "But the ride was ruined by ___________.", answer: "vibration",
                            explanation: "Paragraph 2: <em>\"People enjoyed the speed but hated the <strong>vibration</strong>.\"</em> The summary says the ride was <em>\"ruined by ___\"</em> — the passage says people <em>\"hated the vibration,\"</em> which ruined the experience. The answer is <strong>vibration</strong>."
                        },
                        {
                            id: 36, text: "The ___________ had a very large front wheel.", answer: "penny-farthing",
                            explanation: "Paragraph 3: <em>\"the '<strong>penny-farthing</strong>,' famous for its <strong>giant front wheel</strong> and tiny back wheel.\"</em> The summary describes a bike with <em>\"a very large front wheel\"</em> — this is the penny-farthing. The answer is the two-word name <strong>penny-farthing</strong>."
                        },
                        {
                            id: 37, text: "But it caused many ___________ because of its height.", answer: "accidents",
                            explanation: "Paragraph 3: <em>\"it was dangerous. Because the rider sat so high up, hitting a small stone could send them flying over the handlebars.\"</em> Flying over handlebars = <strong>accidents</strong>. The summary says <em>\"caused many ___ because of its height\"</em> — the height caused dangerous falls/accidents."
                        },
                        {
                            id: 38, text: "Finally, the ___________ introduced equal wheels.", answer: "Safety Bicycle",
                            explanation: "Paragraph 3: <em>\"the '<strong>Safety Bicycle</strong>' in the 1880s, which featured two wheels of <strong>equal size</strong>.\"</em> The summary says <em>\"introduced equal wheels\"</em> — this paraphrases <em>\"two wheels of equal size.\"</em> The answer is the two-word name <strong>Safety Bicycle</strong>."
                        },
                        {
                            id: 39, text: "It also introduced a ___________ system.", answer: "chain drive",
                            explanation: "Paragraph 3: <em>\"the 'Safety Bicycle' in the 1880s, which featured two wheels of equal size and a <strong>chain drive</strong>.\"</em> The summary says <em>\"introduced a ___ system\"</em> — the Safety Bicycle introduced the <strong>chain drive</strong> system. This is a two-word answer taken directly from the passage."
                        },
                        {
                            id: 40, text: "Today, the bicycle is considered a highly ___________ form of transportation.", answer: "efficient",
                            explanation: "Paragraph 1 (opening sentence): <em>\"The bicycle is one of the most <strong>efficient</strong> forms of transport ever invented.\"</em> The summary paraphrases this as <em>\"a highly ___ form of transportation.\"</em> The answer is <strong>efficient</strong> — the very first word used to describe the bicycle in the passage."
                        }
                    ]
                }
            ]
        }
    ]
};
; return readingData; })();
