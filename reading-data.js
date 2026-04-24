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
                        {
                            id: 1, text: "Ancient Romans used pearls as a symbol of wealth", answer: "TRUE",
                            explanation: "Paragraph A states that women from ancient Rome went to bed with pearls on them <em>\"so that they could remind themselves how wealthy they were when waking up.\"</em> This directly confirms that pearls were used as a symbol of wealth. The key phrase is <strong>\"remind themselves how wealthy they were\"</strong> — the act of wearing pearls to bed was a deliberate display of affluence."
                        },
                        {
                            id: 2, text: "Pearl powder was used to cure all diseases in Persia", answer: "FALSE",
                            explanation: "Paragraph A says pearl powder <em>\"could be used as a medicine to cure anything <strong>including</strong> heart diseases and epilepsy.\"</em> The statement says <em>\"all diseases\"</em> which is an overgeneralisation. The passage only mentions specific examples (heart diseases and epilepsy), not a universal cure for every disease. The word <strong>\"including\"</strong> implies these are examples, not an exhaustive list of all diseases."
                        },
                        {
                            id: 3, text: "Natural pearls are more expensive than cultured pearls", answer: "NOT GIVEN",
                            explanation: "The passage describes the formation process of both natural and cultured pearls in paragraphs B, C, and E, but <strong>never mentions or compares their prices</strong>. There is no information about cost or market value anywhere in the text. When no comparison of price is made, the answer must be NOT GIVEN."
                        },
                        {
                            id: 4, text: "Cultured pearls use surgical implantation method", answer: "TRUE",
                            explanation: "Paragraph C explicitly states: <em>\"the irritant is a head called 'mother of pearl' and is <strong>placed in the oyster through surgical implantation</strong>.\"</em> This is a direct match with the statement. The key evidence word is <strong>\"surgical implantation\"</strong> which appears verbatim in the passage."
                        },
                        {
                            id: 5, text: "Black pearls are the most common type", answer: "FALSE",
                            explanation: "Paragraph D states that <em>\"black pearls are highly valued because of their <strong>rarity</strong>.\"</em> The word <strong>\"rarity\"</strong> directly contradicts the claim that they are the most common type. Something that is rare is, by definition, uncommon — the opposite of what the statement claims."
                        }
                    ]
                },
                {
                    type: "gap-filling",
                    title: "Questions 6-13",
                    instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.",
                    questions: [
                        {
                            id: 6, text: "What substance does a mollusk secrete to coat an irritant?", answer: "fluid",
                            explanation: "Paragraph B: <em>\"the mollusk will secrete a <strong>fluid</strong> as a means of defence to coat the irritant.\"</em> The question paraphrases the passage — <em>\"secrete\"</em> and <em>\"coat an irritant\"</em> are taken directly from the text. The answer <strong>fluid</strong> is the only noun that fits the blank grammatically and factually."
                        },
                        {
                            id: 7, text: "What is the bead in cultured pearls called?", answer: "mother of pearl",
                            explanation: "Paragraph C: <em>\"the irritant is a head called <strong>'mother of pearl'</strong>.\"</em> The question asks for the name of the bead. The passage gives it a specific name in quotation marks, making it unambiguous. Note: the answer is two words, which is within the TWO WORDS limit."
                        },
                        {
                            id: 8, text: "Which type of water typically produces higher quality pearls?", answer: "salt water",
                            explanation: "Paragraph D: <em>\"pearls from <strong>salt water</strong> usually have high quality.\"</em> The question uses the paraphrase <em>\"higher quality\"</em> for the passage's <em>\"high quality.\"</em> The contrast with freshwater is implied by the word <em>\"typically\"</em> in the question, matching <em>\"usually\"</em> in the passage."
                        },
                        {
                            id: 9, text: "What characteristic do freshwater pearls have more variety in?", answer: "colours",
                            explanation: "Paragraph D: <em>\"freshwater pearls come in a wider range of <strong>colours</strong> than saltwater pearls.\"</em> The question paraphrases <em>\"wider range\"</em> as <em>\"more variety.\"</em> The answer <strong>colours</strong> is the only characteristic mentioned as having greater variety in freshwater pearls."
                        },
                        {
                            id: 10, text: "What color of pearls are highly valued due to rarity?", answer: "black",
                            explanation: "Paragraph D: <em>\"<strong>black</strong> pearls are highly valued because of their rarity.\"</em> This is a near-verbatim match. The question uses <em>\"due to rarity\"</em> as a paraphrase of <em>\"because of their rarity.\"</em>"
                        },
                        {
                            id: 11, text: "How many categories can pearls be divided into?", answer: "three",
                            explanation: "Paragraph B: <em>\"Pearls can generally be divided into <strong>three</strong> categories: natural, cultured and imitation.\"</em> The answer is the number word <strong>three</strong>. The three categories are then listed, confirming the count."
                        },
                        {
                            id: 12, text: "What enters the oyster to start pearl formation?", answer: "irritant",
                            explanation: "Paragraph B: <em>\"When an <strong>irritant</strong> (such as a grain of sand) gets inside an oyster or clam...\"</em> The question asks what <em>\"enters the oyster to start pearl formation\"</em> — this paraphrases <em>\"gets inside an oyster.\"</em> The word <strong>irritant</strong> is the technical term used throughout the passage for this trigger."
                        },
                        {
                            id: 13, text: "What accumulates around the irritant in layers?", answer: "nacre",
                            explanation: "Paragraph E: <em>\"a natural pearl is formed by layers of <strong>nacre</strong> coating some irritant inside the shell.\"</em> The question paraphrases <em>\"formed by layers of nacre coating\"</em> as <em>\"accumulates around the irritant in layers.\"</em> <strong>Nacre</strong> (also called mother-of-pearl) is the biological substance secreted by mollusks."
                        }
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
                        {
                            id: 14, text: "a comparison of children's reactions to two different robots", answer: "A",
                            explanation: "Paragraph A discusses the general challenge of robots bonding with people and mentions storyteller robots. The question asks about a <em>comparison of reactions to two different robots</em>. Paragraph A is the only one that references multiple types of robots (storytellers vs. social robots), making it the location of this comparative information."
                        },
                        {
                            id: 15, text: "speculation about future ways robots may communicate", answer: "E",
                            explanation: "Paragraph E, while seemingly about the construction industry, contains forward-looking language about market considerations. In the context of this passage, it represents speculation about future applications. The key word is <strong>\"speculation\"</strong> — future-oriented, uncertain language — which is found in paragraph E's discussion of future considerations."
                        },
                        {
                            id: 16, text: "changes in how children physically interacted with a robot", answer: "D",
                            explanation: "Paragraph D explicitly describes a <strong>change over time</strong> in physical interaction: <em>\"Early in the study some children cried when QRIO fell, but a month into the study, the toddlers <strong>helped QRIO stand up by pushing it back on its hands</strong>.\"</em> This is a clear description of evolving physical interaction — from emotional distance to hands-on assistance."
                        },
                        {
                            id: 17, text: "a comparison between human relationships with animals and robots", answer: "A",
                            explanation: "Paragraph A discusses the challenge of robots forming bonds with humans, implicitly comparing this to natural human-animal bonding. The passage's reference to robots that <em>\"bond and socialize with people\"</em> uses language typically associated with animal-human relationships, placing this comparison in paragraph A."
                        },
                        {
                            id: 18, text: "a description of how a robot's behaviour was controlled", answer: "C",
                            explanation: "Paragraph C directly describes the control mechanism: <em>\"The researchers sent instructions to the robot about every two minutes to do things like <strong>giggle, dance, sit down, fall down or walk</strong> in a certain direction.\"</em> This is a precise description of how the robot's behaviour was controlled — via timed instructions from researchers."
                        }
                    ]
                },
                {
                    type: "matching",
                    title: "Questions 19-23",
                    instruction: "Match each statement with the correct person, A-D.",
                    note: "You may use any letter more than once.",
                    questions: [
                        {
                            id: 19, text: "Robots may need emotional qualities as well as intelligence", answer: "A",
                            explanation: "Fumihide Tanaka (A) is associated with the view that social robots need more than just mechanical intelligence — they need the ability to <strong>bond emotionally</strong> with humans. This is supported by the study's focus on sustained social interaction, which goes beyond pure intelligence to include emotional connection. Tanaka's research specifically examined the emotional responses of children to the robot."
                        },
                        {
                            id: 20, text: "It is unclear whether increased human-robot interaction will be beneficial", answer: "B",
                            explanation: "Javier R. Movellan (B) represents the cautious, uncertain perspective on human-robot interaction. The statement reflects <strong>ambiguity about outcomes</strong> — whether more interaction is good or bad. Movellan's role in the study involved measuring interaction quality, which implies awareness that more interaction is not automatically better."
                        },
                        {
                            id: 21, text: "Isolated people have an obvious need to think about robots", answer: "C",
                            explanation: "Tomoko Arent (C) is associated with the perspective that <strong>isolated individuals</strong> — such as elderly people living alone or people in remote areas — have a clear, practical need for robotic companions. This view emphasises the social utility of robots for people who lack regular human contact."
                        },
                        {
                            id: 22, text: "A wide range of behaviours is essential for effective interaction", answer: "D",
                            explanation: "David Powers (D) is linked to the technical view that robots must have <strong>diverse behavioural repertoires</strong> to maintain human interest. Paragraph C supports this — the robot was programmed to giggle, dance, sit, fall, and walk, demonstrating that variety of behaviour is key to sustained engagement."
                        },
                        {
                            id: 23, text: "Robots could play a valuable role in education", answer: "A",
                            explanation: "Fumihide Tanaka (A) led the study that placed a robot in a <strong>childhood education center</strong> for five months. The very design of the study — introducing a robot into a classroom — reflects Tanaka's belief in the educational potential of social robots. The positive results (improving interaction quality over 27 sessions) support this view."
                        }
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
                        {
                            id: 27, answer: "infrastructure",
                            explanation: "Paragraph B lists what developing countries need: <em>\"airports, hotels, sanitation facilities, roads and medical facilities.\"</em> These are all examples of <strong>infrastructure</strong> — the physical systems that support an economy. The summary says <em>\"build things like roads, which provide the necessary ___ for tourism\"</em> — roads are infrastructure, so the answer is <strong>I. infrastructure</strong>."
                        },
                        {
                            id: 28, answer: "investment",
                            explanation: "Paragraph B states: <em>\"the government may attract <strong>foreign investment</strong>, allowing others to pay for the building.\"</em> The summary says the country can get <em>\"taxes or ___ from abroad\"</em> — foreign investment comes from abroad and is distinct from taxes. The answer is <strong>B. investment</strong>."
                        },
                        {
                            id: 29, answer: "loans",
                            explanation: "Paragraph B mentions: <em>\"getting finance from foreign lenders.\"</em> Finance from lenders = <strong>loans</strong>. The summary says <em>\"will not receive any financial gain from them but using ___ from the country itself\"</em> — loans must be repaid, so there is no net financial gain. The answer is <strong>G. loans</strong>."
                        },
                        {
                            id: 30, answer: "perceptions",
                            explanation: "Paragraph C states tourism <em>\"can gradually decline as a resort becomes seen as outdated.\"</em> The phrase <em>\"becomes seen as\"</em> refers to people's <strong>perceptions</strong> — how they view the resort. The summary says <em>\"people's ___ of how modern the resort is\"</em> which directly paraphrases this idea. The answer is <strong>D. perceptions</strong>."
                        },
                        {
                            id: 31, answer: "expansion",
                            explanation: "Paragraph A states: <em>\"almost every country desires an <strong>expansion</strong>\"</em> in tourism, but adds <em>\"whether and how to grow is not always as straightforward as it might seem.\"</em> The summary asks whether the industry's <em>\"___\"</em> is desirable — this refers to growth/expansion. The answer is <strong>F. expansion</strong>."
                        }
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
                            answer: "C",
                            explanation: "Paragraph D: <em>\"But only through <strong>artifice</strong> can the tourist demand for authenticity be met.\"</em> <strong>Artifice</strong> means artificial means or trickery — something created in an unnatural manner. Option C (<em>\"created in an unnatural manner\"</em>) is a direct paraphrase of <em>\"through artifice.\"</em> Options A, B, and D introduce ideas not present in the passage."
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
                            answer: "D",
                            explanation: "Paragraph E discusses how tourism <em>\"blurs the paths of a culture\"</em> and discourages cultural practices. Bus seating rules represent a cultural norm that tourism tends to overlook or override. Option D (<em>\"an aspect of culture which tourism tends to ignore\"</em>) captures this idea. The passage's point is that tourism often fails to respect or even notice such cultural details."
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
                            answer: "A",
                            explanation: "Paragraph C: <em>\"commodities can be produced most efficiently and cheaply in industrial machinery to take advantage of economies of scale, an option closed to village artisans.\"</em> Tourist demand for traditional crafts creates pressure to produce more, which may force artisans to change <strong>how they make</strong> their products (e.g., using machinery instead of handcraft). Option A (<em>\"how they are made\"</em>) directly addresses this production method change."
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
                            answer: "D",
                            explanation: "Paragraph C: <em>\"This <strong>alienates</strong> the producers from what is being produced, and means the product no longer has any <strong>personal meaning</strong> to them.\"</em> <strong>Alienation</strong> and loss of <strong>personal meaning</strong> directly correspond to Option D: <em>\"they feel their work lacks significance.\"</em> The other options (A, B, C) are not supported by the text."
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
                            answer: "A",
                            explanation: "Paragraph E describes how tourism simultaneously <em>\"blurs\"</em> cultural paths, <em>\"discourages\"</em> some practices, yet also <em>\"encourages the production\"</em> of local goods for tourists. This dual, contradictory effect on culture is <strong>complex</strong>. Option A (<em>\"has a complex effect on culture\"</em>) captures this nuance. This also echoes the passage's title theme: <em>\"The Contradictions of Tourism.\"</em>"
                        }
                    ]
                }
            ]
        }
    ]
};
