"use client"

import { useState } from "react";
import { Question } from "./components/Question";
import { questions } from "./data/questions";


const Page = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0)


  return (
    <div className="w-full h-screen bg-blue-600 flex justify-center items-center">
      <div className=" w-full max-w-lg bg-blue-50 rounded-md text-black shadow shadow-black">
        <div className="font-bold text-2xl px-3 py-4 border-b border-gray-300 flex justify-center">Conhecimentos Gerais</div>
        
        <Question 
          
          id = {questions[currentQuestion].id}
          question = {questions[currentQuestion].question}
          options = {questions[currentQuestion].options}

        />

        <div className=" py-4 flex justify-center font-bold text-sm">
          {currentQuestion + 1} de {questions.length} pergunta{questions.length === 1? "" : "s"}
        </div>
      </div>
    </div>
  );
};

export default Page;


