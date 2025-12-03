export interface Story {
  id: string
  shelf: 'isas-dream-shelf' | 'sias-spark-shelf' | 'twin-sparks-shelf'
  title: string
  emoji: string
  summary: string
  pages: string[]
}

export const stories: Story[] = [
  // ============================================
  // ISA'S DREAM SHELF (Purple #9D4EDD)
  // ============================================
  {
    id: 'the-infinite-shell-storm',
    shelf: 'isas-dream-shelf',
    title: 'The Infinite Shell Storm',
    emoji: '🐚',
    summary: 'Isa discovers why some shells are more magical than others',
    pages: [
      "Mini-Isa stood on her purple cloud, watching the sky. Something magical was happening! Beautiful rainbow shells were falling like snowflakes all around her.",
      "Isa loved collecting shells. She picked up one, two, three! But then something strange happened. Every time she grabbed a shell, two more appeared.",
      "\"This is wonderful!\" Isa laughed. Soon she had twenty shells in her backpack. Then fifty. Then one hundred!",
      "Glimmer the firefly flew down with a soft glow. \"So many shells, but what's this? The more you have, the less they're missed!\"",
      "Isa looked closer at her shells. Glimmer was right! The shells didn't glow anymore. They felt light and empty, like they'd lost their magic.",
      "Just then, Pixel the tiny dragon landed beside her. He was holding one shell—a deep purple one that glowed like a star.",
      "\"I found this under the Great Question Tree,\" Pixel said. \"It's the only one in all of Lumina. You can't make another one, no matter what.\"",
      "Isa's eyes grew wide. She understood now! The rainbow shells kept multiplying—that's why they lost their magic. But Pixel's shell was special because there was only one.",
      "Glimmer glowed brighter: \"Forever shells are hard to make. Only twenty-one million—not one more can the world create!\"",
      "Isa gently let go of all her rainbow shells. They floated up into the sky and disappeared like bubbles. She felt lighter, happier.",
      "\"Pixel, may I hold your forever shell for just a moment?\" Isa asked.",
      "Pixel smiled and placed the purple shell in her hand. The moment Isa touched it, light bloomed everywhere. Beautiful patterns appeared on the clouds beneath her feet.",
      "The infinite shell storm stopped. The sky cleared to show the first stars of evening.",
      "\"I get it now,\" Isa said. \"Something is more special when there's only a few of them. That's what makes them worth keeping.\"",
      "Glimmer whispered softly: \"True treasure can't be made like rain. Real magic has a limit—and that's what makes it remain.\" Isa smiled. She'd learned something important today.",
    ],
  },
  {
    id: 'pixels-locked-treasure',
    shelf: 'isas-dream-shelf',
    title: "Pixel's Locked Treasure",
    emoji: '🔐',
    summary: 'Pixel learns the importance of keeping his own keys',
    pages: [
      "Mini-Isa was exploring the Library of Clouds when she heard soft crying. It was her friend Pixel the tiny dragon, sitting beside a beautiful locked box.",
      "\"What's wrong, Pixel?\" Isa asked gently. Pixel sniffled. \"My favorite treasure is locked inside. I forgot where I put the key!\"",
      "Glimmer floated down from a bookshelf. \"Keys keep treasures safe and sound. But lose the key? It can't be found!\"",
      "Isa looked at the box carefully. It wasn't locked with a regular lock. Instead, it had a puzzle on the lid—shapes that needed to be arranged in a special pattern.",
      "\"This isn't a key you can hold,\" Isa said. \"It's a key you have to remember! The pattern IS the key.\"",
      "Pixel's eyes widened. \"I remember now! Circle... triangle... square... star! That was my secret pattern!\"",
      "Isa helped Pixel touch the shapes in the right order. Circle. Triangle. Square. Star.",
      "Click! The box opened! Inside was a small purple crystal that glowed with warm light. Pixel hugged it close.",
      "\"This crystal is from my home,\" Pixel explained. \"It's the only one I have. That's why I needed to keep it extra safe.\"",
      "Glimmer glowed brighter: \"Special things need special care. Keep your pattern safe somewhere!\"",
      "\"But what if I forget again?\" Pixel worried. Isa thought for a moment. \"Let's write it down in a secret place only you know about.\"",
      "They found a special book on the highest shelf. Isa helped Pixel write: \"My pattern: Circle, Triangle, Square, Star. Only I know where this book lives!\"",
      "Pixel carefully put the crystal back in the box, locked it with the pattern, and placed the box in his secret hiding spot behind the Moon Window.",
      "\"Now only YOU can open it,\" Isa said. \"Because only you know the pattern AND where you hid it.\"",
      "Glimmer did a little flip: \"Your treasure, your pattern, your choice alone. The safest vault is one you own!\" Isa smiled. She'd learned that real security means being your own protector.",
    ],
  },

  // ============================================
  // SIA'S SPARK SHELF (Teal #06D6A0)
  // ============================================
  {
    id: 'jiras-infinite-neck-stretch',
    shelf: 'sias-spark-shelf',
    title: "Jira's Infinite Neck Stretch",
    emoji: '🦒',
    summary: 'Sia learns that real solutions come from real work',
    pages: [
      "Mini-Sia stood on her teal cloud island, hands on her hips. Her new friend Jira the Giraffe was in big trouble!",
      "Jira LOVED eating leaves from the Star Tree. The higher the leaves, the tastier they were. But Jira wanted MORE, MORE, MORE!",
      "\"Watch this, Sia!\" Jira said. She stretched her neck longer... and longer... and LONGER! Soon her neck was as tall as three giraffes!",
      "But then—BONK!—Jira's neck got stuck between two tree branches. She couldn't move up or down!",
      "Glimmer zipped down in a flash of light. \"Stretched too fast, now you're stuck tight! The easy way won't make it right!\"",
      "\"How do we help her?\" Sia asked. Glimmer flew to a glowing bottle hanging from a branch. Inside, tiny lightning bolts danced around.",
      "\"This is a Lightning Bottle,\" Glimmer explained. \"If we can fill it with real energy, it will shrink Jira's neck back to normal. But there's only ONE way to do it.\"",
      "Glimmer's glow pulsed like a heartbeat: \"Work for real, and you shall see—ten jumps will set the giraffe free!\"",
      "\"Jumping jacks? I can do that!\" Sia grinned. She loved moving! She held the bottle tight and started jumping.",
      "One! Two! Three! With every jump, a tiny lightning bolt appeared inside the bottle. Four! Five! Six! The bottle was filling up!",
      "Seven! Eight! Sia was getting tired, but she kept going. Nine! The bottle was almost full!",
      "\"TEN!\" Sia shouted. The Lightning Bottle exploded with light! She threw it toward Jira.",
      "ZAP! The lightning wrapped around Jira's stretched neck like a glowing rope. Slowly, her neck shrank back down to its normal size!",
      "\"You did it, Sia!\" Jira said, nuzzling her friend. \"You WORKED for it! That's real magic.\"",
      "Glimmer floated between them: \"Easy magic fades away fast. Real work? That's the kind that lasts!\" Sia smiled. She'd learned that the best solutions come from doing the work.",
    ],
  },
  {
    id: 'whiskers-copycat-chaos',
    shelf: 'sias-spark-shelf',
    title: "Whisker's Nine-Lives Copy-Cat Chaos",
    emoji: '🐱',
    summary: 'Sia discovers how signatures prove what is real',
    pages: [
      "Mini-Sia was playing catch with Whisker the Shadow Cat when something weird happened. Whisker caught the glowing ball... but then TWO Whiskers appeared!",
      "\"Whoa! How did you do that?\" Sia asked. Both Whiskers grinned the same mischievous grin. \"I'm the REAL Whisker!\" they both said at once.",
      "Then—POP!—four Whiskers appeared! Then eight! Then sixteen! Soon there were Whiskers EVERYWHERE, all claiming to be the real one!",
      "Glimmer zipped through the crowd of cats: \"Copies, copies everywhere! But which cat's real? Which one's fair?\"",
      "\"This is fun!\" one Whisker laughed. \"I can be in a hundred places at once!\" But Sia frowned. \"If everyone is you, then no one is you. That's not right!\"",
      "Glimmer landed on Sia's shoulder. \"Here's the fix, here's what to do: Make a mark that's only TRUE!\"",
      "\"A mark?\" Sia asked. \"Like... a signature?\" Glimmer's glow pulsed. \"Yes! But not with a pen. With a magical thread that only the REAL Whisker can tie!\"",
      "Sia pulled out a ball of glowing teal thread from her pocket. \"Okay, Whiskers! If you're real, tie this into YOUR special knot. The one only you know how to make!\"",
      "The fake Whiskers tried and tried, but they couldn't do it! Their paws went through the thread like it wasn't even there. One by one, they started to fade away.",
      "But ONE Whisker stepped forward. She grabbed the thread with confidence and tied it into a special loop-and-twist knot. The thread glowed bright teal!",
      "\"That's MY knot!\" the real Whisker said proudly. \"I invented it when I was a kitten. Nobody else knows how to make it!\"",
      "All the other Whiskers vanished like smoke. Only the real one remained, holding her unique knot-signature.",
      "Sia grinned. \"So THAT'S how we know what's real online! Everyone has their own special signature that can't be copied!\"",
      "Whisker purred. \"From now on, whenever I want to prove it's really me, I'll tie my special knot. No copy-cats allowed!\"",
      "Glimmer danced in the air: \"One true you, one true sign. Your knot is yours, and mine is mine!\" Sia laughed. She'd learned that being unique is what makes you real.",
    ],
  },

  // ============================================
  // TWIN SPARKS SHELF (Gold #FFD60A)
  // ============================================
  {
    id: 'the-great-shell-heist',
    shelf: 'twin-sparks-shelf',
    title: 'The Great Shell Heist',
    emoji: '⚡',
    summary: 'The twins work together to save the Forever Shells',
    pages: [
      "Something was VERY wrong on the Archipelago. The Great Shell Storm was back—and this time, it wasn't stopping!",
      "Mini-Isa and Mini-Sia stood together on the golden bridge between their cloud islands. They'd never seen Glimmer look so worried.",
      "\"Sisters strong, but storms are stronger still! This heist needs brain AND builder skill!\"",
      "\"What do you mean, a heist?\" Sia asked, cracking her knuckles. \"Are we stealing something?\"",
      "Glimmer pointed to a dark cave at the edge of the storm. Inside, someone was making fake shells! \"The Storm Thief is making copies to flood Lumina. The real Forever Shells are hidden in there.\"",
      "\"We have to get the real shells out before they're buried forever!\" Isa said. \"But how?\"",
      "Sia grinned. \"You find them. I'll grab them. Together we can do this!\"",
      "They raced to the cave entrance. Shells were EVERYWHERE—thousands of them, all looking exactly the same!",
      "Isa closed her eyes and listened carefully. \"The real shells hum,\" she whispered. \"They have a pattern. I can hear it!\"",
      "\"There! Three deep purple shells hidden behind that rock!\" Isa pointed. But the rock was HUGE—and shells kept falling on top of it.",
      "\"I've got this!\" Sia dove into the pile of shells like a swimmer. She dodged left, ducked right, and rolled under falling shells!",
      "Sia reached the boulder and pushed with all her strength. It wouldn't move! \"Isa, I need your help!\"",
      "Isa saw the pattern in the rock—a hidden seam, shaped like a puzzle! \"Push the LEFT corner, not the middle!\" she shouted.",
      "Sia shifted her hands and pushed the left corner. CRACK! The boulder split in half! Three purple Forever Shells tumbled out, glowing like stars.",
      "The girls grabbed the Forever Shells and ran! As soon as they crossed the golden bridge, the fake shell storm stopped. The sky cleared.",
      "Glimmer did a loop-the-loop in the air: \"One finds the path, one breaks the wall! Together, you can solve it all!\"",
      "Isa smiled at her sister. \"I couldn't have done it without you.\" Sia bumped her shoulder. \"Same. We're better together.\"",
    ],
  },
  {
    id: 'the-lightning-bottle-tag-duel',
    shelf: 'twin-sparks-shelf',
    title: 'The Lightning Bottle Tag Duel',
    emoji: '🏷️',
    summary: 'The twins discover that working hard means everyone can win',
    pages: [
      "The Twin Sparks Bridge was glowing extra bright today. Isa and Sia were having their first friendly competition!",
      "Glimmer held up two empty Lightning Bottles. \"Here's the game: whoever fills their bottle first wins the Golden Star Badge!\"",
      "\"But how do we fill them?\" Isa asked. Sia bounced on her toes, ready for action. \"Do we race? Do we build something?\"",
      "Glimmer grinned: \"Tag and freeze, run and chase! The one who works earns their place!\"",
      "The rules were simple: Sia was \"IT\" first. She had to tag Isa. Every time someone got tagged, a lightning bolt appeared in the tagger's bottle!",
      "\"Ready... SET... GO!\" Glimmer shouted. Sia ZOOMED after Isa like a rocket!",
      "But Isa was quick too! She dodged left, then right, using the bridge's glowing patterns to predict where Sia would run. \"Can't catch me!\" Isa laughed.",
      "Sia grinned. \"Watch THIS!\" She jumped, spun in the air, and—TAG!—touched Isa's shoulder. ZING! A lightning bolt appeared in Sia's bottle!",
      "\"My turn to chase!\" Isa said, now IT. She watched Sia's movements carefully, looking for a pattern in how she ran.",
      "There! Sia always dodged right first. Isa waited... waited... then went LEFT and—TAG! Lightning bolt number one for Isa!",
      "They played and played! TAG! Sia scored. TAG! Isa scored. TAG! TAG! TAG! Both bottles were filling up with bright lightning!",
      "Finally, both bottles were almost full—nine lightning bolts each! They were TIED! One more tag would win the game!",
      "But then Isa and Sia looked at each other... and smiled. \"Wait,\" Isa said. \"What if we BOTH win?\"",
      "\"You chase me, I chase you, at the SAME TIME!\" Sia laughed. They ran in a circle, tagging each other's hands together. BOOM! Both bottles filled at once!",
      "Glimmer spun in delight: \"Work together, work apart—both can win with equal heart!\"",
      "The Golden Star Badge split into TWO badges—one for each girl! They sparkled with the same light.",
      "\"We both worked hard,\" Isa said, putting her arm around Sia. \"We both earned it.\" Sia grinned. \"Next time, I'm totally winning solo though!\" They laughed together as Glimmer glowed warm gold around them.",
    ],
  },
]

// Helper function to get stories by shelf
export function getStoriesByShelf(shelfId: string): Story[] {
  return stories.filter((story) => story.shelf === shelfId)
}

// Helper function to get a specific story
export function getStory(storyId: string): Story | undefined {
  return stories.find((story) => story.id === storyId)
}

// Helper function to get story by shelf and story ID
export function getStoryByShelfAndId(shelfId: string, storyId: string): Story | undefined {
  return stories.find((story) => story.shelf === shelfId && story.id === storyId)
}






