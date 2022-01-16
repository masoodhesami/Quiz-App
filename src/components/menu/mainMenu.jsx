import React from 'react';
import "../../App.css"
import MenuHeader from "./menuHeader";
import MenuInput from "./menuInput";
import StartBtn from "./startBtn";

const MainMenu = () => {
    return (
        <div className={"card"}>
            <div className={"card-body"}>
                <div className={"row d-flex mt-5"}>
                    <div className={"container"}>
                        <MenuHeader/>
                        <MenuInput/>
                        <StartBtn/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;
