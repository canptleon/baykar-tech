import React, { useState } from "react";
import Header from "@/components/Header";
import GameArea from "@/layouts/GameArea";
import AnswerBoard from "@/layouts/AnswerBoard";
import { useAppContext } from "@/context";
import { getQuestions } from "@/data/api/questions";
import Footer from "@/components/Footer";
import HtmlHead from "@/components/HtmlHead";

interface Props {
  questions: Question[];
}

function Homepage(props: Props) {
  const { questions } = props;

  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [isAnswerBoardActive, setIsAnswerBoardActive] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswer[]>([]);
  const [questionIndex, setQuestionIndex] = useState<number>(1);

  const handleStartGame = () => {
    setIsGameStarted(true);
    setQuestionIndex(1);
    setSelectedAnswers([]);
    setIsAnswerBoardActive(false);
  }

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <HtmlHead title="BAYKAR Teknoloji"/>
        <Header/>
        <div className="xsfull:max-w-[96%] xsfull:!p-[30px] relative w-[75rem] h-[40rem] rounded-[3rem] [box-shadow:0.8rem_0.8rem_1.4rem_#c8d0e7,_-0.2rem_-0.2rem_1.8rem_white] p-16  items-center">
          {isGameStarted ? 
            (
              <GameArea 
                questions={questions}
                setIsGameStarted={setIsGameStarted}
                setIsAnswerBoardActive={setIsAnswerBoardActive}
                selectedAnswers={selectedAnswers}
                setSelectedAnswers={setSelectedAnswers}
                questionIndex={questionIndex}
                setQuestionIndex={setQuestionIndex}
              />
            ) : (
              isAnswerBoardActive ? (
                <AnswerBoard 
                  handleStartGame={handleStartGame}
                />
              ) : (
                <button onClick={handleStartGame} className="hover:[transition:0.3s_ease] [transition:0.3s_ease] hover:[box-shadow:inset_0.2rem_0.2rem_1rem_mainColor,_inset_-0.2rem_-0.2rem_1rem_#8abdff] bg-[#6d5dfc] [box-shadow:inset_0.2rem_0.2rem_1rem_#8abdff,_inset_-0.2rem_-0.2rem_1rem_mainColor,_0.3rem_0.3rem_0.6rem_#c8d0e7,_-0.2rem_-0.2rem_0.5rem_white] text-[#E4EBF5] w-60 h-16 rounded-2xl [box-shadow:0.3rem_0.3rem_0.6rem_#c8d0e7,_-0.2rem_-0.2rem_0.5rem_white] justify-self-center flex items-center justify-center cursor-pointer [transition:0.3s_ease] w-full justify-center items-center text-center flex absolute m-auto left-[0] right-[0] bottom-[0] top-[0] max-w-[200px]">Testi Başlat</button>
              )
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Homepage;

export async function getServerSideProps(context: any) {
  try {

    const response = await Promise.all([
      getQuestions(),
    ]);

    const questions = response[0].body;
    return {
      props: {
        questions
      }
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }
}
