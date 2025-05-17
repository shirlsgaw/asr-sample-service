export const TranscriptMocks = new Map();

const addMock = ({ path, text, shouldError = false }) => {
  TranscriptMocks.set(path, { text, shouldError });
};

addMock({
  path: "audio-file-1.wav",
  text: `
Chapter 1: The Quest
Once upon a time, in the small, peaceful town of Meadowgrove, lived a bright-eyed, adventurous girl named Sarah. Sarah was not your ordinary girl; she had a special friend, her talking cat, Squiggles. Squiggles was no ordinary cat either; he was a magical cat, gifted with the power of speech and wisdom beyond his years.

One day, Sarah and Squiggles discovered a mysterious, ancient map in the attic of Sarah's house. The map depicted a path leading to a hidden kingdom, the Kingdom of the Whispering Willows, known only in the oldest of Meadowgrove's legends. It was said to be a place of immense magic and untold treasures. Intrigued by the prospect of a grand adventure, Sarah and Squiggles decided to embark on a quest to find this hidden kingdom.

Their journey began in the Enchanted Forest, a place filled with trees as tall as the clouds and flowers that shimmered under the moonlight. They encountered talking birds and friendly woodland creatures, who helped them navigate through the forest. Squiggles, with his sharp senses and quick wit, helped Sarah avoid the tricks and traps of the mischievous forest sprites.

Next, they crossed the Glistening Lake, a vast body of water that sparkled under the sun. A kind-hearted water nymph, seeing their determination, summoned a group of giant lily pads to carry them across the lake. Sarah and Squiggles thanked the nymph and continued their journey, their bond growing stronger with each challenge they overcame together.

Their path then led them to the base of the Whispering Mountains. The mountains were known to be treacherous, with paths that changed as frequently as the wind. However, Squiggles, with his keen eyes, noticed a pattern in the mountain's whispers. He guided Sarah through the ever-changing paths, and together, they successfully traversed the Whispering Mountains.

Finally, they arrived at the entrance of the Kingdom of the Whispering Willows. It was even more beautiful than the legends described, with towering castles made of crystal and gardens filled with flowers of every color imaginable. The kingdom was filled with magical creatures living in harmony. The king of the kingdom, an ancient, wise dragon, welcomed Sarah and Squiggles, impressed by their bravery and the purity of their hearts.

The dragon king granted them a single wish as a reward for their courageous journey. Sarah looked at Squiggles, and they both knew what they wanted. They wished for the safety and happiness of their home, Meadowgrove, and all its inhabitants.
`,
});

addMock({
  path: "audio-file-2.wav",
  text: `
The dragon king, moved by their selfless wish, granted it. He also gifted them a magical seed. He told them that the seed would grow into a tree that would protect Meadowgrove and bring prosperity to its people.

Sarah and Squiggles returned home, heroes of their own epic tale. They planted the magical seed in the heart of Meadowgrove. It grew into a magnificent tree, its branches reaching the sky, its roots deep in the earth. The tree brought joy, peace, and prosperity to Meadowgrove, just as the dragon king had promised.

From then on, Sarah and Squiggles lived happily, their bond unbreakable, their hearts filled with the memories of their magical adventure. They often sat under the magical tree, telling their story to the children of Meadowgrove, inspiring them to believe in magic, friendship, and the power of a courageous heart.

And so, the tale of Sarah and Squiggles, the girl and her talking cat who went on a magical quest, became a beloved story in Meadowgrove, passed down from generation to generation, a reminder of the magic that exists in our world, waiting to be discovered.
`,
});

addMock({
  path: "audio-file-3.wav",
  text: `
Chapter Two: The Magic Within

Life in Meadowgrove continued peacefully, with Sarah and Squiggles living happily under the protective branches of the magical tree. The tree's magic brought prosperity and joy to the town, and its people lived in harmony. But as time passed, Sarah and Squiggles felt a new adventure calling them.

One day, while playing near the magical tree, Sarah found a small, glowing stone buried in the ground. It was unlike anything she had ever seen, shimmering with colors that danced and changed with the light. Squiggles, with his magical intuition, sensed a powerful magic within the stone. They realized that this was no ordinary stone; it was a piece of a magical artifact known as the Heartstone.

The Heartstone was said to have the power to amplify the magic within one's heart, granting them abilities beyond their wildest dreams. However, it was also said that if it fell into the wrong hands, it could bring about great destruction. Sarah and Squiggles knew they had a new mission: to find the remaining pieces of the Heartstone and protect it from those who might misuse its power.
`,
});

addMock({
  path: "audio-file-4.wav",
  text: `
Their new adventure took them beyond Meadowgrove, through uncharted lands filled with unknown magic. They journeyed through the Crystal Caves, where gemstone creatures roamed, and across the Sands of Time, where ancient ruins told tales of civilizations long forgotten.

In each place, they found a piece of the Heartstone, often guarded by challenges that tested their courage, wisdom, and the strength of their friendship. Sarah's bravery and Squiggles' wisdom saw them through each challenge, their bond growing even stronger with each trial they overcame.

As they collected the pieces, they began to notice changes within themselves. Sarah found that she could communicate with the animals they encountered, understanding their languages and emotions. Squiggles discovered he could manipulate the elements, conjuring water to quench their thirst in the desert and fire to keep them warm in the cold mountain nights.

They realized that the Heartstone was not just amplifying their magic; it was revealing the magic that had always been within them. It was showing them that they were capable of more than they had ever imagined.

Meanwhile, back in Meadowgrove, the magical tree continued to protect the town, its magic growing stronger with each piece of the Heartstone that Sarah and Squiggles found. The people of Meadowgrove, hearing of Sarah and Squiggles' new adventure, sent them their love and support, their hearts filled with pride for their hometown heroes.

As Sarah and Squiggles journeyed on, they knew they were not just on a quest to find the Heartstone. They were on a journey of self-discovery, a journey to unlock the magic within themselves and within each other. And though their path was filled with challenges, they faced each one with courage and friendship, their hearts filled with the magic of their incredible adventure.
`,
});

addMock({
  path: "audio-file-5.wav",
  text: `
Chapter Three: The Echoes of the Past

Sarah and Squiggles, now seasoned adventurers, continued their quest to find the remaining pieces of the Heartstone. Their journey had taken them through lands of wonder and mystery, and they had grown in ways they had never imagined. Their hearts were filled with the magic of their journey, their bond stronger than ever.

Their next destination was the ancient city of Echolight, a place said to be lost in time. Echolight was known in legends as the City of Echoes, where the past and the present existed side by side. It was believed to be the resting place of one of the last pieces of the Heartstone.

As they approached the city, they found themselves walking through echoes of the past. They saw visions of grand parades, royal coronations, and joyful festivals. They heard the laughter of children, the wisdom of the elders, and the songs of the bards. It was as if the city was sharing its memories with them, welcoming them with echoes of its glorious past.

In the heart of Echolight, they found the piece of the Heartstone, guarded by the Echo Guardian, a spectral figure who was the keeper of the city's memories. The Guardian, seeing the purity of their hearts and the strength of their friendship, presented them with a challenge. They were to face their own past, their fears, and their regrets, and learn from them.
`,
});

addMock({
  path: "audio-file-6.wav",
  text: `
Sarah and Squiggles, standing side by side, faced the echoes of their past. They saw their journey from the beginning, their fears, their moments of doubt, and their triumphs. They saw their growth, their friendship, and the magic they had discovered within themselves.

Facing their past was not easy. They had to confront their fears and doubts, but they also saw how much they had overcome and how much they had grown. They learned that their past, with its challenges and triumphs, had shaped them into who they were. It was a part of their journey, a part of their magic.

Having learned from their past, they were granted the piece of the Heartstone. The Echo Guardian, impressed by their courage and wisdom, also gifted them with the Echo Bell, a magical artifact that could summon the echoes of the past to guide them.

With the piece of the Heartstone and the Echo Bell, Sarah and Squiggles left Echolight, their hearts filled with the echoes of their journey. They had faced their past and learned from it, and they were ready to face whatever the future held for them.

Back in Meadowgrove, the magical tree continued to protect the town, its magic resonating with the echoes of Echolight. The people of Meadowgrove, hearing of Sarah and Squiggles' adventure in Echolight, celebrated their courage and wisdom. They knew that their hometown heroes were on an incredible journey, a journey that was echoing throughout the world.

As Sarah and Squiggles journeyed on, they carried with them the echoes of their past, their hearts filled with the magic of their journey. They knew that their quest was not just about finding the Heartstone; it was about discovering the magic within themselves, the magic of friendship, and the magic of their incredible journey. And though their path was filled with challenges, they faced each one with courage and friendship, their hearts echoing with the magic of their adventure.`,
});

addMock({
  path: "audio-file-7.wav",
  text: `
Chapter Four: The Dance of the Elements

With the Echo Bell and another piece of the Heartstone in their possession, Sarah and Squiggles journeyed towards the Elemental Plains, a land where the forces of nature danced in harmony. It was said that the final piece of the Heartstone resided there, guarded by the Elemental Spirits.

The Elemental Plains were a spectacle of nature's grandeur. The Fire Fields flickered with dancing flames, the Wind Valleys echoed with melodious breezes, the Earth Highlands were adorned with towering rock formations, and the Water Gardens flowed with crystal-clear streams. It was a place where the elements existed in their purest form, a testament to the balance of nature.

Upon their arrival, the Elemental Spirits - Fire, Wind, Earth, and Water - greeted Sarah and Squiggles. They recognized the magic within Sarah and Squiggles, and the pieces of the Heartstone they had gathered. However, to earn the final piece, they had to prove their understanding of the elements and their harmony.

The first challenge was set by the Fire Spirit, a being of pure flame with a warm, inviting glow. Sarah had to dance with the flames, moving with their rhythm and heat. Remembering the warmth of the campfires they had shared on their journey, Sarah danced with grace and passion, earning the Fire Spirit's approval.

Next was the Wind Spirit, a playful entity that moved with a gentle, yet unpredictable, breeze. Squiggles had to listen to the wind's song and predict its path. Using his keen senses and intuition, Squiggles followed the wind's melody, impressing the Wind Spirit with his understanding.
`,
});

addMock({
  path: "audio-file-8.wav",
  shouldError: true,
  text: `
The Earth Spirit, a steadfast and strong entity, challenged them to a game of strategy using stones and terrain. Sarah and Squiggles, using their shared experiences and trust in each other, outmaneuvered the Earth Spirit, demonstrating their resilience and adaptability.

Finally, they faced the Water Spirit, a serene being of flowing water. They had to navigate through a maze of water currents. Squiggles, using his elemental magic, sensed the flow of the water, guiding Sarah through the maze, earning the Water Spirit's respect.

Having proven their understanding of the elements and their harmony, the Elemental Spirits granted Sarah and Squiggles the final piece of the Heartstone. They also bestowed upon them the Elemental Crest, a symbol of their bond with the elements.

With the final piece of the Heartstone and the Elemental Crest, Sarah and Squiggles returned to Meadowgrove. The magical tree, sensing the completion of the Heartstone, bloomed with radiant flowers, its magic resonating throughout the town.

The people of Meadowgrove celebrated the return of their heroes and the completion of the Heartstone. They honored Sarah and Squiggles with a grand feast, their hearts filled with joy and pride.

As the celebrations continued, Sarah and Squiggles looked at the completed Heartstone, its magic pulsating with a gentle glow. They had completed their quest, but they knew that their journey was far from over. They had discovered the magic within themselves, the magic of friendship, and the magic of their incredible journey. And they knew that as long as they had each other, they were ready to face any adventure that awaited them.
`,
});

addMock({
  path: "audio-file-9.wav",
  text: `
Chapter Five: The Heartstone's Secret

With the Heartstone complete and the Elemental Crest in their possession, Sarah and Squiggles were the toast of Meadowgrove. The magical tree at the heart of the town bloomed brighter than ever, its magic protecting and nourishing the town and its people. But even amidst the celebrations, Sarah and Squiggles knew that their journey was not yet over.

The Heartstone, now whole, pulsed with a magic that was both gentle and powerful. It resonated with the magic within Sarah and Squiggles, and they could feel a connection, a bond forming between them and the Heartstone. They realized that the Heartstone was not just a magical artifact; it was a mirror, reflecting the magic within their hearts.

One night, under the radiant glow of the magical tree, the Heartstone began to glow brighter. It floated in the air, spinning slowly, its light enveloping Sarah and Squiggles. They could feel the Heartstone reaching out to them, its magic resonating with theirs.

Then, in a burst of light, the Heartstone revealed its secret. It showed them a vision of a world filled with magic, a world where humans and magical creatures lived in harmony, a world where the magic within one's heart could shape their destiny. It was a vision of what Meadowgrove, and indeed the whole world, could be.`,
});

addMock({
  path: "audio-file-10.wav",
  text: `
  Sarah and Squiggles understood what the Heartstone was showing them. Their journey to find the Heartstone was not just a quest; it was a path to a new future, a future where the magic within one's heart could create a world of harmony and wonder.

Inspired by the Heartstone's vision, Sarah and Squiggles decided to share the magic they had discovered with the world. They began by teaching the people of Meadowgrove about the magic within their hearts, showing them how to tap into it, just as they had on their journey.

The people of Meadowgrove, inspired by Sarah and Squiggles, began to discover their own magic. They found magic in their love for each other, in their passion for their work, in their dreams for the future. Meadowgrove began to change, its people living in harmony with each other and with nature, their hearts filled with magic.

News of the magical transformation of Meadowgrove spread, and people from far and wide came to learn about the magic within their hearts. Sarah and Squiggles, with the Heartstone and the magical tree at their side, welcomed them, ready to guide them on their own magical journeys.

As they stood under the magical tree, looking at the thriving town of Meadowgrove, Sarah and Squiggles knew that their journey was far from over. They had discovered the magic within their hearts, and now they were ready to share that magic with the world. They knew that as long as they had each other, they could face any challenge, embark on any adventure, and create a world filled with magic and wonder. And so, their journey continued, their hearts filled with the magic of their incredible adventure.`,
});
