import './App.css';
import {useState} from "react";
import MainMenu from "./components/menu/mainMenu";
import Quiz from "./components/quiz/quiz";
import Result from "./components/result/result";
import {quizContext} from "./helpers/contexts"

function App() {
    const [navigator, setNavigator] = useState("menu")
    const [username, setUsername] = useState("")
    const [score, setScore] = useState(0)
    return (
        <div>
            <quizContext.Provider value={{
                navigator, setNavigator, username, setUsername,
                score, setScore
            }}>
                {navigator === "menu" && <MainMenu/>}
                {navigator === "quiz" && <Quiz/>}
                {navigator === "result" && <Result/>}
            </quizContext.Provider>
        </div>
    );
}

export default App;
