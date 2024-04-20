import { useAppContext } from '@/context';
import React, { memo } from 'react'

interface Props {
  handleStartGame: () => void;
}

function AnswerBoard(props: Props) {
  const { 
    handleStartGame
  } = props;

  const {results} = useAppContext();
  
  return (
    <div>
      <h2 className="text-center text-[26px] mb-[25px] text-[#6d5af8]">Cevap Tablosu</h2>
        <div className="result-area max-h-[410px] overflow-y-scroll m-[20px] flex-wrap p-[15px] [box-shadow:0.3rem_0.3rem_0.6rem_#c8d0e7,_-0.2rem_-0.2rem_0.5rem_white] rounded-2xl flex items-center relative">
          {results.length > 0 && results.map((innerArray: any, index: number) => (
            <div className="flex flex-col w-1/4 xsfull:w-full xsfull:mb-[20px]">
              <h6 className="text-[#6d5af8] font-bold text-center mb-[10px]">Test {index + 1}</h6>
              <div key={index} className="flex flex-col justify-between items-center text-secondColor [transition:all_0.5s_ease] px-[0] py-[10px] border-[1px] border-[solid] border-[#7169fc4d] rounded-[20px] bg-[#ffffff4f] [box-shadow:1px_1px_11px_-6px_#7169fc]">
                {Array.isArray(innerArray) ? (
                  innerArray.map((innerItem: any, innerIndex: number) => (
                    <div key={innerIndex}>
                      {innerItem.questionIndex === innerIndex + 1 
                        ? `Soru ${innerItem.questionIndex}: ${innerItem.answer}` 
                        : `Soru ${innerItem.questionIndex}: -`}
                    </div>
                  ))
                ) : (
                  <div>Invalid data format</div>
                )}
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleStartGame} className="hover:[transition:0.3s_ease] [transition:0.3s_ease] hover:[box-shadow:inset_0.2rem_0.2rem_1rem_mainColor,_inset_-0.2rem_-0.2rem_1rem_#8abdff] bg-[#6d5dfc] [box-shadow:inset_0.2rem_0.2rem_1rem_#8abdff,_inset_-0.2rem_-0.2rem_1rem_mainColor,_0.3rem_0.3rem_0.6rem_#c8d0e7,_-0.2rem_-0.2rem_0.5rem_white] text-[#E4EBF5] w-60 h-16 rounded-2xl [box-shadow:0.3rem_0.3rem_0.6rem_#c8d0e7,_-0.2rem_-0.2rem_0.5rem_white] justify-self-center flex items-center justify-center cursor-pointer [transition:0.3s_ease] w-full justify-center items-center text-center flex absolute m-auto left-[0] right-[0] bottom-[25px] max-w-[200px]">Testi Tekrar Başlat</button>
    </div>
  )
}

export default memo(AnswerBoard)