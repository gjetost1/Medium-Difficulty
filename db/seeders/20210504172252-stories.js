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
      updatedAt: new Date(),
      storyImage: '/exampleImgs/adventure.jpg'
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
      updatedAt: new Date(),
      storyImage: '/exampleImgs/babyLeaf.jpg'
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
      updatedAt: new Date(),
      storyImage: '/exampleImgs/funnyCheese.jpg'
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
      updatedAt: new Date(),
      storyImage: '/exampleImgs/family.jpg'
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
      views: 10,
      author_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Whatever Happened To Roguelikes?',
      story: `Back when I was a kid, all we needed to have fun was a procedurally generated map and whole mess of RNG loot. Ahhh, the good old days.

      Truly, I miss those days. Back when a young person could spend days losing themself in Nethack without a thought or care in the world for the mundanity of modern life.

      Nowadays it's all fast-paced battle royale games, with gamers hopped up on vape smoke and energy drinks, ripping around on their Razers and Rosewills.

      I heard a statistic the other day, in fact. Cherry Reds are all the rage, and over 60% of gamers now use a specialized gaming mouse and keyboard. What happened to the shallow, insanely repetitive gameplay?

      What happened to the blocky, difficult to interpret graphics? To the uneven and asymmetrical AI enemies? To the simplistic map design?

      What happened to the joy of gaming? It's all been ruined, if you ask me. And you are asking me! I'm right here.

      Okay, grandpa, let's get you to bed.

      Sorry about that. Pawpaw got onto my account again. See, my grandfather tends to wax rhapsodic about the old days, but he doesn't seem to understand that we still have roguelikes.

      We still have all the stuff he liked, in fact. He just has a little trouble with information diffusion and filtering. The huge glut of games makes it hard for him to keep track of what's what.

      And I can't blame him! There were a lot less options back in the day. People still like Miller Lite, after all. Sometimes they didn't have any other options!

      I've been telling Pawpaw there's no reason to get upset, but he just tells me to turn up the Dig Dug. What can you do? I still love him.

      Not a huge problem, though. He still comes around once in awhile, for a really good game. One day, I hope I'm like him. I hope I can still enjoy the novelty and innovation.

      Even if it's hard to admit.

      And it might be.

      THE END`,
      views: 2000,
      author_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Designing Player Punishment',
      story: `My studio is designing a video game where you watch the contestants slowly gaining weight, endure insults and curses, and try to win the game back!
      I have this idea for a game idea that could be used as a template for something, just in case.
      I am planning to make a survival game around this time of year, but I want to make something really special (like an RPG) around this time of year, so the idea must have something to with the special conditions that the humans in the movie went in for the biggest slump they've had to make a slump of sorts to stay alive. So the idea must be that it's a 2D game, you just shovel water on to people and freeze them in place for 30 seconds, with special properties.
      Then once they make it, you are allowed to put them in your game and play them on their behalf.
       I plan on 2d survival games, but might expand it to 3rd/4th depending on market share.
      Thank you for reading! I don't know how hard this will probably be to make, but basically i ground my ideas flat on the floor, then waited it out, hoping something crazy wil`,
      views: 10,
      author_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Modern Horror Games',
      story: `I would like to program a new video game that could be made from this concept.
      Please share this with friends and other developers. I'm envisioning a game that I've been working on called "Under the Dome", and I would like to add some horror to it.
      I'm not really into the type of games that you'd typically put yourself in, but I think that if there's a game that would fit within the Under the Dome concept, it'd be on the list of things that I need to build.
      Also, there are a very very very small amount of clay planet types in this world out there, so there may or may not be dungeons or pits, or even entire continents. I think that for the most part, these are the types of things we're going to be putting into place for this game to make it feel natural.
      Also, there are a very very very long amount of ways to go this game will go, and you can't really get good at it until you're 40, which is when you really start getting into character development.
      This is all I can write for now, please let me know what you all think!`,
      views: 1004,
      author_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'We Need More Wizards',
      story: `I have an idea for a video game where the player watches the wizard interacting with the world, he talks to the character dialog, does battle doing some exercise occasionally, eats some food, sleeps, etc. The idea is that the video player would be able to hear the character do various tasks, but not just fight, err, do some chores, answer a call, walk around, do some shopping, etc. The watcher would be able to see character's movement as well as the character's face. And the display would be retina-forming so that the character looks like a wizened teenager.
      The main point of the game is to see and hear the wizard say his prayers, as well as the conversation of the characters.
      There would be a few apkkaized please-type features that I will get to.
      Dialogue: I want the wizard to make helpful recordings letting me know what he is talking about, and when he is, I can show where he is going.
      The apkkaized need to know the character's usual notes.
      The idea is that you fight (and sometimes capture) NPCs with a joystick and the ability to switch between (sort of) classic TV shows and movies.
      You have a party of three people, and after the victory is declared, all of the other players in the party are declared defeated and your game is called with a warning tape.
      So for example, you would have three players in a table tennis match between three players, and after a little while they both count out and the match is called.
      It would be video game like sports, but you can't penalize a play if your player doesn't have a showing in the sport.
      In summary, this is a fun little game that players can experience and train for 3 - 5 hours.`,
      views: 976,
      author_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Mastering Fighting Games',
      story: `Fighting games are about more than just mastering move combinations and mashing buttons.
      I have an idea for a video game where you can duel but each player mans a character.
      I need specific ideas on how to build a video game that's unique from other games that I have created.
      What do you guys think? Thank you. I'm thinking something like this. I want to make a 3d game centered around wrestling.
      It would be set in the '50s and '60s in a small Midwestern town. There would be a lot of characters but not a ton of action.
      You might win by character instead of by character by character. Overall the game would be about doing what the show matches in: grappling.
      In the '50s and '60s people in those years used to wrestling, but that wasn't a maintenence nor an option.
      The focus would be on developing skills over time so you could advance through the sport without getting caught.
      The catch would be that you're caught and you have to continue getting better at the sport.
      In addition getting better at the sport would also unlock more special moves or powers. For example, if you win the match you can move on to the next round.`,
      views: 1276,
      author_id: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
      storyImage: '/exampleImgs/angryUncles.jpg'

    }, {
      title: 'Whatever Happened To Roguelikes?',
      story: `Back when I was a kid, all we needed to have fun was a procedurally generated map and whole mess of RNG loot. Ahhh, the good old days.

      Truly, I miss those days. Back when a young person could spend days losing themself in Nethack without a thought or care in the world for the mundanity of modern life.

      Nowadays it's all fast-paced battle royale games, with gamers hopped up on vape smoke and energy drinks, ripping around on their Razers and Rosewills.

      I heard a statistic the other day, in fact. Cherry Reds are all the rage, and over 60% of gamers now use a specialized gaming mouse and keyboard. What happened to the shallow, insanely repetitive gameplay?

      What happened to the blocky, difficult to interpret graphics? To the uneven and asymmetrical AI enemies? To the simplistic map design?

      What happened to the joy of gaming? It's all been ruined, if you ask me. And you are asking me! I'm right here.

      Okay, grandpa, let's get you to bed.

      Sorry about that. Pawpaw got onto my account again. See, my grandfather tends to wax rhapsodic about the old days, but he doesn't seem to understand that we still have roguelikes.

      We still have all the stuff he liked, in fact. He just has a little trouble with information diffusion and filtering. The huge glut of games makes it hard for him to keep track of what's what.

      And I can't blame him! There were a lot less options back in the day. People still like Miller Lite, after all. Sometimes they didn't have any other options!

      I've been telling Pawpaw there's no reason to get upset, but he just tells me to turn up the Dig Dug. What can you do? I still love him.

      Not a huge problem, though. He still comes around once in awhile, for a really good game. One day, I hope I'm like him. I hope I can still enjoy the novelty and innovation.

      Even if it's hard to admit.

      And it might be.

      THE END`,
      views: 2000,
      storyImage: '/exampleImgs/angryUncles.jpg',
      author_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Designing Player Punishment',
      story: `My studio is designing a video game where you watch the contestants slowly gaining weight, endure insults and curses, and try to win the game back!
      I have this idea for a game idea that could be used as a template for something, just in case.
      I am planning to make a survival game around this time of year, but I want to make something really special (like an RPG) around this time of year, so the idea must have something to with the special conditions that the humans in the movie went in for the biggest slump they've had to make a slump of sorts to stay alive. So the idea must be that it's a 2D game, you just shovel water on to people and freeze them in place for 30 seconds, with special properties.
      Then once they make it, you are allowed to put them in your game and play them on their behalf.
       I plan on 2d survival games, but might expand it to 3rd/4th depending on market share.
      Thank you for reading! I don't know how hard this will probably be to make, but basically i ground my ideas flat on the floor, then waited it out, hoping something crazy wil`,
      views: 10,
      author_id: 5,
      storyImage: '/exampleImgs/angryUncles.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Modern Horror Games',
      story: `I would like to program a new video game that could be made from this concept.
      Please share this with friends and other developers. I'm envisioning a game that I've been working on called "Under the Dome", and I would like to add some horror to it.
      I'm not really into the type of games that you'd typically put yourself in, but I think that if there's a game that would fit within the Under the Dome concept, it'd be on the list of things that I need to build.
      Also, there are a very very very small amount of clay planet types in this world out there, so there may or may not be dungeons or pits, or even entire continents. I think that for the most part, these are the types of things we're going to be putting into place for this game to make it feel natural.
      Also, there are a very very very long amount of ways to go this game will go, and you can't really get good at it until you're 40, which is when you really start getting into character development.
      This is all I can write for now, please let me know what you all think!`,
      views: 1004,
      author_id: 6,
      storyImage: '/exampleImgs/angryUncles.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'We Need More Wizards',
      story: `I have an idea for a video game where the player watches the wizard interacting with the world, he talks to the character dialog, does battle doing some exercise occasionally, eats some food, sleeps, etc. The idea is that the video player would be able to hear the character do various tasks, but not just fight, err, do some chores, answer a call, walk around, do some shopping, etc. The watcher would be able to see character's movement as well as the character's face. And the display would be retina-forming so that the character looks like a wizened teenager.
      The main point of the game is to see and hear the wizard say his prayers, as well as the conversation of the characters.
      There would be a few apkkaized please-type features that I will get to.
      Dialogue: I want the wizard to make helpful recordings letting me know what he is talking about, and when he is, I can show where he is going.
      The apkkaized need to know the character's usual notes.
      The idea is that you fight (and sometimes capture) NPCs with a joystick and the ability to switch between (sort of) classic TV shows and movies.
      You have a party of three people, and after the victory is declared, all of the other players in the party are declared defeated and your game is called with a warning tape.
      So for example, you would have three players in a table tennis match between three players, and after a little while they both count out and the match is called.
      It would be video game like sports, but you can't penalize a play if your player doesn't have a showing in the sport.
      In summary, this is a fun little game that players can experience and train for 3 - 5 hours.`,
      views: 976,
      author_id: 7,
      storyImage: '/exampleImgs/angryUncles.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Mastering Fighting Games',
      story: `Fighting games are about more than just mastering move combinations and mashing buttons.
      I have an idea for a video game where you can duel but each player mans a character.
      I need specific ideas on how to build a video game that's unique from other games that I have created.
      What do you guys think? Thank you. I'm thinking something like this. I want to make a 3d game centered around wrestling.
      It would be set in the '50s and '60s in a small Midwestern town. There would be a lot of characters but not a ton of action.
      You might win by character instead of by character by character. Overall the game would be about doing what the show matches in: grappling.
      In the '50s and '60s people in those years used to wrestling, but that wasn't a maintenence nor an option.
      The focus would be on developing skills over time so you could advance through the sport without getting caught.
      The catch would be that you're caught and you have to continue getting better at the sport.
      In addition getting better at the sport would also unlock more special moves or powers. For example, if you win the match you can move on to the next round.`,
      views: 1276,
      author_id: 8,
      storyImage: '/exampleImgs/angryUncles.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
