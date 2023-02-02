import * as C from './styles'
import Welldone from '../../img/welldone.svg';
import { useNavigate } from 'react-router-dom';
import { QuizActions, useQuiz } from '../../contexts/QuizContext';
import { useEffect } from 'react';


export const GameOver = () => {
    const navigate = useNavigate();

    const {state, dispatch} = useQuiz();
   
    useEffect(() => {
        if(state.answerSelected === false) {
            navigate('/')
        }
    }, []);

    const handleRestart = () => {
        dispatch({
            type: QuizActions.setNewGame
        })
        navigate('/')
    }

    return (
        <C.Container>
            <h1>Game Over!</h1>
            <p>Pontuação: {state.score} </p>
            <p>Você acertou {state.score} de {state.questions.length} perguntas.</p>
            <img src={Welldone} alt="fim de quiz" />
            <button onClick={handleRestart}>Reiniciar</button>
        </C.Container>
    )
}