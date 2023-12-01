import { useState } from "react";
import { questions } from "../data/questions";
import { Option } from "../types/Question";

type Props = {
    id: number;
    question: string;
    options: Option[];
}



export const Question = ({ id, question, options }: Props) => {

    const [selectedOption, setSelectedOption] = useState(0)

    const handleClick = (id: number) => {
        setSelectedOption(id)
    }

    return (
        <div className="">
            <div className="py-4 px-3 text-xl font-bold">{id}- {question}</div>
            <div>
                {options.map((option) => {
                    const isSelected = option.id === selectedOption
                    const isCorrect = option.correct
                    const bgColor = isSelected ? isCorrect ? "bg-green-300 border-green-600" : "bg-red-300 border-red-600" : "bg-blue-100"
                return (

                    <>
                    
                    <div key={option.id} 
                    className={`py-2 border mx-3 my-4 border-blue-300 ${bgColor} cursor-pointer px-3 rounded`}
                    onClick={() => handleClick(option.id)}
                    >
                        
                        {option.option}
                    
                    </div>
                    
                    </>
                    
                )
                })}
            </div>
        </div>
    )
}