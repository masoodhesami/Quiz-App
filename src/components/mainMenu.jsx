import React, {useContext} from 'react';
import {quizContext} from "../helpers/contexts";
import "../App.css"

const MainMenu = () => {
    const {setNavigator, setUsername, username} = useContext(quizContext)
    return (
        <div className={"card"}>
            <div className={"card-body"}>
                <div className={"row d-flex mt-5"}>
                    <div className={"container"}>
                        <div className={"row mt-2 text-center"}>
                            <h2 className={"text-primary"}>
                                Welcome to React Quiz Application
                            </h2>
                        </div>
                        <div className={"row mx-auto d-flex justify-content-center mt-5"}>
                            <div className={"col-4"}>
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp"
                                               placeholder="Enter Your Name "
                                               onChange={(event) => {
                                                   setUsername(event.target.value)
                                               }
                                               }/>
                                    </div>
                                </form>
                            </div>
                        </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;
