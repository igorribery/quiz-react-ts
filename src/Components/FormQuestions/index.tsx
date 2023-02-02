import * as C from './styles';
import { QuizActions, useQuiz } from '../../contexts/QuizContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionItem } from '../QuestionItem';


export const FormQuestions = () => {

    const navigate = useNavigate();

    useEffect(() => {   
        dispatch({
            type: QuizActions.setReoderOrder
        })
    }, [])
    
    const {state, dispatch} = useQuiz();
    const currentQuestion = state.questions[state.currentQuestion];
    const nextQuestion = state.currentQuestion + 1;


    const handleNext = () => {
        if(!state.questions[nextQuestion]) {
            navigate('/end');
        }
        if(state.questions[nextQuestion]) {
            dispatch({
                type: QuizActions.setAnswerFalse
            })
        } 
        dispatch({
            type: QuizActions.setCurrentQuestion     
        })
    }

    const selectOption = (option: string) => {
        
        dispatch({
            type: QuizActions.setCheckAnswer,
            payload: {answer: currentQuestion.answer, option}
        })
    }

    return (
        <C.Container>
            <h1>Quiz de Programação</h1>
            <p>Pergunta {state.currentQuestion + 1} de {state.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <p>Opções</p>

            {currentQuestion.options.map((item) => (
                <QuestionItem key={item} option={item}  
                select={selectOption}
                rightColor={currentQuestion.answer === item && state.answerSelected}
                />
            ))}
            

            {state.answerSelected &&
                <button onClick={handleNext}>Próxima</button>
            }
            
        </C.Container>
    )
}