import { useState } from 'react';
import './Flashcard.Css';

const questions = [
    {
    id: 1,
    question: "What language is React based on?",
    answer: "Javascript"
    },
    {
    id: 2,
    question: "What are the building blocks of React apps?",
    answer: "Components" 
    },
    {
    id: 3,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
    },
    {
    id: 4,
    question: "How to pass data from parent to child components?",
    answer: "Props"
    },
    {
    id: 5,
    question: "How to give components memory?",
    answer: "useState hook"
    },
    {
    id: 6,
    question: "What do we call an input element that is completely synchronised with State",
    answer: "Controlled Elements",
    }
]

export default function FlashCard(){
    const [currentQuestion, setCurrentQuestion] = useState(null);

    function handleClick(id){
        setCurrentQuestion(id);
    }
    return (


    <div className="flashcards" >
        {questions.map((question)=> (
            <div key={question.id}
            onClick={() => handleClick(question.id)}
            className={question.id === currentQuestion ? "selected" : ""}> 
            <p>{question.id === currentQuestion ? question.answer : question.question}</p>
            </div>
            ))}
    </div>
    )

}
