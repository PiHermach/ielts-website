// Data for 3 passages with all question types
const readingData = {
    passages: [
        {
            id: 1,
            title: "The Pearl",
            content: `
                <p><strong>A.</strong> The pearl has always had a special status in the rich and powerful all through the history. For instance, women from ancient Rome went to bed with pearls on them, so that they could remind themselves how wealthy they were when waking up. In the eastern countries like Persia, ground pearl powders could be used as a medicine to cure anything including heart diseases and epilepsy.</p>

                <p><strong>B.</strong> Pearls can generally be divided into three categories: natural, cultured and imitation. When an irritant (such as a grain of sand) gets inside an oyster or clam, the mollusk will secrete a fluid as a means of defence to coat the irritant. Gradually, layers are accumulated around the irritant until a lustrous natural pearl is formed.</p>

                <p><strong>C.</strong> A cultured pearl undergoes the same process. There is only one difference between cultured pearls and natural ones. In cultured pearls, the irritant is a head called "mother of pearl" and is placed in the oyster through surgical implantation. The bead is much larger than any natural pearl. As a result, much larger pearls can be produced.</p>

                <p><strong>D.</strong> Pearls can come from both salt and freshwater sources. Typically, pearls from salt water usually have high quality. In addition, freshwater pearls come in a wider range of colours than saltwater pearls. Naturally, black pearls are highly valued because of their rarity.</p>

                <p><strong>E.</strong> In history, pearls have had great importance within the men of wealth and power. Good-quality natural pearls are exceedingly unusual. While a natural pearl is formed by layers of nacre coating some irritant inside the shell of mollusk, cultured pearls differ from natural pearls only in that the irritant is a surgically implanted bead.</p>
            `,
            questionGroups: [
                {
                    type: "tfng",
                    title: "Questions 1-5",
                    instruction: "Do the following statements agree with the information given in the passage?",
                    options: ["TRUE", "FALSE", "NOT GIVEN"],
                    questions: [
                        { id: 1, text: "Ancient Romans used pearls as a symbol of wealth", answer: "TRUE" },
                        { id: 2, text: "Pearl powder was used to cure all diseases in Persia", answer: "FALSE" },
                        { id: 3, text: "Natural pearls are more expensive than cultured pearls", answer: "NOT GIVEN" },
                        { id: 4, text: "Cultured pearls use surgical implantation method", answer: "TRUE" },
                        { id: 5, text: "Black pearls are the most common type", answer: "FALSE" }
                    ]
                },
                {
                    type: "gap-filling",
                    title: "Questions 6-13",
                    instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.",
                    questions: [
                        { id: 6, text: "What substance does a mollusk secrete to coat an irritant?", answer: "fluid" },
                        { id: 7, text: "What is the bead in cultured pearls called?", answer: "mother of pearl" },
                        { id: 8, text: "Which type of water typically produces higher quality pearls?", answer: "salt water" },
                        { id: 9, text: "What characteristic do freshwater pearls have more variety in?", answer: "colours" },
                        { id: 10, text: "What color of pearls are highly valued due to rarity?", answer: "black" },
                        { id: 11, text: "How many categories can pearls be divided into?", answer: "three" },
                        { id: 12, text: "What enters the oyster to start pearl formation?", answer: "irritant" },
                        { id: 13, text: "What accumulates around the irritant in layers?", answer: "nacre" }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "A Mechanical Friend for Children",
            content: `
                <p><strong>A.</strong> The development of robots that interact socially with people and assist them in everyday life has been an elusive goal of modern science. Despite impressive advances in the mechanical aspects of this problem, producing robots that bond and socialize with people for sustained periods of time has proven difficult. The most successful robots so far have been storytellers, but they have only been able to maintain human interest for a limited time.</p>

                <p><strong>B.</strong> In a recent study, researchers at the Institute for Social Computation in California introduced a state of the art social robot into a classroom of 18 24-month-olds for five months as a way of studying human-robot interactions. The researchers, including Fumihide Tanaka and Javier R. Movellan, introduced the robot into a childhood education center.</p>

                <p><strong>C.</strong> The researchers sent instructions to the robot about every two minutes to do things like giggle, dance, sit down, fall down or walk in a certain direction. The robot was also programmed to respond to being touched. The results showed that the quality of those interactions improved steadily over 27 sessions.</p>

                <p><strong>D.</strong> Initially the children treated the robot very differently from the way they treated each other. Early in the study some children cried when QRIO fell, but a month into the study, the toddlers helped QRIO stand up by pushing it back on its hands. The most important aspect of the work was touch.</p>

                <p><strong>E.</strong> The construction industry is the principle user of solid wood products. However, the small size of population, plus its small manufacturing base, means that the forestry industry's domestic market-place needs careful consideration.</p>
            `,
            questionGroups: [
                {
                    type: "multiple-choice-table",
                    title: "Questions 14-18",
                    instruction: "Which paragraph contains the following information?<br>Choose the correct letter, A-G.",
                    options: ["A", "B", "C", "D", "E", "F", "G"],
                    questions: [
                        { id: 14, text: "a comparison of children's reactions to two different robots", answer: "A" },
                        { id: 15, text: "speculation about future ways robots may communicate", answer: "E" },
                        { id: 16, text: "changes in how children physically interacted with a robot", answer: "D" },
                        { id: 17, text: "a comparison between human relationships with animals and robots", answer: "A" },
                        { id: 18, text: "a description of how a robot's behaviour was controlled", answer: "C" }
                    ]
                },
                {
                    type: "matching",
                    title: "Questions 19-23",
                    instruction: "Match each statement with the correct person, A-D.",
                    note: "You may use any letter more than once.",
                    questions: [
                        { id: 19, text: "Robots may need emotional qualities as well as intelligence", answer: "A" },
                        { id: 20, text: "It is unclear whether increased human-robot interaction will be beneficial", answer: "B" },
                        { id: 21, text: "Isolated people have an obvious need to think about robots", answer: "C" },
                        { id: 22, text: "A wide range of behaviours is essential for effective interaction", answer: "D" },
                        { id: 23, text: "Robots could play a valuable role in education", answer: "A" }
                    ],
                    optionsList: [
                        { key: "A", value: "Fumihide Tanaka" },
                        { key: "B", value: "Javier R. Movellan" },
                        { key: "C", value: "Tomoko Arent" },
                        { key: "D", value: "David Powers" }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "The Contradictions of Tourism",
            content: `
                <p><strong>A.</strong> Tourism may bring benefits to a society but its effects are not always straightforward. International tourism presents itself as a complex, interesting and important, full of contradictions and disputes. It has enormous growth potential, almost every country desires an expansion in the sense. Yet whether and how to grow is not always as straightforward as it might seem.</p>

                <p><strong>B.</strong> Tourism can provide the ideal export for developing countries, which can capitalize on their unique cultures and natural environments. However, to do this they may need to have features such as airports, hotels, sanitation facilities, roads and medical facilities. A government can build these itself, or getting finance from foreign lenders. Alternatively, the government may attract foreign investment, allowing others to pay for the building, thus relieving itself of providing capital but also deepening dependence on a single, fickle industry.</p>

                <p><strong>C.</strong> Tourism is, however, a risky investment. It can gradually decline as a resort becomes seen as outdated, or it can be destroyed overnight by a single hurricane, or a political event. Yet commodities can be produced most efficiently and cheaply in industrial machinery to take advantage of economies of scale, an option closed to village artisans. This alienates the producers from what is being produced, and means the product no longer has any personal meaning to them.</p>

                <p><strong>D.</strong> By definition, tourism is encounter the different, the original, the authentic. In this increasingly globalized world, what they want is regional and unique. But only through artifice can the tourist demand for authenticity be met. An event such as ceremony needs to be brought to their attention and its importance and unique nature elaborated to them. Natural sites, too, need to be presented if they are to be regarded as noteworthy, gates, permits, and indices allow tourists to recognize a sight. The actual thing!</p>

                <p><strong>E.</strong> Tourism blurs the paths of a culture that are public as handicrafts, and discourages them. Saving any which tourism tends to encounter different cultures. A savvy tour which tourism tends to encourage the production of local people to tourists. Alternatively, a savvy tour which tourism tends to encourage the production of local people to tourists.</p>
            `,
            questionGroups: [
                {
                    type: "summary-completion",
                    title: "Questions 27-31",
                    instruction: "Complete the summary using the list of words, A-J, below.",
                    summaryText: `
                        <p><strong>Tourism - an ideal export?</strong></p>
                        <p>A developing country needs money to build things like roads, which provide the necessary <input type="text" id="answer-27" onchange="saveAnswer(27, this.value)" value="" /> for tourism. The country can get taxes or <input type="text" id="answer-28" onchange="saveAnswer(28, this.value)" value="" /> from abroad, which means the country will not receive any financial gain from them but using <input type="text" id="answer-29" onchange="saveAnswer(29, this.value)" value="" /> from the country itself.</p>
                        <p>Tourism may be affected by natural disasters, political events and people's <input type="text" id="answer-30" onchange="saveAnswer(30, this.value)" value="" /> of how modern the resort is. Even if a country is successful, a country has to decide whether the industry's <input type="text" id="answer-31" onchange="saveAnswer(31, this.value)" value="" /> is desirable.</p>
                    `,
                    wordList: [
                        { key: "A", value: "accommodation" },
                        { key: "B", value: "investment" },
                        { key: "C", value: "feedback" },
                        { key: "D", value: "perceptions" },
                        { key: "E", value: "profit" },
                        { key: "F", value: "expansion" },
                        { key: "G", value: "loans" },
                        { key: "H", value: "industry" },
                        { key: "I", value: "infrastructure" },
                        { key: "J", value: "labour" }
                    ],
                    questions: [
                        { id: 27, answer: "infrastructure" },
                        { id: 28, answer: "investment" },
                        { id: 29, answer: "loans" },
                        { id: 30, answer: "perceptions" },
                        { id: 31, answer: "expansion" }
                    ]
                },
                {
                    type: "multiple-choice",
                    title: "Questions 32-36",
                    instruction: "Choose the correct letter, A, B, C, or D.",
                    questions: [
                        { 
                            id: 32, 
                            text: "The writer says that for tourists, an authentic experience",
                            options: [
                                { key: "A", text: "is only possible if official barriers can be removed" },
                                { key: "B", text: "may be missed if people are not clear what they want" },
                                { key: "C", text: "is created in an unnatural manner" },
                                { key: "D", text: "may be destroyed by inappropriate behaviour" }
                            ],
                            answer: "C"
                        },
                        { 
                            id: 33, 
                            text: "The writer refers to the rules governing seating on a bus as an example of",
                            options: [
                                { key: "A", text: "a way in which social change can be produced most efficiently" },
                                { key: "B", text: "an unintentional cause of offence to local people by tourists" },
                                { key: "C", text: "the wide variation there may be between different cultures" },
                                { key: "D", text: "an aspect of culture which tourism tends to ignore" }
                            ],
                            answer: "D"
                        },
                        { 
                            id: 34, 
                            text: "Tourists' interest in traditionally made objects may lead to changes in",
                            options: [
                                { key: "A", text: "how they are made" },
                                { key: "B", text: "the way which people think about the value of local goods" },
                                { key: "C", text: "people's attitudes towards mass production" },
                                { key: "D", text: "the extent of progress made in industrialization" }
                            ],
                            answer: "A"
                        },
                        { 
                            id: 35, 
                            text: "What does the writer suggest about the artists who produce goods for tourists?",
                            options: [
                                { key: "A", text: "They are unwilling to work in factories" },
                                { key: "B", text: "They have a financial need to be artists" },
                                { key: "C", text: "They would prefer to make goods for local people" },
                                { key: "D", text: "They feel their work lacks significance" }
                            ],
                            answer: "D"
                        },
                        { 
                            id: 36, 
                            text: "In the final paragraph, the writer's main point is that tourism",
                            options: [
                                { key: "A", text: "has a complex effect on culture" },
                                { key: "B", text: "is a major contributor to the economy" },
                                { key: "C", text: "should be more carefully regulated" },
                                { key: "D", text: "benefits some social groups more than others" }
                            ],
                            answer: "A"
                        }
                    ]
                }
            ]
        }
    ]
};
