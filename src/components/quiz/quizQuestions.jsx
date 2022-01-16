import React from 'react';
import {Questions} from "../../helpers/questions";

const QuizQuestions = ({optionChosen,currentQuestion,chooseOption}) => {
    return (
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
    );
};

export default QuizQuestions;
