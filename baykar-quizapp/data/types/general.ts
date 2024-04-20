interface Question {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface SelectedAnswer {
  questionIndex: number;
  answer: string;
}