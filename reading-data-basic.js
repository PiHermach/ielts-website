// IELTS Reading Practice Test - Basic Level
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
                        { id: 1, text: "In the past, most people thought video games were helpful for students.", answer: "FALSE" },
                        { id: 2, text: "Educational experts are studying the mechanics of games to improve teaching.", answer: "TRUE" },
                        { id: 3, text: "Video games make students more passive compared to traditional lectures.", answer: "FALSE" },
                        { id: 4, text: "Multiplayer games can help students learn how to work in teams.", answer: "TRUE" },
                        { id: 5, text: "Playing video games is more expensive than buying school textbooks.", answer: "NOT GIVEN" },
                        { id: 6, text: "The 'try and fail' nature of games helps reduce the fear of failure.", answer: "TRUE" },
                        { id: 7, text: "Teachers believe that video games should completely replace traditional books.", answer: "FALSE" }
                    ]
                },
                {
                    type: "gap-filling",
                    title: "Questions 8-13",
                    instruction: "Complete the notes below. Write NO MORE THAN TWO WORDS from the passage for each answer.",
                    questions: [
                        { id: 8, text: "Games provide ___________ and encourage goal setting.", answer: "immediate feedback" },
                        { id: 9, text: "Active ___________ is required, unlike reading textbooks.", answer: "participation" },
                        { id: 10, text: "Multiplayer modes mirror ___________ environments.", answer: "workplace" },
                        { id: 11, text: "Puzzles in games help improve ___________ thinking.", answer: "logical" },
                        { id: 12, text: "Too much gaming might cause ___________ and health problems.", answer: "social isolation" },
                        { id: 13, text: "Games should be seen as a ___________ to classroom learning.", answer: "supplement" }
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
                        { id: 14, text: "A description of what the red squirrel looks like.", answer: "A" },
                        { id: 15, text: "Information about a deadly disease.", answer: "C" },
                        { id: 16, text: "How red squirrels find food during the winter.", answer: "B" },
                        { id: 17, text: "A list of various things the red squirrel eats.", answer: "B" },
                        { id: 18, text: "Examples of actions taken to save the species.", answer: "D" }
                    ]
                },
                {
                    type: "gap-filling",
                    title: "Questions 19-26",
                    instruction: "Complete the sentences below. Write ONE WORD ONLY from the passage for each answer.",
                    questions: [
                        { id: 19, text: "Red squirrels spend the majority of their time in ___________ to avoid predators.", answer: "trees" },
                        { id: 20, text: "The practice of hiding food is known as ___________.", answer: "caching" },
                        { id: 21, text: "A red squirrel uses its ___________ to find food hidden under snow.", answer: "smell" },
                        { id: 22, text: "The ___________ squirrel was brought to the UK from another continent.", answer: "gray" },
                        { id: 23, text: "Gray squirrels are described as being more ___________ than red squirrels.", answer: "aggressive" },
                        { id: 24, text: "The squirrel pox ___________ does not kill gray squirrels.", answer: "virus" },
                        { id: 25, text: "'Buffer zones' are located in ___________ and England.", answer: "Scotland" },
                        { id: 26, text: "Members of the ___________ are asked to help by reporting where they see red squirrels.", answer: "public" }
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
                            answer: "C"
                        },
                        { 
                            id: 28, 
                            text: "The 'boneshaker' got its nickname because:",
                            options: [
                                { key: "A", text: "It was very fast." },
                                { key: "B", text: "It was uncomfortable to ride." },
                                { key: "C", text: "It was made by a doctor." }
                            ],
                            answer: "B"
                        },
                        { 
                            id: 29, 
                            text: "What was the main advantage of the penny-farthing?",
                            options: [
                                { key: "A", text: "It was safer than earlier models." },
                                { key: "B", text: "It covered more distance per pedal turn." },
                                { key: "C", text: "It was easier to climb onto." }
                            ],
                            answer: "B"
                        },
                        { 
                            id: 30, 
                            text: "The 'Safety Bicycle' was invented in the:",
                            options: [
                                { key: "A", text: "1810s." },
                                { key: "B", text: "1860s." },
                                { key: "C", text: "1880s." }
                            ],
                            answer: "C"
                        },
                        { 
                            id: 31, 
                            text: "What made the Safety Bicycle safer?",
                            options: [
                                { key: "A", text: "Having wheels of the same size." },
                                { key: "B", text: "Using a giant front wheel." },
                                { key: "C", text: "Having no chain." }
                            ],
                            answer: "A"
                        },
                        { 
                            id: 32, 
                            text: "What final invention made the ride much smoother?",
                            options: [
                                { key: "A", text: "Iron tires." },
                                { key: "B", text: "Air-filled rubber tires." },
                                { key: "C", text: "Wooden handlebars." }
                            ],
                            answer: "B"
                        }
                    ]
                },
                {
                    type: "gap-filling",
                    title: "Questions 33-40",
                    instruction: "Complete the summary below. Write NO MORE THAN TWO WORDS from the passage for each answer.",
                    questions: [
                        { id: 33, text: "The history of the bicycle began with Baron Karl von Drais, who created a ___________ vehicle.", answer: "wooden" },
                        { id: 34, text: "Later, the velocipede introduced ___________.", answer: "pedals" },
                        { id: 35, text: "But the ride was ruined by ___________.", answer: "vibration" },
                        { id: 36, text: "The ___________ had a very large front wheel.", answer: "penny-farthing" },
                        { id: 37, text: "But it caused many ___________ because of its height.", answer: "accidents" },
                        { id: 38, text: "Finally, the ___________ introduced equal wheels.", answer: "Safety Bicycle" },
                        { id: 39, text: "It also introduced a ___________ system.", answer: "chain drive" },
                        { id: 40, text: "Today, the bicycle is considered a highly ___________ form of transportation.", answer: "efficient" }
                    ]
                }
            ]
        }
    ]
};
