// Data for 3 passages
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
            title: "Climate Change Effects",
            content: `
                <p><strong>A.</strong> Climate change is one of the most pressing issues facing humanity today. The Earth's average temperature has risen by approximately 1.1°C since the pre-industrial era, primarily due to human activities such as burning fossil fuels, deforestation, and industrial processes. This warming trend has led to significant changes in weather patterns, sea levels, and ecosystems around the world.</p>

                <p><strong>B.</strong> The effects of climate change are far-reaching and multifaceted. Rising temperatures have caused glaciers and ice sheets to melt at an alarming rate, contributing to sea-level rise. Coastal communities are particularly vulnerable, with some low-lying islands facing the threat of complete submersion. Additionally, extreme weather events such as hurricanes, droughts, and floods have become more frequent and intense.</p>

                <p><strong>C.</strong> Scientists have identified several key indicators of climate change. These include rising global temperatures, shrinking ice sheets, declining Arctic sea ice, glacial retreat, decreased snow cover, rising sea levels, ocean acidification, and extreme weather events. The Intergovernmental Panel on Climate Change (IPCC) has warned that without immediate and substantial reductions in greenhouse gas emissions, the world will face catastrophic consequences.</p>

                <p><strong>D.</strong> Addressing climate change requires a coordinated global effort. Many countries have committed to reducing their carbon emissions through international agreements such as the Paris Agreement. Renewable energy sources like solar, wind, and hydroelectric power are being developed and implemented at an increasing rate. Additionally, individuals can contribute by reducing their carbon footprint through lifestyle changes.</p>

                <p><strong>E.</strong> Despite the challenges, there is reason for optimism. Technological innovations in clean energy, carbon capture, and sustainable agriculture offer promising solutions. Public awareness of climate issues has grown significantly, leading to increased pressure on governments and corporations to take action. Young activists around the world have mobilized to demand urgent climate action.</p>
            `,
            questionGroups: [
                {
                    type: "tfng",
                    title: "Questions 14-18",
                    instruction: "Do the following statements agree with the information given in the passage?",
                    options: ["TRUE", "FALSE", "NOT GIVEN"],
                    questions: [
                        { id: 14, text: "The Earth's temperature has increased by more than 1°C", answer: "TRUE" },
                        { id: 15, text: "Deforestation is the main cause of climate change", answer: "FALSE" },
                        { id: 16, text: "All coastal communities will be underwater by 2050", answer: "NOT GIVEN" },
                        { id: 17, text: "The IPCC has warned about catastrophic consequences", answer: "TRUE" },
                        { id: 18, text: "Solar energy is more efficient than wind energy", answer: "NOT GIVEN" }
                    ]
                },
                {
                    type: "gap-filling",
                    title: "Questions 19-26",
                    instruction: "Complete the sentences below. Write NO MORE THAN TWO WORDS from the passage for each answer.",
                    questions: [
                        { id: 19, text: "Human activities include burning ___ and deforestation.", answer: "fossil fuels" },
                        { id: 20, text: "Glaciers are melting at an ___ rate.", answer: "alarming" },
                        { id: 21, text: "Low-lying islands face the threat of complete ___.", answer: "submersion" },
                        { id: 22, text: "Ocean ___ is a key indicator of climate change.", answer: "acidification" },
                        { id: 23, text: "The ___ is an international agreement on climate.", answer: "Paris Agreement" },
                        { id: 24, text: "Three renewable energy sources: solar, wind, and ___.", answer: "hydroelectric" },
                        { id: 25, text: "Individuals can reduce their ___.", answer: "carbon footprint" },
                        { id: 26, text: "___ activists have mobilized for climate action.", answer: "Young" }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "The History of Coffee",
            content: `
                <p><strong>A.</strong> Coffee is one of the world's most popular beverages, consumed by millions of people every day. The coffee plant, Coffea, is believed to have originated in Ethiopia, where legend tells of a goat herder named Kaldi who discovered the energizing effects of coffee beans after noticing his goats became more active after eating the berries from a certain tree.</p>

                <p><strong>B.</strong> From Ethiopia, coffee cultivation spread to the Arabian Peninsula. By the 15th century, coffee was being grown in Yemen, and by the 16th century, it had reached Persia, Egypt, Syria, and Turkey. Coffee houses, known as qahveh khaneh, began appearing in cities across the Middle East. These establishments became important centers for social interaction and intellectual exchange.</p>

                <p><strong>C.</strong> European travelers to the Middle East brought back tales of the unusual dark beverage. By the 17th century, coffee had made its way to Europe and was becoming popular across the continent. Despite some initial controversy and resistance from religious authorities, coffee houses began opening in major European cities, becoming hubs of social activity and business.</p>

                <p><strong>D.</strong> The colonial powers of Europe established coffee plantations in their tropical colonies. The Dutch were among the first to transport coffee plants to their colonies in Indonesia. The French brought coffee to the Caribbean, while the Spanish introduced it to Central and South America. Brazil, in particular, became a major coffee producer and remains so to this day.</p>

                <p><strong>E.</strong> Today, coffee is a global commodity and one of the world's most valuable traded products. Modern coffee culture has evolved significantly, with specialty coffee shops and various brewing methods gaining popularity. The industry faces challenges including climate change, which threatens coffee-growing regions, and concerns about fair trade and sustainable farming practices.</p>
            `,
            questionGroups: [
                {
                    type: "tfng",
                    title: "Questions 27-31",
                    instruction: "Do the following statements agree with the information given in the passage?",
                    options: ["TRUE", "FALSE", "NOT GIVEN"],
                    questions: [
                        { id: 27, text: "Coffee originated in Ethiopia according to legend", answer: "TRUE" },
                        { id: 28, text: "Kaldi was a farmer who discovered coffee", answer: "FALSE" },
                        { id: 29, text: "Coffee was first grown commercially in Yemen", answer: "NOT GIVEN" },
                        { id: 30, text: "Coffee houses in the Middle East were called qahveh khaneh", answer: "TRUE" },
                        { id: 31, text: "Religious authorities initially welcomed coffee in Europe", answer: "FALSE" }
                    ]
                },
                {
                    type: "gap-filling",
                    title: "Questions 32-40",
                    instruction: "Answer the questions below. Write NO MORE THAN TWO WORDS from the passage for each answer.",
                    questions: [
                        { id: 32, text: "In which century did coffee reach Europe?", answer: "17th" },
                        { id: 33, text: "Which European country transported coffee to Indonesia?", answer: "Dutch" },
                        { id: 34, text: "Where did the French bring coffee to?", answer: "Caribbean" },
                        { id: 35, text: "Which country became a major coffee producer?", answer: "Brazil" },
                        { id: 36, text: "What type of coffee shops have gained popularity?", answer: "specialty" },
                        { id: 37, text: "What threatens coffee-growing regions?", answer: "climate change" },
                        { id: 38, text: "Coffee houses became centers for ___ exchange.", answer: "intellectual" },
                        { id: 39, text: "Goats became more ___ after eating coffee berries.", answer: "active" },
                        { id: 40, text: "Coffee is one of the world's most valuable ___ products.", answer: "traded" }
                    ]
                }
            ]
        }
    ]
};
