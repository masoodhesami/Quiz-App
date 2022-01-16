import React from 'react';
import {Questions} from "../../helpers/questions";

const QuizBtn = ({currentQuestion,optionChosen,nextQuestion,finishQuiz}) => {
    return (
        <>
            {currentQuestion === Questions.length - 1 ? (
                <button
                    className={optionChosen !== "" ? "btn btn-primary mt-3" : "btn btn-primary mt-3 disabled"}
                    onClick={finishQuiz}>
                    Finish Quiz
                </button>
            ) : (
                <button onClick={nextQuestion}
                        className={optionChosen !== "" ? "btn btn-primary mt-3" : "btn btn-primary mt-3 disabled"}
                >Next Question</button>
            )}
        </>
    );
};

export default QuizBtn;
