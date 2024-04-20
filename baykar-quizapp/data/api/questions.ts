import { load } from ".";

export const getQuestions = () => load<Question[]>(
  `https://jsonplaceholder.typicode.com/posts`,
  "GET",
  undefined,
);
