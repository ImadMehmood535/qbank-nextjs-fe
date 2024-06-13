const typeOfQuestions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Previously In Correct",
    value: "incorrect",
  },
  {
    label: "Never Attempted",
    value: "unused",
  },
  {
    label: "Unused and Incorrect",
    value: "unUsedAndIncorrect",
  },
];
const examMode = [
  {
    label: "Time Based",
    value: "timeBased",
  },
  {
    label: "Explanation Based",
    value: "explanationBased",
  },
];
const difficultyMode = [
  {
    label: "Easy",
    value: "easy",
  },
  {
    label: "Moderate",
    value: "moderate",
  },
  {
    label: "Difficult",
    value: "difficult",
  },
];

const questionsPerExam = [
  {
    label: "10",
    value: 10,
  },
  {
    label: "20",
    value: 20,
  },
  {
    label: "30",
    value: 30,
  },
  {
    label: "40",
    value: 40,
  },
  {
    label: "50",
    value: 50,
  },
];

export { typeOfQuestions, examMode, difficultyMode, questionsPerExam };
