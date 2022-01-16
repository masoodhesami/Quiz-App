import React from 'react';
import {Questions} from "../../helpers/questions";

const QuizHeader = () => {
    return (
        <div className={"card"}>
            <div className={"card-body"}>
                <div className={"text-center"}>
                    Answer The Questions ({Questions.length})
                </div>
            </div>
        </div>
    );
};

export default QuizHeader;
