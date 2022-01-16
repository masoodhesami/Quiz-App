import './App.css';
import {useState} from "react";
import MainMenu from "./components/mainMenu";
import Quiz from "./components/quiz";
import Result from "./components/result";
import {quizContext} from "./helpers/contexts"

function App() {
    const [navigator, setNavigator] = useState("menu")
    return (
        <div className="App">
            <quizContext.Provider value={{navigator, setNavigator}}>
                {navigator === "menu" && <MainMenu/>}
                {navigator === "quiz" && <Quiz/>}
                {navigator === "result" && <Result/>}
            </quizContext.Provider>
        </div>
    );
}

export default App;
