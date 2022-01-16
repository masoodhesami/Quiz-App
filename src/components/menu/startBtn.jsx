import React, {useContext} from 'react';
import {quizContext} from "../../helpers/contexts";

const StartBtn = () => {
    const {setNavigator, username} = useContext(quizContext)
    return (
        <div className={"row mt-4 d-flex justify-content-center"}>
            <div className={"col-2"}>
                <div className={"row"}>
                    <button onClick={() => {
                        setNavigator("quiz")
                    }}
                            type="button"
                            className={
                                username !== "" ? "btn btn-outline-primary " : "btn btn-outline-primary disabled"
                            }>Start Quiz
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StartBtn;
