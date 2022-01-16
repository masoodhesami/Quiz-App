import React, {useContext} from 'react';
import {quizContext} from "../../helpers/contexts";

const MenuInput = () => {
    const {setUsername} = useContext(quizContext)
    return (
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
    );
};

export default MenuInput;
