import React, {useContext, useState} from 'react';
import {quizContext} from "../helpers/contexts";
import {Questions} from "../helpers/questions"

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const {score, setScore, setNavigator} = useContext(quizContext)
    const chooseOption = (option) => {
        setOptionChosen(option);
    }
    const nextQuestion = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
        setOptionChosen("");
    }
    const finishQuiz = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setNavigator("result")
    }
    return (
        <>
            <div className={"card"}>
                <div className={"card-body"}>
                    <div className={"text-center"}>
                        Answer The Questions ({Questions.length})
                    </div>
                </div>
            </div>
            <div className={"container"}>
                <div className="card mt-5">
                    <div className="card-header">
                        Question {currentQuestion + 1}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            {Questions[currentQuestion].prompt}
                        </h5>
                        <ul className="list-group list-group-flush mt-2">
                            <li onClick={() => {
                                chooseOption("optionA")
                            }} className={optionChosen !== "optionA" ? "list-group-item" : "list-group-item active"}>
                                {Questions[currentQuestion].optionA}
                            </li>
                            <li onClick={() => {
                                chooseOption("optionB")
                            }} className={optionChosen !== "optionB" ? "list-group-item" : "list-group-item active"}>
                                {Questions[currentQuestion].optionB}
                            </li>
                            <li onClick={() => {
                                chooseOption("optionC")
                            }} className={optionChosen !== "optionC" ? "list-group-item" : "list-group-item active"}>
                                {Questions[currentQuestion].optionC}
                            </li>
                            <li onClick={() => {
                                chooseOption("optionD")
                            }} className={optionChosen !== "optionD" ? "list-group-item" : "list-group-item active"}>
                                {Questions[currentQuestion].optionD}
                            </li>
                        </ul>
                        {currentQuestion === Questions.length - 1 ? (
                            <button className="btn btn-primary mt-3" onClick={finishQuiz}>
                                Finish Quiz
                            </button>
                        ) : (
                            <button onClick={nextQuestion} className="btn btn-primary mt-3">Next Question</button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Quiz;
