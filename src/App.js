import './App.css';

import EightBall from './components/EightBall';
import Header from './components/Header';
import QuestionForm from './components/QuestionForm';
import QuestionLog from './components/QuestionLog';
import data from './data.json'
import { useState } from 'react';

function App() {
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  // Pass a handler function down to the question form
  const answerQuestion = (question) => {
    const answer = data[Math.floor(Math.random() * data.length)]

    setAnsweredQuestions([...answeredQuestions, {id:answeredQuestions.length + 1, question, answer}])
  }

  return (
    <div className="App">
      <Header />
      <QuestionForm action={answerQuestion} />
      <EightBall answeredQuestion={answeredQuestions[answeredQuestions.length - 1]} />
      <QuestionLog answeredQuestions={answeredQuestions}/>
    </div>
  );
}


export default App;
