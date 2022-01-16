import React, {useContext} from 'react';
import {Questions} from "../helpers/questions";
import {quizContext} from "../helpers/contexts"

const Result = () => {
    const {username, score, setScore, setNavigator , setUsername} = useContext(quizContext)
    const restartQuiz = () => {
        setScore(0);
        setNavigator("menu");
        setUsername("");
    }
    return (
        <>
            <div className={"card"}>
                <div className={"card-body"}>
                    <div className={"text-center"}>
                        Result
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Your Score Is
                                <span className={"text-primary ms-2"}>
                                     {score}/{Questions.length}
                                </span>
                            </h5>
                            <p className="card-text">
                                 <span className={"text-primary me-1"}>
                                     {username}
                                </span>
                                Quiz Finished , Do You Want to Restart it ?
                            </p>
                            <button onClick={restartQuiz} className="btn btn-primary">Restart Quiz</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Result;
