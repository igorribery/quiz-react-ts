// Context, Reducer, Provider, Hook
import { ReactNode, createContext, useContext, useReducer } from "react";
import questions from '../data/questions';

// types:
type ChildrenType = {
    children: ReactNode
}
type QuestionsType = {
    question: string,
    options: string[],
    answer: string
}

type State = {
    questions: QuestionsType[],
    currentQuestion: number,
    answerSelected: boolean,
    score: number
}
type Action = {
    type: QuizActions,
    payload?: any
}
type ContextType = {
    state: State,
    dispatch: (action: Action) => void
}


const initialState: State = {
    questions,
    currentQuestion: 0,
    answerSelected: false,
    score: 0
}

// Context

export const QuizContext = createContext<ContextType | undefined>(undefined);


// Reducer

export enum QuizActions {
    setCurrentQuestion,
    setAnswerSelected,
    setReoderOrder,
    setScore,
    setNewGame,
    setCheckAnswer,
    setAnswerFalse
    
}

const quizReducer = (state: State, action: Action ) => {
    switch(action.type) {
        case QuizActions.setCurrentQuestion:

            return {...state, currentQuestion: state.currentQuestion + 1 };

        case QuizActions.setAnswerSelected:

            return {...state, answerSelected: true};

        case QuizActions.setReoderOrder:

            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });
        
            return {...state, questions: reorderedQuestions };

        case QuizActions.setCheckAnswer:

            if (state.answerSelected) return state;
        
            const answer = action.payload.answer
            const option = action.payload.option

            if(answer === option) {

                return {...state, score: state.score + 1, answerSelected: option }
            }
            
        case QuizActions.setAnswerFalse:

            return {...state, answerSelected: false}

        case QuizActions.setNewGame:
            return initialState;
    
    default:
        return state;
    }
}


// Provider 

export const QuizProvider = ({children}: ChildrenType) => {

    const [state, dispatch] = useReducer(quizReducer, initialState);
    const value = { state, dispatch};
    

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

// Hook

export const useQuiz = () => {
    
    const context = useContext(QuizContext);

    if (context === undefined) {
        throw new Error('useQuiz precisa ser usado dentro do Provider')
    }
    return context;
}
