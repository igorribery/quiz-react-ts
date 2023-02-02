import { Routes, Route } from "react-router-dom"
import { Welcome } from "./Components/Welcome"
import { FormQuestions } from "./Components/FormQuestions"
import { GameOver } from "./Components/GameOver"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/questions" element={<FormQuestions />} />
            <Route path="/end" element={<GameOver />} />
        </Routes>
    )
}