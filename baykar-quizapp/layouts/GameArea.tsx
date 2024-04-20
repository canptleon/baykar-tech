//@ts-nocheck
import { useAppContext } from '@/context';
import React, { memo, useEffect, useState } from 'react'

interface Props {
  questions: Question[];
  setIsGameStarted: (condition: boolean) => void;
  setIsAnswerBoardActive: (condition: boolean) => void;
  selectedAnswers: SelectedAnswer[];
  setSelectedAnswers: (answers: SelectedAnswer[]) => void;
  questionIndex: number;
  setQuestionIndex: (condition: number) => void;
}

function GameArea(props: Props) {
  const { 
    questions, 
    setIsGameStarted, 
    setIsAnswerBoardActive,
    selectedAnswers,
    setSelectedAnswers,
    questionIndex,
    setQuestionIndex
  } = props;

  const {results, setResults}= useAppContext();
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [shuffledParts, setShuffledParts] = useState<string[]>([]);
  const [timer, setTimer] = useState<number>(30);
  const [canSelectAnswer, setCanSelectAnswer] = useState<boolean>(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 1) {
          clearInterval(interval);
        }
        return prevTimer - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [questionIndex]);

  useEffect(() => {
    if (timer <= 20) {
      setCanSelectAnswer(true);
    }
  
    if (timer === 0) {
      setSelectedAnswers([...selectedAnswers, { questionIndex, answer: "-" }]);
      handleNextQuestion(selectedAnswers);
    }
  }, [timer]);
  
  useEffect(() => {
    const filtered = questions.filter(question => question.userId === questionIndex);
    const randomIndex = Math.floor(Math.random() * filtered.length);
    const selectedQuestion = filtered[randomIndex];
  
    setFilteredQuestions([selectedQuestion]);

    if(questionIndex >= 11 || !selectedQuestion)
    {
      setIsGameStarted(false);
    } else {
      handleShuffleBody(selectedQuestion.body);
    }
  }, [questionIndex]);

  const handleSelectAnswer = (answer: string) => {
    if (canSelectAnswer) {
      setSelectedAnswers(prevSelectedAnswers => [...prevSelectedAnswers, { questionIndex, answer }]);
      handleNextQuestion([...selectedAnswers, { questionIndex, answer }]);
    }
  };

  const handleNextQuestion = (lastSelectedAnswers: SelectedAnswer[]) => {
    if (questionIndex < 10) {
      setQuestionIndex(prevIndex => prevIndex + 1);
      setTimer(30);
      setCanSelectAnswer(false);
    } else {
      handleSaveAnswers(lastSelectedAnswers);
    }
  };

  const handleSaveAnswers = (lastSelectedAnswers: SelectedAnswer[]) => {
    setIsGameStarted(false);
    setResults([...results, lastSelectedAnswers]);
    setIsAnswerBoardActive(true);
  }

  const handleShuffleBody = (body: string) => {
    const words = body.split(" ");
    const chunkSize = Math.ceil(words.length / 4);
    const chunks = [];
    for (let i = 0; i < words.length; i += chunkSize) {
      chunks.push(words.slice(i, i + chunkSize).join(" "));
    }
    const shuffledChunks = handleShuffleArray(chunks);
    setShuffledParts(shuffledChunks);
  };

  const handleShuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="xsfull:max-w-[100%] max-w-[80%] m-auto h-full justify-center items-center flex flex-col">
      <h3 className="xsfull:leading-[1.2] xsfull:gap-[12px] min-w-full mb-[30px] p-[10px] rounded-[10px] justify-self-center rounded-2xl [box-shadow:0.3rem_0.3rem_0.6rem_#c8d0e7,_-0.2rem_-0.2rem_0.5rem_white] flex items-center"><span className="text-mainColor font-bold mr-[5px] text-nowrap">Soru {questionIndex}:</span> {filteredQuestions[0]?.title}</h3>
      <div className="flex flex-col min-w-full">
        {shuffledParts.map((part, index) => (
          <button key={index} className="cursor-auto text-left flex items-center gap-[12px] mb-[20px]">
            <span onClick={() => handleSelectAnswer(String.fromCharCode(65 + index))} className={`${canSelectAnswer && "cursor-pointer hover:[box-shadow:inset_0.2rem_0.2rem_0.5rem_#c8d0e7,_inset_-0.2rem_-0.2rem_0.5rem_white] hover:text-[#6d5dfc]"} text-mainColor font-bold mr-[5px] w-8 h-8 rounded-[50%] [box-shadow:0.3rem_0.3rem_0.6rem_#c8d0e7,_-0.2rem_-0.2rem_0.5rem_white] flex justify-center items-center text-[1rem] text-secondColor [transition:all_0.5s_ease] hover:[transition:all_0.5s_ease]`}>{String.fromCharCode(65 + index)}</span> {part}
          </button>
        ))}
      </div>
      <div className="xsfull:left-[0] xsfull:right-[0] xsfull:top-[25px] flex flex-col text-center justify-center absolute top-[15px] right-[15px] justify-center items-center gap-[9px] font-bold"><img className="w-[50px]" src="/images/clock.png" /> <span className={`${timer <= 20 ? "text-green-600" : "text-red-500"}`}>{timer}</span></div>
    </div>
  )
}

export default memo(GameArea);