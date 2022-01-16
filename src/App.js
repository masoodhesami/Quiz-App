import './App.css';
import {useState} from "react";
import MainMenu from "./components/mainMenu";
import Quiz from "./components/quiz";
import Result from "./components/result";
import {quizContext} from "./helpers/contexts"

function App() {
    const [navigator, setNavigator] = useState("menu")
    const [username, setUsername] = useState("")
    return (
        <div className="App">
            <div className="card">
                <quizContext.Provider value={{navigator, setNavigator}}>
                    <div className="card-body">
                        {navigator === "menu" && <MainMenu/>}
                        {navigator === "quiz" && <Quiz/>}
                        {navigator === "result" && <Result/>}
                    </div>
                </quizContext.Provider>
            </div>
        </div>
    );
}

export default App;
