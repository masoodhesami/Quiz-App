import React, {useContext, useState} from 'react';
import {quizContext} from "../../helpers/contexts";
import {Questions} from "../../helpers/questions"
import QuizHeader from "./quizHeader";
import QuizQuestions from "./quizQuestions";
import QuizBtn from "./quizBtn";

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
            <QuizHeader/>
            <div className={"container"}>
                <div className="card mt-5">
                    <div className="card-header">
                        Question {currentQuestion + 1}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            {Questions[currentQuestion].prompt}
                        </h5>
                        <QuizQuestions chooseOption={chooseOption}
                                       currentQuestion={currentQuestion}
                                       optionChosen={optionChosen}

                        />
                        <QuizBtn currentQuestion={currentQuestion}
                                 optionChosen={optionChosen}
                                 finishQuiz={finishQuiz}
                                 nextQuestion={nextQuestion}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Quiz;
