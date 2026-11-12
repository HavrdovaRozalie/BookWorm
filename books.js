// =====================================================
//  BOOKS
//  Every book I've read. Books with a "summary" get a
//  full review card; the others show stars and date.
//
//  To add a book, copy one { ... } block, paste it into
//  the list (separated by a comma) and change the texts.
//  - Dates are written as "YYYY-MM-DD" ("" if unknown).
//  - rating is 1–5 (0 = not rated).
//  - Long texts go between backticks `like this` and can
//    have several paragraphs (leave an empty line between).
//  - Anything in "spoilers" is hidden behind a
//    "Show spoilers" button.
// =====================================================
const books = [
  // ----- Books with a written review -----
  {
    title: "The Night We Met",
    author: "Abby Jimenez",
    genre: "Romance",
    pages: 400,
    rating: 5,
    finished: "2026-08-28",
    summary: `I just love everything that Abby Jimenez writes. She is genuinely funny. I’m like really laughing out loud reading her. She always gives these complex characters that you fell in love it (at least I’m) she is my favourite romance writer. I don’t think anyone can compare. Might start reading another books by her that I already read just because she is that good.`
  },
  {
    title: "Throne of the Fallen",
    author: "Kerri Maniscalco",
    genre: "Fantasy",
    pages: 593,
    rating: 1,
    finished: "2026-08-03",
    summary: `I was so bored and dissapointed half way through it. I skipped the spicy chapters which is unlike me :).`
  },
  {
    title: "The Knight and the Moth",
    author: "Rachel Gillig",
    genre: "Fantasy",
    pages: 385,
    rating: 2,
    finished: "2026-07-13",
    summary: `I’m really sorry, but I found this book quite boring. The storyline about destroying the omens felt very repetitive to me, and I struggled to stay engaged. I also didn’t connect with most of the characters, except for Bartholomew the gargoyle, who was by far my favorite.`,
    spoilers: `At first, I thought Rory was the true king and that Benji was simply his knight, protecting him and allowing him to blend in with ordinary people. I was convinced that was where the story was going, but it turned out not to be the case.

I also found Sybil to be fairly one-dimensional, much like the rest of the characters. Rory felt quite generic as well. Most of all, I never really believed in or felt the longing and chemistry between Sybil and Rory, so the romance didn’t work for me.

Overall, this book just wasn’t for me.`
  },
  {
    title: "Rain of Shadows and Endings",
    author: "Melissa K. Roehrich",
    genre: "Fantasy",
    pages: 670,
    rating: 5,
    finished: "2026-03-12",
    summary: `I read this book in two days and stayed up until 2 a.m. to finish it.

It might be the best fantasy book I’ve read recently.`,
    spoilers: `The only thing I didn’t like was Luka and Theon calling Tessa “good girl” and “little one” from the start. It felt a bit weird to me. I think it would have been more effective if it had appeared later in the story and less frequently.`
  },
  {
    title: "Alchemised",
    author: "SenLinYu",
    genre: "Fantasy",
    pages: 1030,
    rating: 5,
    finished: "2026-05-17",
    summary: `I heard a lot of good things about this book, and I was afraid I might be disappointed. Absolutely not!

This book was amazing! I fell into the fantasy world right away. Even though it’s over 1000 pages long, I read it so fast.

The worldbuilding was incredible. The combination of alchemy and necromancy worked so well, and I wish I could read even more about it.`,
    spoilers: `And Kaine… you broken boy. I’m so sorry for everything that happened to you.

I was afraid of the ending. I thought they were going to die, that Kaine would have to kill Helena, and that other awful things would happen. But then it ended “happily.” I was so prepared for everything to end badly that I honestly didn’t know how to feel about the happy ending. I might need to reread it.

But the ending was also sad and tragic. They were scarred by the war, and that pain will never disappear. Kaine being lost in his new life because he could never imagine a future for himself… oh, I could cry just thinking about it.

And Helena… she was my hero. I felt so deeply for her. She wanted to save everyone and never cared about herself. She doesn’t even care that she is remembered as the non-active member who did not fight. Shiseo and Kaine erased every word about her to protect her.

Helena saved Kaine by bonding him to herself. She gave him something to live for. She used the diagram to make Kaine obsessed with her — she became the thing keeping him alive.

He was so tired and ready to die, knowing that Helena and their baby were safe… oh, my heart breaks for him. Although I’m happy he survived, I know he can never truly be happy after everything he lived through, especially with how people talk about him in Paladia…

Wow. I can’t stop thinking about this book. Why did Kaine choose Helena to be his contact with the Eternal Flame? Did he visit pleasure houses during the war? Why could he be physically intimate with Aurelia? Was he afraid of having children that Morough could use against him? Did he kill members of the Flame because they failed to protect Helena?`
  },
  {
    title: "The Poison Daughter",
    author: "Sheila Masterson",
    genre: "Fantasy",
    pages: 668,
    rating: 4,
    finished: "2026-03-07",
    summary: `Till chapter 57 best book I read in a long time. After that chapter I was kinda disappointed and confused.`,
    spoilers: `Aida died even before Harlow and Henry were married? WTF? It seemed like the last part of the book was rushed.

Did Harlow had here memories wiped by Electra? Was that the cause of her headaches? Why did nobody tell Henry when he asked for Aida in her house? It doesn’t make any sense why would Harlows parents let Rafe torture their daughters. It would be a good reason to publicly destroy him. Not to act like nothing happened and he didn’t kill one daughter and almost kill the other.

It really disappointed me because otherwise it was original story that got me hooked from first page. Just my cup of tea.

I might actually change my rating to 3 but I desperately want it to be a 5 star book`
  },
  {
    title: "Say You'll Remember Me",
    author: "Abby Jimenez",
    genre: "Romance",
    pages: 368,
    rating: 4,
    finished: "2026-02-21",
    summary: `Abby did it again! Such a great romance book to read on vacation.

I just wish there were more connection between Sam and Xavier than simply that they’re both really good people. Like, what truly connects them, why they love each other even when one of them does something less than perfect.

What I love about Abby is that she writes things that are genuinely funny, not just trying to be funny.`
  },
  {
    title: "Iron Flame",
    author: "Rebecca Yarros",
    genre: "Fantasy",
    pages: 623,
    rating: 3,
    finished: "2023-11-27",
    summary: `Near the end I was sometimes lost in the politics and rules and stuff. Not as good as the first book`
  },
  {
    title: "Leave Me Behind",
    author: "K.M. Moronova",
    genre: "Romance",
    pages: 464,
    rating: 1,
    finished: "2026-01-23",
    summary: `Thanks to this book I found out that literally anyone can become writer… unfortunately`
  },
  {
    title: "The Serpent and the Wings of Night",
    author: "Carissa Broadbent",
    genre: "Fantasy",
    pages: 504,
    rating: 4,
    finished: "2024-08-06",
    summary: `The end made me change to 4 stars instead of 3.`,
    spoilers: `Till the end I didn’t feel nothing towards Raihn. But towards the end I started to like him. I wish there were more riddles in the challenges in the arena.

I wonder about contraception when Oraye and Raihn had sex. Wouldn’t Oraye be pregnant? What are the rules between human and vampire reproduction. I hope to learn more in second book.`
  },
  {
    title: "Full Measures",
    author: "Rebecca Yarros",
    genre: "Fantasy",
    pages: 374,
    rating: 2,
    finished: "2025-03-25",
    summary: `One big poorly written cliché`
  },
  {
    title: "Human Acts",
    author: "Han Kang",
    genre: "Literary fiction",
    pages: 218,
    rating: 5,
    finished: "2024-12-22",
    summary: `Mrzí mě, že jsem si hned na začátku neudělala pořádek ve jménech postav a nezapamatovala si kdo je kdo. Nevím zda to třeba nebyl i záměr autorky a proto jména postav ne úplně často v kapitolách o nich zmiňovala, aby dosáhla toho že se značně prolínají a jejich osudy jsou propojené.`
  },
  {
    title: "The Years",
    author: "Annie Ernaux",
    genre: "Literary fiction",
    pages: 240,
    rating: 4,
    finished: "2024-12-20",
    summary: `Poslouchala jsem knížku jako audioknihu, čtenou paní Eliškou Balzerovou. Myslím si, že by mě kniha ještě víc zasáhla pokud bych jí četla/poslouchala jako starší, nebo pokud bych byla podobná generace jako paní Ernaux.

I tak se mi ale velmi líbilo retrospektivní vyprávění v knize. Velmi zajímavý byl styl vypravěče, vypravěč byl v er-formě ale autorka tak mluvila sama o sobě. Moc hezky se v knížce prolíná objektivní vyprávění francouzské (světové) historie s osobními prožitky samotné autorky.`
  },
  {
    title: "Love on the Brain",
    author: "Ali Hazelwood",
    genre: "Romance",
    pages: 368,
    rating: 3,
    finished: "2024-09-16",
    summary: `Despite not having much in common with the main character, I found the character incredibly likable.I also appreciated the acknowledgment.`
  },
  {
    title: "Yours Truly",
    author: "Abby Jimenez",
    genre: "Romance",
    pages: 398,
    rating: 4,
    finished: "2024-09-12",
    summary: `I felt very represented by Jacob and his mental health. The middle part of the book bored me a little. But the ending was great.`
  },
  {
    title: "The Friend Zone",
    author: "Abby Jimenez",
    genre: "Romance",
    pages: 372,
    rating: 5,
    finished: "2024-08-06",
    summary: `Finished it in one day. Crying happy tears. I loved it.`
  },
  {
    title: "The Bodyguard",
    author: "Katherine Center",
    genre: "Romance",
    pages: 302,
    rating: 3,
    finished: "2024-07-30",
    summary: `No the best writing but enjoyable`
  },
  {
    title: "Icebreaker",
    author: "Hannah Grace",
    genre: "Romance",
    pages: 447,
    rating: 5,
    finished: "2022-11-12",
    summary: `The book felt very warming and made me wish I attended university just like the one in the book and had every future sport star in love with me.

In the half the book got little bit boring and repetitive.

But I still loved it.

Btw the epilogue felt little too good to be true…`
  },
  {
    title: "The Secret History",
    author: "Donna Tartt",
    genre: "Literary fiction",
    pages: 559,
    rating: 4,
    finished: "2024-03-15",
    summary: `I would gave this book 3,5/5.

I found 2/3 of this book very slow and I had to sometimes force myself to read it. But the last 1/3 were interesting.

I often thought about book Bunny by Mona Award.

The characters are really well written.`
  },
  {
    title: "Bride",
    author: "Ali Hazelwood",
    genre: "Romance",
    pages: 410,
    rating: 3,
    finished: "2024-02-11",
    summary: ``,
    spoilers: `I would like it more if he had normal working dick`
  },
  {
    title: "The Dragon Republic",
    author: "R.F. Kuang",
    genre: "Fantasy",
    pages: 658,
    rating: 5,
    finished: "2024-02-09",
    summary: `I would appreciate more happy moments 🙂`
  },
  {
    title: "The Poppy War",
    author: "R.F. Kuang",
    genre: "Fantasy",
    pages: 545,
    rating: 4,
    finished: "2024-02-03",
    summary: `🤯

Don’t do drugs kids.

Some scenes were too brutal for me.`
  },
  {
    title: "Book Lovers",
    author: "Emily Henry",
    genre: "Romance",
    pages: 377,
    rating: 5,
    finished: "2024-01-03",
    summary: `This book was very fresh. It was romantic, touching and sweet. I really liked it. The romantic twist was very nice. I liked that Nora was no beauty in distress. And the whole spirit of the book was to be yourself.

The sex scenes are not my fav. I had problems with imagining the positions the characters are in. But it did not affect my experience of reading this book.`
  },
  {
    title: "All About Love: New Visions",
    author: "bell hooks",
    genre: "Non-fiction",
    pages: 240,
    rating: 3,
    finished: "2023-12-13",
    summary: `I did not like all the references to bible. I am an atheist and stories from the bible do not seem realistic to me. I feel like this book was written only to believers. It doesn’t seem wise to base psychological analysis on bible stories.`
  },
  {
    title: "Beautiful World, Where Are You",
    author: "Sally Rooney",
    genre: "Literary fiction",
    pages: 337,
    rating: 5,
    finished: "2023-11-09",
    summary: `Wow.

I loved this book. Beautifully written (sometimes I felt like I was in the room with the characters), interesting and I really felt like the author understands my generation and the current world struggles.

The characters were complex and believable. I feel like I know them.

This is my favourite book by Sally Rooney 💕`
  },
  {
    title: "Everyone in This Room Will Someday Be Dead",
    author: "Emily R. Austin",
    genre: "Literary fiction",
    pages: 256,
    rating: 5,
    finished: "2023-10-13",
    summary: `This book was so interesting, funny but also deep and original. I loved reading this book and finished it in 2 days. I felt deeply with its main character Gilda. I hope she is happy and still working at the church to this day.`
  },
  {
    title: "Bunny",
    author: "Mona Awad",
    genre: "Horror",
    pages: 307,
    rating: 3,
    finished: "2023-10-10",
    summary: `What the fuck have I just read?`,
    spoilers: `My intuition told me that Ava might not be real person in the start. Other than that I’m afraid I didn’t understood half the thing that happened in this book. I’m sorry 😅

And I wasn’t creeped out by any of it. I didn’t find it scary at all. Maybe horror is a bit misleading.`
  },
  {
    title: "Dance of Thieves",
    author: "Mary E. Pearson",
    genre: "Fantasy",
    pages: 512,
    rating: 5,
    finished: "2023-07-22",
    summary: `Wow, my new favorite book`
  },
  {
    title: "My Year of Rest and Relaxation",
    author: "Ottessa Moshfegh",
    genre: "Literary fiction",
    pages: 289,
    rating: 4,
    finished: "2022-12-31",
    summary: ``,
    spoilers: `I felt like the main character of this book was Reva. The best friend of the narrator.

She is this soulless creature trying to fit it. I feel like there are many people living like this in todays world. She is good as she is but she doesn’t seem to know. She is bulimistic most of her life. She has this urge to be cruel to herself. Having affair with a man that would never be with her, having a friend that doesn’t care about her one bit.

Her story fascinated me a lot.

This book was full of great insights about life but Reva seems to be the greatest tragedy of this book.`
  },
  {
    title: "Neon Gods",
    author: "Katee Robert",
    genre: "Romance",
    pages: 380,
    rating: 1,
    finished: "2022-12-02",
    summary: `This book has nothing to do with Greek mythology except for the names of the characters, the gods weren't really gods, it had no plot and the dialogue was terribly stupid.

What disappointed me the most was the character of Hades. It had none of its charm, darkness and mystery.

I don't understand why the book aroused such enthusiasm, from the middle of the book I literally had to force myself to finish it.`
  },

  // ----- Books with only a rating -----
  {
    title: "Deep End",
    author: "Ali Hazelwood",
    genre: "Romance",
    rating: 2,
    finished: "2025-12-31"
  },
  {
    title: "Below Zero",
    author: "Ali Hazelwood",
    genre: "Romance",
    rating: 4,
    finished: "2026-09-06"
  },
  {
    title: "Stuck with You",
    author: "Ali Hazelwood",
    genre: "Romance",
    rating: 4,
    finished: "2026-09-05"
  },
  {
    title: "Under One Roof",
    author: "Ali Hazelwood",
    genre: "Romance",
    rating: 4,
    finished: "2026-09-03"
  },
  {
    title: "The Fall Risk",
    author: "Abby Jimenez",
    genre: "Romance",
    rating: 5,
    finished: "2026-09-02"
  },
  {
    title: "Worst Wingman Ever",
    author: "Abby Jimenez",
    genre: "Romance",
    rating: 5,
    finished: "2026-08-31"
  },
  {
    title: "The Situationship",
    author: "Abby Jimenez",
    genre: "Romance",
    rating: 4,
    finished: "2026-08-30"
  },
  {
    title: "Part of Your World",
    author: "Abby Jimenez",
    genre: "Romance",
    rating: 5,
    finished: "2024-08-25"
  },
  {
    title: "House of Earth and Blood",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    rating: 2,
    finished: "2021-08-16"
  },
  {
    title: "Once Upon a Broken Heart",
    author: "Stephanie Garber",
    genre: "Fantasy",
    rating: 3,
    finished: "2026-08-22"
  },
  {
    title: "The Death of the Beautiful Roebucks",
    author: "Ota Pavel",
    genre: "Literary fiction",
    rating: 4,
    finished: ""
  },
  {
    title: "A Court of Mist and Fury",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Reckless",
    author: "Lauren Roberts",
    genre: "Fantasy",
    rating: 2,
    finished: "2026-04-15"
  },
  {
    title: "Storm of Secrets and Sorrow",
    author: "Melissa K. Roehrich",
    genre: "Fantasy",
    rating: 4,
    finished: "2026-03-31"
  },
  {
    title: "Boule de Suif",
    author: "Guy de Maupassant",
    genre: "Classics",
    rating: 3,
    finished: ""
  },
  {
    title: "One Child",
    author: "Torey L. Hayden",
    genre: "Non-fiction",
    rating: 4,
    finished: "2026-01-04"
  },
  {
    title: "Dinner with a Vampire",
    author: "Abigail Gibbs",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Zelary",
    author: "Květa Legátová",
    genre: "Historical fiction",
    rating: 5,
    finished: "2025-12-29"
  },
  {
    title: "Joza's Hanule",
    author: "Květa Legátová",
    genre: "Historical fiction",
    rating: 5,
    finished: "2025-12-29"
  },
  {
    title: "Mate",
    author: "Ali Hazelwood",
    genre: "Romance",
    rating: 4,
    finished: "2025-12-29"
  },
  {
    title: "The Last Goddess",
    author: "Kateřina Tučková",
    genre: "Literary fiction",
    rating: 5,
    finished: "2025-11-02"
  },
  {
    title: "Powerless",
    author: "Lauren Roberts",
    genre: "Fantasy",
    rating: 4,
    finished: "2025-10-10"
  },
  {
    title: "Sunrise on the Reaping",
    author: "Suzanne Collins",
    genre: "Science fiction",
    rating: 3,
    finished: "2025-08-01"
  },
  {
    title: "Better Than the Movies",
    author: "Lynn Painter",
    genre: "Romance",
    rating: 2,
    finished: "2025-06-29"
  },
  {
    title: "Happy Place",
    author: "Emily Henry",
    genre: "Romance",
    rating: 3,
    finished: "2025-04-02"
  },
  {
    title: "Life’s Too Short",
    author: "Abby Jimenez",
    genre: "Romance",
    rating: 4,
    finished: "2024-12-01"
  },
  {
    title: "Heartless Hunter",
    author: "Kristen Ciccarelli",
    genre: "Fantasy",
    rating: 4,
    finished: "2025-02-28"
  },
  {
    title: "Not in Love",
    author: "Ali Hazelwood",
    genre: "Romance",
    rating: 3,
    finished: "2025-02-12"
  },
  {
    title: "The Happy Ever After Playlist",
    author: "Abby Jimenez",
    genre: "Romance",
    rating: 4,
    finished: "2025-02-01"
  },
  {
    title: "Intermezzo",
    author: "Sally Rooney",
    genre: "Literary fiction",
    rating: 5,
    finished: "2025-01-26"
  },
  {
    title: "It Happened One Summer",
    author: "Tessa Bailey",
    genre: "Romance",
    rating: 2,
    finished: "2024-12-18"
  },
  {
    title: "Mansfield Park",
    author: "Jane Austen",
    genre: "Classics",
    rating: 2,
    finished: ""
  },
  {
    title: "Love, Theoretically",
    author: "Ali Hazelwood",
    genre: "Romance",
    rating: 4,
    finished: "2024-11-18"
  },
  {
    title: "Bodies",
    author: "Klára Vlasáková",
    genre: "Literary fiction",
    rating: 5,
    finished: "2024-10-10"
  },
  {
    title: "Just for the Summer",
    author: "Abby Jimenez",
    genre: "Romance",
    rating: 4,
    finished: "2024-09-27"
  },
  {
    title: "Check & Mate",
    author: "Ali Hazelwood",
    genre: "Romance",
    rating: 5,
    finished: "2024-08-11"
  },
  {
    title: "Funny Story",
    author: "Emily Henry",
    genre: "Romance",
    rating: 4,
    finished: "2024-07-24"
  },
  {
    title: "Carrie Soto Is Back",
    author: "Taylor Jenkins Reid",
    genre: "Literary fiction",
    rating: 5,
    finished: "2024-07-06"
  },
  {
    title: "A Court of Frost and Starlight",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    rating: 3,
    finished: ""
  },
  {
    title: "The Kiss Quotient",
    author: "Helen Hoang",
    genre: "Romance",
    rating: 4,
    finished: "2024-06-28"
  },
  {
    title: "Blue Sisters",
    author: "Coco Mellors",
    genre: "Literary fiction",
    rating: 4,
    finished: "2024-06-26"
  },
  {
    title: "One True Loves",
    author: "Taylor Jenkins Reid",
    genre: "Literary fiction",
    rating: 4,
    finished: "2024-06-23"
  },
  {
    title: "In a New York Minute",
    author: "Kate Spencer",
    genre: "Romance",
    rating: 3,
    finished: "2024-06-22"
  },
  {
    title: "The Vanishing Half",
    author: "Brit Bennett",
    genre: "Literary fiction",
    rating: 5,
    finished: "2024-05-04"
  },
  {
    title: "The Deal",
    author: "Elle Kennedy",
    genre: "Romance",
    rating: 3,
    finished: "2024-04-13"
  },
  {
    title: "Cleopatra and Frankenstein",
    author: "Coco Mellors",
    genre: "Literary fiction",
    rating: 5,
    finished: "2024-04-04"
  },
  {
    title: "Beach Read",
    author: "Emily Henry",
    genre: "Romance",
    rating: 3,
    finished: "2024-03-21"
  },
  {
    title: "People We Meet on Vacation",
    author: "Emily Henry",
    genre: "Romance",
    rating: 4,
    finished: "2024-02-25"
  },
  {
    title: "Letters to the Lost",
    author: "Brigid Kemmerer",
    genre: "Contemporary",
    rating: 2,
    finished: "2023-02-04"
  },
  {
    title: "Bared to You",
    author: "Sylvia Day",
    genre: "Romance",
    rating: 2,
    finished: "2024-01-15"
  },
  {
    title: "Thunderhead",
    author: "Neal Shusterman",
    genre: "Science fiction",
    rating: 5,
    finished: "2023-12-28"
  },
  {
    title: "Frankenstein",
    author: "Mary Wollstonecraft Shelley",
    genre: "Classics",
    rating: 3,
    finished: "2023-12-10"
  },
  {
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    genre: "Fantasy",
    rating: 4,
    finished: "2023-08-27"
  },
  {
    title: "Rhapsodic",
    author: "Laura Thalassa",
    genre: "Fantasy",
    rating: 3,
    finished: "2023-07-15"
  },
  {
    title: "Mockingjay",
    author: "Suzanne Collins",
    genre: "Science fiction",
    rating: 5,
    finished: ""
  },
  {
    title: "The Rift",
    author: "Jozef Karika",
    genre: "Horror",
    rating: 4,
    finished: "2023-10-29"
  },
  {
    title: "Collide",
    author: "Bal Khabra",
    genre: "Romance",
    rating: 5,
    finished: "2023-10-22"
  },
  {
    title: "Northern Girl",
    author: "Nina Špitálníková",
    genre: "Literary fiction",
    rating: 5,
    finished: "2023-10-06"
  },
  {
    title: "The Heart of Betrayal",
    author: "Mary E. Pearson",
    genre: "Fantasy",
    rating: 4,
    finished: "2023-09-30"
  },
  {
    title: "The Handmaid’s Tale",
    author: "Margaret Atwood",
    genre: "Science fiction",
    rating: 5,
    finished: "2023-09-24"
  },
  {
    title: "The Kiss of Deception",
    author: "Mary E. Pearson",
    genre: "Fantasy",
    rating: 5,
    finished: "2023-09-06"
  },
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Literary fiction",
    rating: 5,
    finished: "2023-09-02"
  },
  {
    title: "Between Two Kims",
    author: "Nina Špitálníková",
    genre: "Non-fiction",
    rating: 4,
    finished: "2023-08-24"
  },
  {
    title: "The Spanish Love Deception",
    author: "Elena Armas",
    genre: "Romance",
    rating: 3,
    finished: "2023-08-16"
  },
  {
    title: "A Good Girl's Guide to Murder",
    author: "Holly Jackson",
    genre: "Mystery & thriller",
    rating: 4,
    finished: "2023-07-29"
  },
  {
    title: "Vow of Thieves",
    author: "Mary E. Pearson",
    genre: "Fantasy",
    rating: 5,
    finished: "2023-07-24"
  },
  {
    title: "A Court of Silver Flames",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    rating: 5,
    finished: "2021-03-25"
  },
  {
    title: "The Crown of Gilded Bones",
    author: "Jennifer L. Armentrout",
    genre: "Fantasy",
    rating: 2,
    finished: "2023-06-27"
  },
  {
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    genre: "Literary fiction",
    rating: 5,
    finished: "2023-06-27"
  },
  {
    title: "The Woman in the Mirror",
    author: "Éric-Emmanuel Schmitt",
    genre: "Literary fiction",
    rating: 2,
    finished: ""
  },
  {
    title: "The Love Hypothesis",
    author: "Ali Hazelwood",
    genre: "Romance",
    rating: 5,
    finished: "2023-05-04"
  },
  {
    title: "The Inheritance Games",
    author: "Jennifer Lynn Barnes",
    genre: "Mystery & thriller",
    rating: 3,
    finished: "2023-03-13"
  },
  {
    title: "Malibu Rising",
    author: "Taylor Jenkins Reid",
    genre: "Literary fiction",
    rating: 4,
    finished: "2023-02-28"
  },
  {
    title: "Kingdom of Ash",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    rating: 5,
    finished: "2023-02-19"
  },
  {
    title: "Empire of Storms",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    rating: 5,
    finished: "2016-02-19"
  },
  {
    title: "North Korean Diaries",
    author: "Nina Špitálníková",
    genre: "Non-fiction",
    rating: 5,
    finished: "2022-12-21"
  },
  {
    title: "House of Sky and Breath",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    rating: 5,
    finished: "2022-12-19"
  },
  {
    title: "A Court of Wings and Ruin",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Daisy Jones & The Six",
    author: "Taylor Jenkins Reid",
    genre: "Literary fiction",
    rating: 5,
    finished: "2022-10-30"
  },
  {
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Ugly Love",
    author: "Colleen Hoover",
    genre: "Romance",
    rating: 3,
    finished: "2021-08-25"
  },
  {
    title: "November 9",
    author: "Colleen Hoover",
    genre: "Romance",
    rating: 3,
    finished: "2022-01-28"
  },
  {
    title: "Verity",
    author: "Colleen Hoover",
    genre: "Mystery & thriller",
    rating: 5,
    finished: "2021-08-31"
  },
  {
    title: "It Ends with Us",
    author: "Colleen Hoover",
    genre: "Romance",
    rating: 4,
    finished: "2021-08-23"
  },
  {
    title: "Regretting You",
    author: "Colleen Hoover",
    genre: "Contemporary",
    rating: 4,
    finished: "2021-12-03"
  },
  {
    title: "Testimonies of Life in North Korea",
    author: "Nina Špitálníková",
    genre: "Non-fiction",
    rating: 5,
    finished: "2022-10-26"
  },
  {
    title: "Forced Bonds",
    author: "J. Bree",
    genre: "Romance",
    rating: 3,
    finished: "2022-10-26"
  },
  {
    title: "Ice Planet Barbarians",
    author: "Ruby Dixon",
    genre: "Romance",
    rating: 5,
    finished: "2022-02-15"
  },
  {
    title: "Your Dad Will Do",
    author: "Katee Robert",
    genre: "Romance",
    rating: 4,
    finished: "2021-07-01"
  },
  {
    title: "Dipped in Holly",
    author: "Dana Isaly",
    genre: "Romance",
    rating: 4,
    finished: "2021-11-01"
  },
  {
    title: "Blood Bonds",
    author: "J. Bree",
    genre: "Romance",
    rating: 5,
    finished: "2022-10-12"
  },
  {
    title: "Savage Bonds",
    author: "J. Bree",
    genre: "Romance",
    rating: 5,
    finished: "2022-10-09"
  },
  {
    title: "Broken Bonds",
    author: "J. Bree",
    genre: "Romance",
    rating: 5,
    finished: "2022-10-08"
  },
  {
    title: "Everything I Know About Love",
    author: "Dolly Alderton",
    genre: "Non-fiction",
    rating: 4,
    finished: "2022-09-28"
  },
  {
    title: "A Touch of Darkness",
    author: "Scarlett St. Clair",
    genre: "Fantasy",
    rating: 3,
    finished: "2022-07-28"
  },
  {
    title: "Heir of Fire",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    rating: 4,
    finished: "2022-03-23"
  },
  {
    title: "Queen of Shadows",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    rating: 5,
    finished: "2022-03-28"
  },
  {
    title: "Writers & Lovers",
    author: "Lily King",
    genre: "Literary fiction",
    rating: 5,
    finished: "2022-07-31"
  },
  {
    title: "King of Battle and Blood",
    author: "Scarlett St. Clair",
    genre: "Fantasy",
    rating: 4,
    finished: "2022-07-09"
  },
  {
    title: "You Don't Know My Name",
    author: "Kristen Orlando",
    genre: "Mystery & thriller",
    rating: 3,
    finished: ""
  },
  {
    title: "Conversations with Friends",
    author: "Sally Rooney",
    genre: "Literary fiction",
    rating: 5,
    finished: "2022-06-20"
  },
  {
    title: "Blink Once",
    author: "Cylin Busby",
    genre: "Horror",
    rating: 5,
    finished: ""
  },
  {
    title: "Every Day",
    author: "David Levithan",
    genre: "Fantasy",
    rating: 3,
    finished: ""
  },
  {
    title: "Unravel Me",
    author: "Tahereh Mafi",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Fifty Shades Freed",
    author: "E.L. James",
    genre: "Romance",
    rating: 3,
    finished: ""
  },
  {
    title: "Finale",
    author: "Becca Fitzpatrick",
    genre: "Fantasy",
    rating: 1,
    finished: ""
  },
  {
    title: "Fallen in Love",
    author: "Lauren Kate",
    genre: "Fantasy",
    rating: 1,
    finished: ""
  },
  {
    title: "Eleanor & Park",
    author: "Rainbow Rowell",
    genre: "Romance",
    rating: 2,
    finished: ""
  },
  {
    title: "Code Name Verity",
    author: "Elizabeth Wein",
    genre: "Historical fiction",
    rating: 2,
    finished: ""
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    genre: "Contemporary",
    rating: 5,
    finished: ""
  },
  {
    title: "Fifty Shades Darker",
    author: "E.L. James",
    genre: "Romance",
    rating: 3,
    finished: ""
  },
  {
    title: "Breathe",
    author: "Sarah Crossan",
    genre: "Science fiction",
    rating: 4,
    finished: ""
  },
  {
    title: "The Fire",
    author: "James Patterson",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "King Lávra",
    author: "Karel Havlíček Borovský",
    genre: "Classics",
    rating: 2,
    finished: ""
  },
  {
    title: "The Last Dragonslayer",
    author: "Jasper Fforde",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    genre: "Mystery & thriller",
    rating: 5,
    finished: ""
  },
  {
    title: "Foreign Exchange",
    author: "Sophia Lowell",
    genre: "Contemporary",
    rating: 1,
    finished: ""
  },
  {
    title: "The Beginning",
    author: "Sophia Lowell",
    genre: "Contemporary",
    rating: 1,
    finished: ""
  },
  {
    title: "Trapped",
    author: "Michael Northrop",
    genre: "Contemporary",
    rating: 1,
    finished: ""
  },
  {
    title: "The Lying Game",
    author: "Sara Shepard",
    genre: "Mystery & thriller",
    rating: 2,
    finished: ""
  },
  {
    title: "Careful What You Wish For",
    author: "Shani Petroff",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Torment",
    author: "Lauren Kate",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Illusions",
    author: "Aprilynne Pike",
    genre: "Fantasy",
    rating: 3,
    finished: ""
  },
  {
    title: "Spells",
    author: "Aprilynne Pike",
    genre: "Fantasy",
    rating: 3,
    finished: ""
  },
  {
    title: "Summer",
    author: "Eden Maguire",
    genre: "Fantasy",
    rating: 3,
    finished: ""
  },
  {
    title: "The White Disease",
    author: "Karel Čapek",
    genre: "Classics",
    rating: 1,
    finished: ""
  },
  {
    title: "Crescendo",
    author: "Becca Fitzpatrick",
    genre: "Fantasy",
    rating: 1,
    finished: ""
  },
  {
    title: "The Good, the Bad, and the Ugly Dress",
    author: "Shani Petroff",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Catching Fire",
    author: "Suzanne Collins",
    genre: "Science fiction",
    rating: 5,
    finished: ""
  },
  {
    title: "Hex Hall",
    author: "Rachel Hawkins",
    genre: "Fantasy",
    rating: 3,
    finished: ""
  },
  {
    title: "Homecoming",
    author: "Tonya Hurley",
    genre: "Fantasy",
    rating: 4,
    finished: ""
  },
  {
    title: "Summer at Camp",
    author: "Jen Calonita",
    genre: "Contemporary",
    rating: 2,
    finished: ""
  },
  {
    title: "Wings",
    author: "Aprilynne Pike",
    genre: "Fantasy",
    rating: 4,
    finished: ""
  },
  {
    title: "L.A. Candy",
    author: "Lauren Conrad",
    genre: "Contemporary",
    rating: 2,
    finished: ""
  },
  {
    title: "Twilight",
    author: "Stephenie Meyer",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Oedipus Rex",
    author: "Sophocles",
    genre: "Classics",
    rating: 1,
    finished: ""
  },
  {
    title: "A Bouquet",
    author: "Karel Jaromír Erben",
    genre: "Classics",
    rating: 2,
    finished: ""
  },
  {
    title: "Killer",
    author: "Sara Shepard",
    genre: "Mystery & thriller",
    rating: 3,
    finished: ""
  },
  {
    title: "Heartless",
    author: "Sara Shepard",
    genre: "Mystery & thriller",
    rating: 3,
    finished: ""
  },
  {
    title: "R.U.R.",
    author: "Karel Čapek",
    genre: "Classics",
    rating: 3,
    finished: ""
  },
  {
    title: "Sense and Sensibility",
    author: "Jane Austen",
    genre: "Classics",
    rating: 3,
    finished: ""
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Science fiction",
    rating: 5,
    finished: ""
  },
  {
    title: "The Awakening",
    author: "L.J. Smith",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Closely Watched Trains",
    author: "Bohumil Hrabal",
    genre: "Classics",
    rating: 3,
    finished: ""
  },
  {
    title: "Carrie",
    author: "Stephen King",
    genre: "Horror",
    rating: 3,
    finished: ""
  },
  {
    title: "The Grandmother",
    author: "Božena Němcová",
    genre: "Classics",
    rating: 1,
    finished: ""
  },
  {
    title: "Lolita",
    author: "Vladimir Nabokov",
    genre: "Classics",
    rating: 3,
    finished: ""
  },
  {
    title: "The Power",
    author: "L.J. Smith",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "How to Be a Little Sod",
    author: "Simon Brett",
    genre: "Humour",
    rating: 2,
    finished: ""
  },
  {
    title: "Pierre and Luce",
    author: "Romain Rolland",
    genre: "Classics",
    rating: 1,
    finished: ""
  },
  {
    title: "Dark Reunion",
    author: "L.J. Smith",
    genre: "Fantasy",
    rating: 1,
    finished: ""
  },
  {
    title: "Secret Vampire",
    author: "L.J. Smith",
    genre: "Fantasy",
    rating: 1,
    finished: ""
  },
  {
    title: "The Struggle",
    author: "L.J. Smith",
    genre: "Fantasy",
    rating: 1,
    finished: ""
  },
  {
    title: "Elsewhere",
    author: "Gabrielle Zevin",
    genre: "Fantasy",
    rating: 1,
    finished: ""
  },
  {
    title: "Vampire Academy",
    author: "Richelle Mead",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Incarceron",
    author: "Catherine Fisher",
    genre: "Fantasy",
    rating: 1,
    finished: ""
  },
  {
    title: "Daughters of Darkness",
    author: "L.J. Smith",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Insurgent",
    author: "Veronica Roth",
    genre: "Science fiction",
    rating: 4,
    finished: ""
  },
  {
    title: "Looking for Alaska",
    author: "John Green",
    genre: "Contemporary",
    rating: 5,
    finished: ""
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classics",
    rating: 3,
    finished: ""
  },
  {
    title: "The Hostage",
    author: "Andrew Hall",
    genre: "Mystery & thriller",
    rating: 2,
    finished: ""
  },
  {
    title: "Black-Eyed Girl",
    author: "Anna Musilová",
    genre: "Literary fiction",
    rating: 2,
    finished: ""
  },
  {
    title: "Red, White & Royal Blue",
    author: "Casey McQuiston",
    genre: "Romance",
    rating: 5,
    finished: "2021-09-28"
  },
  {
    title: "All Your Perfects",
    author: "Colleen Hoover",
    genre: "Romance",
    rating: 4,
    finished: "2021-10-06"
  },
  {
    title: "Restore Me",
    author: "Tahereh Mafi",
    genre: "Fantasy",
    rating: 3,
    finished: "2022-01-10"
  },
  {
    title: "Furyborn",
    author: "Claire Legrand",
    genre: "Fantasy",
    rating: 5,
    finished: "2022-02-27"
  },
  {
    title: "Tower of Dawn",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Just Dream",
    author: "Kerstin Gier",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Tereza",
    author: "Ladislav Špaček",
    genre: "Contemporary",
    rating: 2,
    finished: ""
  },
  {
    title: "Khomeini, Sade and Me",
    author: "Abnousse Shalmani",
    genre: "Non-fiction",
    rating: 5,
    finished: ""
  },
  {
    title: "Ignite Me",
    author: "Tahereh Mafi",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Big Little Lies",
    author: "Liane Moriarty",
    genre: "Mystery & thriller",
    rating: 4,
    finished: ""
  },
  {
    title: "The Teenage Brain",
    author: "Frances E. Jensen",
    genre: "Non-fiction",
    rating: 4,
    finished: ""
  },
  {
    title: "Dream On",
    author: "Kerstin Gier",
    genre: "Fantasy",
    rating: 4,
    finished: ""
  },
  {
    title: "The Assassin's Blade",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "The Fire Sermon",
    author: "Francesca Haig",
    genre: "Science fiction",
    rating: 4,
    finished: ""
  },
  {
    title: "My Not So Super Sweet Life",
    author: "Rachel Harris",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Autumn Rose",
    author: "Abigail Gibbs",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "The One",
    author: "Kiera Cass",
    genre: "Science fiction",
    rating: 3,
    finished: ""
  },
  {
    title: "Crown of Midnight",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    rating: 4,
    finished: ""
  },
  {
    title: "Red Sparrow",
    author: "Jason Matthews",
    genre: "Mystery & thriller",
    rating: 3,
    finished: ""
  },
  {
    title: "Decompression",
    author: "Juli Zeh",
    genre: "Literary fiction",
    rating: 1,
    finished: ""
  },
  {
    title: "This Song Will Save Your Life",
    author: "Leila Sales",
    genre: "Contemporary",
    rating: 2,
    finished: ""
  },
  {
    title: "The Elite",
    author: "Kiera Cass",
    genre: "Science fiction",
    rating: 3,
    finished: ""
  },
  {
    title: "The Key",
    author: "Mats Strandberg",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "The Unbound",
    author: "Victoria Schwab",
    genre: "Fantasy",
    rating: 1,
    finished: ""
  },
  {
    title: "The Bone Season",
    author: "Samantha Shannon",
    genre: "Fantasy",
    rating: 3,
    finished: ""
  },
  {
    title: "Origin",
    author: "Jessica Khoury",
    genre: "Science fiction",
    rating: 2,
    finished: ""
  },
  {
    title: "Fire",
    author: "Mats Strandberg",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Blues for a Crazy Girl",
    author: "Václav Hrabě",
    genre: "Poetry",
    rating: 3,
    finished: ""
  },
  {
    title: "The Circle",
    author: "Mats Strandberg",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Fifty Shades of Grey",
    author: "E.L. James",
    genre: "Romance",
    rating: 4,
    finished: ""
  },
  {
    title: "Cinder",
    author: "Marissa Meyer",
    genre: "Science fiction",
    rating: 3,
    finished: ""
  },
  {
    title: "Allegiant",
    author: "Veronica Roth",
    genre: "Science fiction",
    rating: 4,
    finished: ""
  },
  {
    title: "The Selection",
    author: "Kiera Cass",
    genre: "Science fiction",
    rating: 4,
    finished: ""
  },
  {
    title: "Shatter Me",
    author: "Tahereh Mafi",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Kiss of Immortality",
    author: "Alice Moon",
    genre: "Fantasy",
    rating: 1,
    finished: ""
  },
  {
    title: "In the Castle and Below It, and Other Stories",
    author: "Božena Němcová",
    genre: "Classics",
    rating: 1,
    finished: ""
  },
  {
    title: "Spell Bound",
    author: "Rachel Hawkins",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "The Baptism of Saint Vladimir",
    author: "Karel Havlíček Borovský",
    genre: "Classics",
    rating: 2,
    finished: ""
  },
  {
    title: "Blood Red Road",
    author: "Moira Young",
    genre: "Science fiction",
    rating: 1,
    finished: ""
  },
  {
    title: "The Watchtower",
    author: "Lee Carroll",
    genre: "Fantasy",
    rating: 1,
    finished: ""
  },
  {
    title: "Summer Break",
    author: "Sophia Lowell",
    genre: "Contemporary",
    rating: 1,
    finished: ""
  },
  {
    title: "The Purple Ribbon",
    author: "Kathleen Weise",
    genre: "Historical fiction",
    rating: 1,
    finished: ""
  },
  {
    title: "Silence",
    author: "Becca Fitzpatrick",
    genre: "Fantasy",
    rating: 1,
    finished: ""
  },
  {
    title: "Legend",
    author: "Marie Lu",
    genre: "Science fiction",
    rating: 1,
    finished: ""
  },
  {
    title: "Rapture",
    author: "Lauren Kate",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Unhooking the Moon",
    author: "Gregory Hughes",
    genre: "Contemporary",
    rating: 1,
    finished: ""
  },
  {
    title: "The Bagpiper of Strakonice",
    author: "Josef Kajetán Tyl",
    genre: "Classics",
    rating: 1,
    finished: ""
  },
  {
    title: "Abandon",
    author: "Meg Cabot",
    genre: "Fantasy",
    rating: 1,
    finished: ""
  },
  {
    title: "Throne of Glass",
    author: "Sarah J. Maas",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Shit's on Fire",
    author: "Petr Šabach",
    genre: "Literary fiction",
    rating: 3,
    finished: ""
  },
  {
    title: "Phoenix",
    author: "Eden Maguire",
    genre: "Fantasy",
    rating: 4,
    finished: ""
  },
  {
    title: "The Death Cure",
    author: "James Dashner",
    genre: "Science fiction",
    rating: 4,
    finished: ""
  },
  {
    title: "Demonglass",
    author: "Rachel Hawkins",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "The Fallen and Leviathan",
    author: "Thomas E. Sniegoski",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Passion",
    author: "Lauren Kate",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Beautiful Darkness",
    author: "Kami Garcia",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Where She Went",
    author: "Gayle Forman",
    genre: "Contemporary",
    rating: 3,
    finished: ""
  },
  {
    title: "The Gift",
    author: "James Patterson",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Emerald Green",
    author: "Kerstin Gier",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Matched",
    author: "Ally Condie",
    genre: "Science fiction",
    rating: 4,
    finished: ""
  },
  {
    title: "My Special Powers",
    author: "Mary K. Pershall",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Fallen",
    author: "Lauren Kate",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Before I Fall",
    author: "Lauren Oliver",
    genre: "Contemporary",
    rating: 5,
    finished: ""
  },
  {
    title: "What Alice Forgot",
    author: "Liane Moriarty",
    genre: "Literary fiction",
    rating: 2,
    finished: ""
  },
  {
    title: "Shadow Souls",
    author: "L.J. Smith",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Arizona",
    author: "Eden Maguire",
    genre: "Fantasy",
    rating: 3,
    finished: ""
  },
  {
    title: "Witch & Wizard",
    author: "James Patterson",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "The Scorch Trials",
    author: "James Dashner",
    genre: "Science fiction",
    rating: 3,
    finished: ""
  },
  {
    title: "Hush, Hush",
    author: "Becca Fitzpatrick",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Ruby Red",
    author: "Kerstin Gier",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Daddy's Little Angel",
    author: "Shani Petroff",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Beautiful Creatures",
    author: "Kami Garcia",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "The Maze Runner",
    author: "James Dashner",
    genre: "Science fiction",
    rating: 3,
    finished: ""
  },
  {
    title: "Jonas",
    author: "Eden Maguire",
    genre: "Fantasy",
    rating: 3,
    finished: ""
  },
  {
    title: "Shiver",
    author: "Maggie Stiefvater",
    genre: "Fantasy",
    rating: 1,
    finished: ""
  },
  {
    title: "The Silent Barricade and Other Stories",
    author: "Jan Drda",
    genre: "Classics",
    rating: 2,
    finished: ""
  },
  {
    title: "Sapphique",
    author: "Catherine Fisher",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "The Sweetness at the Bottom of the Pie",
    author: "Alan Bradley",
    genre: "Mystery & thriller",
    rating: 2,
    finished: ""
  },
  {
    title: "The Unbearable Lightness of Being",
    author: "Milan Kundera",
    genre: "Classics",
    rating: 2,
    finished: ""
  },
  {
    title: "Sophie's World",
    author: "Jostein Gaarder",
    genre: "Literary fiction",
    rating: 2,
    finished: ""
  },
  {
    title: "If I Stay",
    author: "Gayle Forman",
    genre: "Contemporary",
    rating: 4,
    finished: ""
  },
  {
    title: "Northanger Abbey",
    author: "Jane Austen",
    genre: "Classics",
    rating: 2,
    finished: ""
  },
  {
    title: "Nightfall",
    author: "L.J. Smith",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Wicked",
    author: "Sara Shepard",
    genre: "Mystery & thriller",
    rating: 2,
    finished: ""
  },
  {
    title: "Capricious Summer",
    author: "Vladislav Vančura",
    genre: "Classics",
    rating: 2,
    finished: ""
  },
  {
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    genre: "Non-fiction",
    rating: 2,
    finished: ""
  },
  {
    title: "Paper Towns",
    author: "John Green",
    genre: "Contemporary",
    rating: 3,
    finished: ""
  },
  {
    title: "Emma",
    author: "Jane Austen",
    genre: "Classics",
    rating: 2,
    finished: ""
  },
  {
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    genre: "Classics",
    rating: 2,
    finished: ""
  },
  {
    title: "Eclipse",
    author: "Stephenie Meyer",
    genre: "Fantasy",
    rating: 3,
    finished: ""
  },
  {
    title: "All Quiet on the Western Front",
    author: "Erich Maria Remarque",
    genre: "Classics",
    rating: 2,
    finished: ""
  },
  {
    title: "Little Sod's Next Step",
    author: "Simon Brett",
    genre: "Humour",
    rating: 2,
    finished: ""
  },
  {
    title: "Persuasion",
    author: "Jane Austen",
    genre: "Classics",
    rating: 2,
    finished: ""
  },
  {
    title: "Sucks to Be Me",
    author: "Kimberly Pauley",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Proud Budžes",
    author: "Irena Dousková",
    genre: "Literary fiction",
    rating: 2,
    finished: ""
  },
  {
    title: "The Laughing Corpse",
    author: "Laurell K. Hamilton",
    genre: "Fantasy",
    rating: 2,
    finished: ""
  },
  {
    title: "Gulliver’s Travels",
    author: "Jonathan Swift",
    genre: "Classics",
    rating: 2,
    finished: ""
  },
  {
    title: "The Metamorphosis",
    author: "Franz Kafka",
    genre: "Classics",
    rating: 4,
    finished: ""
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    genre: "Classics",
    rating: 3,
    finished: ""
  },
  {
    title: "Flawless",
    author: "Sara Shepard",
    genre: "Mystery & thriller",
    rating: 3,
    finished: ""
  },
  {
    title: "Pretty Little Liars",
    author: "Sara Shepard",
    genre: "Mystery & thriller",
    rating: 3,
    finished: ""
  },
  {
    title: "Perfect",
    author: "Sara Shepard",
    genre: "Mystery & thriller",
    rating: 3,
    finished: ""
  },
  {
    title: "Unbelievable",
    author: "Sara Shepard",
    genre: "Mystery & thriller",
    rating: 3,
    finished: ""
  },
  {
    title: "The Fury",
    author: "L.J. Smith",
    genre: "Fantasy",
    rating: 3,
    finished: ""
  },
  {
    title: "Nick & Norah's Infinite Playlist",
    author: "Rachel Cohn",
    genre: "Romance",
    rating: 3,
    finished: ""
  },
  {
    title: "The Initiation",
    author: "L.J. Smith",
    genre: "Fantasy",
    rating: 3,
    finished: ""
  },
  {
    title: "The Cremator",
    author: "Ladislav Fuks",
    genre: "Classics",
    rating: 3,
    finished: ""
  },
  {
    title: "May",
    author: "Karel Hynek Mácha",
    genre: "Poetry",
    rating: 3,
    finished: ""
  },
  {
    title: "Book of Shadows",
    author: "Cate Tiernan",
    genre: "Fantasy",
    rating: 3,
    finished: ""
  },
  {
    title: "The Prom Queen",
    author: "R.L. Stine",
    genre: "Horror",
    rating: 3,
    finished: ""
  },
  {
    title: "The Stranger in the Mirror",
    author: "Lynn Beach",
    genre: "Horror",
    rating: 3,
    finished: ""
  },
  {
    title: "The Captive",
    author: "L.J. Smith",
    genre: "Fantasy",
    rating: 3,
    finished: ""
  },
  {
    title: "An Abundance of Katherines",
    author: "John Green",
    genre: "Contemporary",
    rating: 3,
    finished: ""
  },
  {
    title: "Of Mice and Men",
    author: "John Steinbeck",
    genre: "Classics",
    rating: 3,
    finished: ""
  },
  {
    title: "Tales from Two Pockets",
    author: "Karel Čapek",
    genre: "Classics",
    rating: 3,
    finished: ""
  },
  {
    title: "Ice Planet Honeymoon: Vektal and Georgie",
    author: "Ruby Dixon",
    genre: "Romance",
    rating: 2,
    finished: "2022-02-16"
  },
  {
    title: "From Blood and Ash",
    author: "Jennifer L. Armentrout",
    genre: "Fantasy",
    rating: 3,
    finished: "2021-12-31"
  },
  {
    title: "A Kingdom of Flesh and Fire",
    author: "Jennifer L. Armentrout",
    genre: "Fantasy",
    rating: 4,
    finished: "2022-04-11"
  },
  {
    title: "Defy Me",
    author: "Tahereh Mafi",
    genre: "Fantasy",
    rating: 3,
    finished: "2022-01-26"
  },
  {
    title: "American Queen",
    author: "Sierra Simone",
    genre: "Romance",
    rating: 4,
    finished: "2022-01-20"
  },
  {
    title: "The Hating Game",
    author: "Sally Thorne",
    genre: "Romance",
    rating: 5,
    finished: "2022-01-06"
  },
  {
    title: "Normal People",
    author: "Sally Rooney",
    genre: "Literary fiction",
    rating: 4,
    finished: "2022-01-01"
  },
  {
    title: "The Unbecoming of Mara Dyer",
    author: "Michelle Hodkin",
    genre: "Horror",
    rating: 4,
    finished: "2021-08-23"
  },
  {
    title: "Midnight Sun",
    author: "Stephenie Meyer",
    genre: "Fantasy",
    rating: 2,
    finished: "2021-08-15"
  },
  {
    title: "New Moon",
    author: "Stephenie Meyer",
    genre: "Fantasy",
    rating: 4,
    finished: ""
  },
  {
    title: "Breaking Dawn",
    author: "Stephenie Meyer",
    genre: "Fantasy",
    rating: 3,
    finished: ""
  },
  {
    title: "The Queen of Nothing",
    author: "Holly Black",
    genre: "Fantasy",
    rating: 4,
    finished: "2021-04-08"
  },
  {
    title: "Serpent & Dove",
    author: "Shelby Mahurin",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "After",
    author: "Anna Todd",
    genre: "Romance",
    rating: 3,
    finished: ""
  },
  {
    title: "The Queen of the Tearling",
    author: "Erika Johansen",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Prodigy",
    author: "Marie Lu",
    genre: "Science fiction",
    rating: 5,
    finished: ""
  },
  {
    title: "Splinter Heart",
    author: "Bettina Belitz",
    genre: "Fantasy",
    rating: 3,
    finished: ""
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Classics",
    rating: 5,
    finished: ""
  },
  {
    title: "A Discovery of Witches",
    author: "Deborah Harkness",
    genre: "Fantasy",
    rating: 3,
    finished: ""
  },
  {
    title: "I Know How the Air Tastes",
    author: "Maria Hirse",
    genre: "Contemporary",
    rating: 5,
    finished: ""
  },
  {
    title: "Divergent",
    author: "Veronica Roth",
    genre: "Science fiction",
    rating: 5,
    finished: ""
  },
  {
    title: "She Is Not Invisible",
    author: "Marcus Sedgwick",
    genre: "Mystery & thriller",
    rating: 5,
    finished: ""
  },
  {
    title: "Finding Sky",
    author: "Joss Stirling",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Red Queen",
    author: "Victoria Aveyard",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Zoo Station: The Story of Christiane F.",
    author: "Christiane V. Felscherinow",
    genre: "Non-fiction",
    rating: 5,
    finished: ""
  },
  {
    title: "A Trifle: A Romance from the Age of Genetics",
    author: "Markéta Baňková",
    genre: "Science fiction",
    rating: 5,
    finished: ""
  },
  {
    title: "Reached",
    author: "Ally Condie",
    genre: "Science fiction",
    rating: 3,
    finished: ""
  },
  {
    title: "Crossed",
    author: "Ally Condie",
    genre: "Science fiction",
    rating: 3,
    finished: ""
  },
  {
    title: "The Magicians",
    author: "Lev Grossman",
    genre: "Fantasy",
    rating: 4,
    finished: ""
  },
  {
    title: "I Am Malala",
    author: "Malala Yousafzai",
    genre: "Non-fiction",
    rating: 5,
    finished: ""
  },
  {
    title: "Apple Tree Yard",
    author: "Louise Doughty",
    genre: "Mystery & thriller",
    rating: 5,
    finished: ""
  },
  {
    title: "Never Knowing",
    author: "Chevy Stevens",
    genre: "Mystery & thriller",
    rating: 4,
    finished: ""
  },
  {
    title: "Dream a Little Dream",
    author: "Kerstin Gier",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Sapphire Blue",
    author: "Kerstin Gier",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "The Mime Order",
    author: "Samantha Shannon",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "Colorless Tsukuru Tazaki and His Years of Pilgrimage",
    author: "Haruki Murakami",
    genre: "Literary fiction",
    rating: 5,
    finished: ""
  },
  {
    title: "Six of Crows",
    author: "Leigh Bardugo",
    genre: "Fantasy",
    rating: 3,
    finished: ""
  },
  {
    title: "The Last Time We Say Goodbye",
    author: "Cynthia Hand",
    genre: "Contemporary",
    rating: 5,
    finished: ""
  },
  {
    title: "Panic",
    author: "Lauren Oliver",
    genre: "Contemporary",
    rating: 5,
    finished: ""
  },
  {
    title: "Sharp Objects",
    author: "Gillian Flynn",
    genre: "Mystery & thriller",
    rating: 5,
    finished: ""
  },
  {
    title: "Behind Closed Doors",
    author: "B.A. Paris",
    genre: "Mystery & thriller",
    rating: 5,
    finished: ""
  },
  {
    title: "The Couple Next Door",
    author: "Shari Lapena",
    genre: "Mystery & thriller",
    rating: 3,
    finished: ""
  },
  {
    title: "Scythe",
    author: "Neal Shusterman",
    genre: "Science fiction",
    rating: 5,
    finished: ""
  },
  {
    title: "The Wicked King",
    author: "Holly Black",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  },
  {
    title: "The Cruel Prince",
    author: "Holly Black",
    genre: "Fantasy",
    rating: 5,
    finished: ""
  }
];
