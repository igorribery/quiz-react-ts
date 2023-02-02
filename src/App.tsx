import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { QuizProvider } from './contexts/QuizContext';


const App = () => {
  return (
    
    <QuizProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QuizProvider>
      
  )
}

export default App;