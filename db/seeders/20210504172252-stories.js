'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stories', [{
      title: "John Doe's bizarre adventure",
      story: `John Doe was thinking about Ocean Bishop again. Ocean was a helpful carer with chubby elbows and ruddy thighs. \
              John walked over to the window and reflected on his pretty surroundings. He had always loved crowded Cardiff with its homeless, hungry hills. \
              It was a place that encouraged his tendency to feel relaxed. Then he saw something in the distance, or rather someone. \
              It was the a helpful figure of Ocean Bishop. John gulped. He glanced at his own reflection. He was a hilarious, splendid, tea drinker with hairy elbows and greasy thighs. \
              His friends saw him as a long, leaking lawyer. Once, he had even helped a puzzled disabled person recover from a flying accident. \
              But not even a hilarious person who had once helped a puzzled disabled person recover from a flying accident, was prepared for what Ocean had in store today. \
              The snow flurried like sleeping snakes, making John surprised. John grabbed a crumpled kettle that had been strewn nearby; he massaged it with his fingers. \
              As John stepped outside and Ocean came closer, he could see the pretty glint in her eye. Ocean gazed with the affection of 5983 thoughtful anxious aardvarks. \
              She said, in hushed tones, "I love you and I want a wifi code." John looked back, even more surprised and still fingering the crumpled kettle.\
              Ocean, I am your father, he replied. They looked at each other with afraid feelings, like two fresh, fried flamingos gyrating at a very gentle bar mitzvah, \
              which had trance music playing in the background and two cute uncles talking to the beat. \
              John regarded Ocean's chubby elbows and ruddy thighs. "I feel the same way!" revealed John with a delighted grin. Ocean looked ambivalent, her emotions blushing like a tender, testy teapot. Then Ocean came inside for a nice cup of tea. THE END`,
      liked: 3,
      views: 100,
      author_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Charming Baby Leaf',
      story: `Baby Leaf had always loved damp Bangkok with its happy, handsome hills. It was a place where she felt ambivalent.
      She was a charming, grateful, whiskey drinker with scrawny moles and fragile abs. Her friends saw her as a graceful, grisly giant. Once, she had even helped a knowledgeable deaf person cross the road. That's the sort of woman he was.
      Baby walked over to the window and reflected on her hilly surroundings. The rain hammered like sleeping horses.
      Then she saw something in the distance, or rather someone. It was the figure of Wenna Cockle. Wenna was an arrogant writer with pretty moles and wide abs.
      Baby gulped. She was not prepared for Wenna.
      As Baby stepped outside and Wenna came closer, she could see the pleasant glint in her eye.
      Wenna gazed with the affection of 1406 splendid low lizards. She said, in hushed tones, "I love you and I want love."
      Baby looked back, even more stressed and still fingering the stripy record. "Wenna, get out of my house," she replied.
      They looked at each other with ambivalent feelings, like two kind, knobby kittens rampaging at a very friendly disco, which had orchestral music playing in the background and two creepy uncles thinking to the beat.
      Baby regarded Wenna's pretty moles and wide abs. "I feel the same way!" revealed Baby with a delighted grin.
      Wenna looked afraid, her emotions blushing like a burnt, breezy book.
      Then Wenna came inside for a nice glass of whiskey.
      THE END`,
      liked: 3,
      views: 1000,
      author_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Hilarious Mozarella',
      story: `Mozarella had always loved grey West Boggins with its jolly, joyous jungle. It was a place where she felt happy.
      She was a hilarious, lovable, squash drinker with vast legs and greasy moles. Her friends saw her as a tricky, tame teacher. Once, she had even helped an adventurous old man cross the road. That's the sort of woman he was.
      Mozarella walked over to the window and reflected on her cold surroundings. The sun shone like loving horses.
      Then she saw something in the distance, or rather someone. It was the figure of David Thornhill. David was a ruthless painter with ruddy legs and brown moles.
      Mozarella gulped. She was not prepared for David.
      As Mozarella stepped outside and David came closer, she could see the concerned glint in his eye.
      David gazed with the affection of 6459 generous difficult dogs. He said, in hushed tones, "I love you and I want Games."
      Mozarella looked back, even more active and still fingering the spotty ruler. "David, I am your mother," she replied.
      They looked at each other with ambivalent feelings, like two fragile, foolish flamingos running at a very down to earth holiday, which had piano music playing in the background and two clumsy uncles dancing to the beat.
      Mozarella regarded David's ruddy legs and brown moles. "I feel the same way!" revealed Mozarella with a delighted grin.
      David looked sparkly, his emotions blushing like a glorious, grisly gun.
      Then David came inside for a nice beaker of squash.
      THE END`,
      liked: 3,
      views: 50,
      author_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Two Adorable Uncles',
      story: `Luke Lakeman had always loved idyllic Dallas with its energetic, enthusiastic estuaries. It was a place where he felt surprised.
      He was a friendly, virtuous, squash drinker with brunette eyebrows and moist lips. His friends saw him as a leaking, lonely lawyer. Once, he had even helped a difficult puppy cross the road. That's the sort of man he was.
      Luke walked over to the window and reflected on his quiet surroundings. The rain hammered like chatting flamingos.
      Then he saw something in the distance, or rather someone. It was the figure of Beth Gloop. Beth was a hungry ogre with brunette eyebrows and feathery lips.
      Luke gulped. He was not prepared for Beth.
      As Luke stepped outside and Beth came closer, he could see the spluttering glint in her eye.
      Beth gazed with the affection of 4251 helpful round rats. She said, in hushed tones, "I love you and I want some more Twitter followers."
      Luke looked back, even more irritable and still fingering the bendy sausage. "Beth, what's up Doc," he replied.
      They looked at each other with sleepy feelings, like two funny, faint frogs partying at a very adorable birthday party, which had jazz music playing in the background and two adorable uncles thinking to the beat.
      Luke regarded Beth's brunette eyebrows and feathery lips. "I feel the same way!" revealed Luke with a delighted grin.
      Beth looked sleepy, her emotions blushing like a kaleidoscopic, keen kettle.
      Then Beth came inside for a nice beaker of squash.
      THE END`,
      liked: 0,
      views: 10,
      author_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Two Virtuous Uncles',
      story: `Josh Trescothik looked at the weathered map in his hands and felt sleepy.
      He walked over to the window and reflected on his pretty surroundings. He had always loved grand Berlin with its comfortable, cooing cliffs. It was a place that encouraged his tendency to feel sleepy.
      Then he saw something in the distance, or rather someone. It was the figure of Garth Wilson. Garth was a smelly wally with scrawny toes and solid ankles.
      Josh gulped. He glanced at his own reflection. He was a creepy, down to earth, cocoa drinker with pretty toes and ugly ankles. His friends saw him as a hurt, high-pitched hero. Once, he had even brought a spewmungous injured bird back from the brink of death.
      But not even a creepy person who had once brought a spewmungous injured bird back from the brink of death, was prepared for what Garth had in store today.
      The clouds danced like swimming badgers, making Josh happy.
      As Josh stepped outside and Garth came closer, he could see the joyous glint in his eye.
      "Look Josh," growled Garth, with a ruthless glare that reminded Josh of smelly ostriches. "It's not that I don't love you, but I want justice. You owe me 9304 pounds."
      Josh looked back, even more happy and still fingering the weathered map. "Garth, I'm in love with you," he replied.
      They looked at each other with anxious feelings, like two flaky, flat flamingos drinking at a very admirable carol service, which had reggae music playing in the background and two virtuous uncles drinking to the beat.
      Josh regarded Garth's scrawny toes and solid ankles. "I don't have the funds ..." he lied.
      Garth glared. "Do you want me to shove that weathered map where the sun don't shine?"
      Josh promptly remembered his creepy and down to earth values. "Actually, I do have the funds," he admitted. He reached into his pockets. "Here's what I owe you."
      Garth looked jumpy, his wallet blushing like a brief, beautiful banana.
      Then Garth came inside for a nice mug of cocoa.
      THE END`,
      liked: 0,
      views: 200,
      author_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
