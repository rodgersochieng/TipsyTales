// // export const mockPosts = [
// //     { 
// //       id: 1, 
// //       title: 'My Crazy Hangover Story', 
// //       content: 'I woke up in a different country!', 
// //       author: 'Alice', 
// //       likes: 0, 
// //       likedBy: [],
// //       comments: [
// //         { 
// //           id: 101, 
// //           author: 'Bob', 
// //           text: 'That sounds wild!', 
// //           timestamp: '2 hours ago',
// //           replies: [
// //             { id: 1001, author: 'Alice', text: 'It was absolutely insane!', timestamp: '1 hour ago' }
// //           ]
// //         }
// //       ] 
// //     },
// //     { 
// //       id: 2, 
// //       title: 'Epic Party Night', 
// //       content: 'We danced until sunrise.', 
// //       author: 'Bob', 
// //       likes: 0, 
// //       likedBy: [],
// //       comments: [] 
// //     },
// //   ];




// // File: src/data/mockData.js
// export const mockPosts = [
//   { 
//     id: 1, 
//     title: "My Crazy Hangover Story from Vegas", 
//     content: "Last weekend in Vegas, I had WAY too many drinks at a bachelor party. I woke up in my hotel room to find a live chicken walking around, a tattoo I don't remember getting, and somehow I was wearing a full Elvis costume. Still trying to piece together what happened between midnight and 10am...",
//     author: "Mike", 
//     likes: 24, 
//     likedBy: ["user2", "user5", "currentUser"],
//     comments: [
//       { 
//         id: 101, 
//         author: "Sarah", 
//         text: "Classic Vegas story! Did you at least win any money?", 
//         timestamp: "2 hours ago",
//         replies: [
//           { id: 1001, author: "Mike", text: "Lost $200, but considering what could have happened, I got off easy!", timestamp: "1 hour ago" },
//           { id: 1002, author: "Taylor", text: "The chicken tax alone would have been worse 😂", timestamp: "45 minutes ago" }
//         ]
//       },
//       {
//         id: 102,
//         author: "Vegas Veteran",
//         text: "That's why they say what happens in Vegas stays in Vegas... except for tattoos!",
//         timestamp: "30 minutes ago",
//         replies: []
//       }
//     ]
//   },
//   { 
//     id: 2, 
//     title: "Epic Beach Party Night in Cancun", 
//     content: "Spring break in Cancun was supposed to be relaxing... until our beach party turned into a 12-hour dance marathon. We danced until sunrise, then jumped into the ocean at dawn. When we finally made it back to our hotel, my friend realized she had lost her phone, wallet, AND shoes. Somehow I still had all my stuff despite being more drunk!",
//     author: "Jessica", 
//     likes: 43, 
//     likedBy: ["user1", "user7"],
//     comments: [
//       {
//         id: 201,
//         author: "BeachLover",
//         text: "Cancun spring break is legendary! Was this at Coco Bongo?",
//         timestamp: "1 day ago",
//         replies: [
//           { id: 2001, author: "Jessica", text: "Yes! That place was INSANE. 10/10 would recommend.", timestamp: "23 hours ago" }
//         ]
//       }
//     ]
//   },
//   { 
//     id: 3,
//     title: "Wedding Reception Disaster",
//     content: "Was at my cousin's wedding last month. Open bar was a mistake! I got so drunk I tried to give a surprise speech, knocked over the 5-tier wedding cake, and then passed out in the photo booth. Woke up the next morning to 50+ texts and my entire family giving me the silent treatment. Still apologizing to this day.",
//     author: "Disaster Dave",
//     likes: 67,
//     likedBy: [],
//     comments: [
//       {
//         id: 301,
//         author: "WeddingPlanner",
//         text: "This is why we always recommend drink limits for certain guests... 😅",
//         timestamp: "5 days ago",
//         replies: []
//       },
//       {
//         id: 302,
//         author: "CakeLover",
//         text: "THE CAKE? Oh my god, that must have cost a fortune...",
//         timestamp: "4 days ago",
//         replies: [
//           { id: 3001, author: "Disaster Dave", text: "I'm paying it off in monthly installments to my cousin now.", timestamp: "4 days ago" },
//           { id: 3002, author: "CakeLover", text: "At least you owned up to it! Good on you.", timestamp: "3 days ago" }
//         ]
//       }
//     ]
//   }
// ];


export const mockPosts = [
  { 
    id: 1, 
    title: "My Crazy Hangover Story from Vegas", 
    content: "Last weekend in Vegas, I had WAY too many drinks at a bachelor party. I woke up in my hotel room to find a live chicken walking around, a tattoo I don't remember getting, and somehow I was wearing a full Elvis costume. Still trying to piece together what happened between midnight and 10am...",
    author: "Mike", 
    likes: 24, 
    likedBy: ["user2", "user5", "currentUser"],
    comments: [
      { 
        id: 101, 
        author: "Sarah", 
        text: "Classic Vegas story! Did you at least win any money?", 
        timestamp: "2 hours ago",
        replies: [
          { id: 1001, author: "Mike", text: "Lost $200, but considering what could have happened, I got off easy!", timestamp: "1 hour ago" },
          { id: 1002, author: "Taylor", text: "The chicken tax alone would have been worse 😂", timestamp: "45 minutes ago" }
        ]
      },
      {
        id: 102,
        author: "Vegas Veteran",
        text: "That's why they say what happens in Vegas stays in Vegas... except for tattoos!",
        timestamp: "30 minutes ago",
        replies: []
      }
    ]
  },
  { 
    id: 4,
    title: "Matatu Madness in Nairobi",
    content: "I took a matatu from town thinking it was a normal ride home. The driver decided he was in a Fast & Furious movie, overtaking everyone, blasting music at full volume, and even ignoring red lights. At one point, the conductor started dancing ON the moving matatu! I held on for dear life, praying I’d make it home in one piece.",
    author: "Brian",
    likes: 55,
    likedBy: ["user3", "user6", "currentUser"],
    comments: [
      {
        id: 401,
        author: "NairobiSurvivor",
        text: "Haha, classic Nairobi matatu experience! Did you at least enjoy the free entertainment?",
        timestamp: "2 hours ago",
        replies: [
          { id: 4001, author: "Brian", text: "I won’t lie, the vibe was crazy! But my heart is still recovering.", timestamp: "1 hour ago" }
        ]
      }
    ]
  },
  { 
    id: 5,
    title: "Lost in Nairobi CBD",
    content: "I was meeting a friend for lunch and thought I knew my way around. Turns out, I was completely lost in the maze that is Nairobi CBD. Every street looked the same, and when I asked for directions, people gave me conflicting answers. I ended up walking in circles for an hour before finally finding my way.",
    author: "Anita",
    likes: 32,
    likedBy: ["user8", "user9"],
    comments: [
      {
        id: 501,
        author: "CityExplorer",
        text: "Nairobi CBD is a puzzle! Next time, use Google Maps or just call your friend 😂",
        timestamp: "3 days ago",
        replies: [
          { id: 5001, author: "Anita", text: "I was too embarrassed to admit I was lost! Never again.", timestamp: "2 days ago" }
        ]
      }
    ]
  }
];
