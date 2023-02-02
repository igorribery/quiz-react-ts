import * as C from './styles';
import Quiz from '../../img/quiz.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { QuizActions, useQuiz } from '../../contexts/QuizContext';

export const Welcome = () => {

    const navigate = useNavigate();
    const { dispatch } = useQuiz();

    useEffect(() => {
        dispatch({
            type: QuizActions.setNewGame
        })
    }, []);

    const handleNextPage = () => {
        navigate('/questions');
    }
    

    return (
        <C.Container>
            <h1>Quiz de Programação</h1>
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão para começar</p>
            <button onClick={handleNextPage}>Iniciar</button>
            <img src={Quiz} alt='inicio do Quiz' />
            

        </C.Container>    
    
    )
}