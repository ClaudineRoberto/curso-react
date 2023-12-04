"use client"

import { useState } from "react";
import { Question } from "./components/Question";
import { questions } from "./data/questions";


const Page = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState(0)


  return (
    <div className="w-full h-screen bg-blue-600 flex justify-center items-center">
      <div className=" w-full max-w-lg bg-blue-50 rounded-md text-black shadow shadow-black">
        <div className="font-bold text-2xl px-3 py-4 border-b border-gray-300 flex justify-center">Conhecimentos Gerais</div>
        
        <Question 
          
          id = {questions[currentQuestion].id}
          question = {questions[currentQuestion].question}
          options = {questions[currentQuestion].options}
          selectedOption = {selectedOption}
          setSelectedOption = {setSelectedOption}

        />

        <div className=" py-4 flex justify-center font-bold text-sm">
          {currentQuestion + 1} de {questions.length} pergunta{questions.length === 1? "" : "s"}
        </div>

        <div className="flex justify-around py-3">
          <button onClick={() => {
              if(currentQuestion > 0){
                setSelectedOption(0)
                setCurrentQuestion(currentQuestion - 1)
              }
            }} className="border border-gray-400 bg-gray-200 rounded-md px-6 py-1 font-bold">Voltar</button>

          <button className="border border-blue-900 bg-blue-700 rounded-md px-6 py-1 text-white font-bold"
          onClick={
            () => {
              if(currentQuestion < questions.length - 1){
                setSelectedOption(0)
                setCurrentQuestion(currentQuestion + 1)
              }
            }}>Proxima</button>
        </div>

      </div>
    </div>
  );
};

export default Page;


