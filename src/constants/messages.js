export const MESSAGES = [
  {
    id: 1,
    discussionId: 1,
    messages: [
      {
        id: 1,
        value: "Hey, how's it going?",
        date: new Date("2024-02-26T10:00:00"),
        author: { id: 3, name: "Michael Johnson" },
      },
      {
        id: 2,
        value: "Doing well, thanks!",
        date: new Date("2024-02-26T10:05:00"),
        author: { id: 5, name: "David Lee" },
      },
      {
        id: 3,
        value: "What about you?",
        date: new Date("2024-02-26T10:10:00"),
        author: { id: 3, name: "Michael Johnson" },
      },
      // Add more messages for discussion 1 if needed
    ],
  },
  {
    id: 2,
    discussionId: 2,
    messages: [
      {
        id: 1,
        value: "Did you watch the game last night?",
        date: new Date("2024-02-26T15:00:00"),
        author: { id: 7, name: "Daniel Martinez" },
      },
      {
        id: 2,
        value: "Yeah, it was intense!",
        date: new Date("2024-02-26T15:10:00"),
        author: { id: 9, name: "Christopher Anderson" },
      },
      {
        id: 3,
        value: "I missed it, who won?",
        date: new Date("2024-02-26T15:20:00"),
        author: { id: 7, name: "Daniel Martinez" },
      },
    ],
  },
];
