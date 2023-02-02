import { QuizActions, useQuiz } from '../../contexts/QuizContext';
import * as C from './styles';

type Props = {
    option: string,
    select: (option: string) => void,
    rightColor: boolean
}

export const QuestionItem = ( { option, select, rightColor }: Props ) => {

    const { dispatch } = useQuiz();


    const handleAnswer = () => {
        select(option);
        dispatch({      
            
            type: QuizActions.setAnswerSelected
        })
    }

    return (
        <C.Container>    
            <C.QuestionOption color={rightColor} onClick={handleAnswer}>{option}</C.QuestionOption>   
        </C.Container>
    )
}