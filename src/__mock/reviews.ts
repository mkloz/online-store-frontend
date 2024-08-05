import { IReview } from "../types/review";

export const reviews: IReview[] = [
  {
    id: 1,
    text: "Very good product! Et irure minim nisi do pariatur nulla consectetur voluptate consequat mollit id eiusmod aute qui. Aute ullamco est exercitation est irure eiusmod anim incididunt elit cillum esse ipsum. Dolore ut veniam ut consequat aute nisi qui. Elit do aliqua deserunt minim quis velit qui do ex ipsum ea labore id commodo. Eu deserunt duis in tempor pariatur nostrud voluptate enim dolor. Duis magna officia officia aute do laboris. Laboris do incididunt est commodo elit reprehenderit minim commodo culpa.",
    stars: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
    author: {
      id: 1,
      name: "John Doe",
      email: "",
      phoneNumber: "",
      role: "USER",
      isEmailConfirmed: true,
      provider: "EMAIL",
    },
  },
  {
    id: 2,
    text: "Good product!",
    stars: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
    author: {
      id: 1,
      name: "John Doe",
      email: "",
      phoneNumber: "",
      role: "USER",
      isEmailConfirmed: true,
      provider: "EMAIL",
    },
  },
  {
    id: 3,
    text: "Normal product!",
    stars: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
    author: {
      id: 1,
      name: "John Doe",
      email: "",
      phoneNumber: "",
      role: "USER",
      isEmailConfirmed: true,
      provider: "EMAIL",
    },
  },
  {
    id: 4,
    text: "Bad product!",
    stars: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
    author: {
      id: 1,
      name: "John Doe",
      email: "",
      phoneNumber: "",
      role: "USER",
      isEmailConfirmed: true,
      provider: "EMAIL",
    },
  },
];
