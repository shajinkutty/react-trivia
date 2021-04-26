import { createContext, useEffect, useMemo, useState } from "react";

export const OptionContext = createContext();

export default function OptionProvider({ children }) {
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [index, setIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [shuffleOptions, setShuffleOptions] = useState([]);
  const [difficulty, setDifficulty] = useState("default");
  const [category, setCategory] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    setloading(true);
    const fetchData = async () => {
      let endPoint = "https://opentdb.com/api.php?amount=10";
      if (category !== 0) {
        endPoint = `https://opentdb.com/api.php?amount=10&category=${category}`;
      }
      if (difficulty !== "default") {
        endPoint = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`;
      }
      if ((category !== 0) & (difficulty !== "default")) {
        endPoint = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`;
      }
      const response = await fetch(endPoint);
      const data = await response.json();
      setData(data);
      setCurrentQuestion(data.results[0]);
      setloading(false);
      const incorrectAnswers = data.results[0].incorrect_answers.map((item) => {
        return {
          title: item,
          isCorrectAnswer: false,
        };
      });
      const correctAnswer = {
        title: data.results[0].correct_answer,
        isCorrectAnswer: true,
      };
      const result = [...incorrectAnswers, correctAnswer];
      setShuffleOptions(result.sort(() => Math.random() - 0.5));
    };
    fetchData();
    console.log("useeffect api run");
  }, []);

  return (
    <OptionContext.Provider
      value={{
        loading,
        setloading,
        data,
        index,
        setIndex,
        currentQuestion,
        shuffleOptions,
        difficulty,
        setDifficulty,
        category,
        setCategory,
        showResult,
        setShowResult,
        currentAnswer,
        setCurrentAnswer,
        setCurrentQuestion,
        finish,
      }}
    >
      {children}
    </OptionContext.Provider>
  );
}
