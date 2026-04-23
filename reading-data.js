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
            questions: [
                { id: 1, text: "Ancient people used pearls as medicines", type: "text", answer: "A" },
                { id: 2, text: "Decide the value of natural pearls", type: "text", answer: "E" },
                { id: 3, text: "Distinguish cultured pearls from natural ones", type: "text", answer: "C" },
                { id: 4, text: "Three types of pearls", type: "text", answer: "B" },
                { id: 5, text: "Pearls were a symbol of their ___", type: "text", answer: "social status" },
                { id: 6, text: "Used as ___ for the rich", type: "text", answer: "jewellery" },
                { id: 7, text: "Ground into powder and used as ___", type: "text", answer: "medicine" },
                { id: 8, text: "Best pearls found in the ___", type: "text", answer: "salt water" },
                { id: 9, text: "Wider range of ___", type: "text", answer: "colours" },
                { id: 10, text: "Golden ___ pearls", type: "text", answer: "South Sea" },
                { id: 11, text: "The rarest pearls are from ___", type: "text", answer: "Tahiti" },
                { id: 12, text: "Pearls form when an ___ enters the oyster", type: "text", answer: "irritant" },
                { id: 13, text: "The mollusk secretes a ___ to coat the irritant", type: "text", answer: "fluid" }
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
            questions: [
                { id: 14, text: "The Earth's temperature has increased by ___°C", type: "text", answer: "1.1" },
                { id: 15, text: "Main cause of climate change is burning ___", type: "text", answer: "fossil fuels" },
                { id: 16, text: "Coastal communities face threat from ___", type: "text", answer: "sea-level rise" },
                { id: 17, text: "The ___ has warned about catastrophic consequences", type: "text", answer: "IPCC" },
                { id: 18, text: "International agreement mentioned is the ___", type: "text", answer: "Paris Agreement" },
                { id: 19, text: "Three types of renewable energy: solar, wind, and ___", type: "text", answer: "hydroelectric" },
                { id: 20, text: "Individuals can reduce their ___", type: "text", answer: "carbon footprint" },
                { id: 21, text: "Technology offers solutions in clean energy and ___", type: "text", answer: "carbon capture" },
                { id: 22, text: "___ activists have mobilized for climate action", type: "text", answer: "Young" },
                { id: 23, text: "Glaciers are melting at an ___ rate", type: "text", answer: "alarming" },
                { id: 24, text: "Ocean ___ is a key indicator of climate change", type: "text", answer: "acidification" },
                { id: 25, text: "Some islands face complete ___", type: "text", answer: "submersion" },
                { id: 26, text: "Public ___ of climate issues has grown", type: "text", answer: "awareness" }
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
            questions: [
                { id: 27, text: "Coffee plant originated in ___", type: "text", answer: "Ethiopia" },
                { id: 28, text: "Goat herder who discovered coffee was named ___", type: "text", answer: "Kaldi" },
                { id: 29, text: "By 15th century, coffee was grown in ___", type: "text", answer: "Yemen" },
                { id: 30, text: "Coffee houses in Middle East were called ___", type: "text", answer: "qahveh khaneh" },
                { id: 31, text: "Coffee reached Europe in the ___ century", type: "text", answer: "17th" },
                { id: 32, text: "The ___ transported coffee to Indonesia", type: "text", answer: "Dutch" },
                { id: 33, text: "The French brought coffee to the ___", type: "text", answer: "Caribbean" },
                { id: 34, text: "___ became a major coffee producer", type: "text", answer: "Brazil" },
                { id: 35, text: "Coffee is one of the world's most valuable ___ products", type: "text", answer: "traded" },
                { id: 36, text: "___ threatens coffee-growing regions", type: "text", answer: "climate change" },
                { id: 37, text: "Industry concerns include fair trade and ___ farming", type: "text", answer: "sustainable" },
                { id: 38, text: "Coffee houses became centers for ___ exchange", type: "text", answer: "intellectual" },
                { id: 39, text: "Goats became more ___ after eating coffee berries", type: "text", answer: "active" },
                { id: 40, text: "Modern ___ coffee shops have gained popularity", type: "text", answer: "specialty" }
            ]
        }
    ]
};
