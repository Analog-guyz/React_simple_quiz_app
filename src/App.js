import './App.css';
import quizData from './quizData'
import {useState} from 'react'

function App() {
  const [currentQuestion, setcurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const quizLength = quizData.length

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quizData.length) {
			setcurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  const renderNormal = 
  <>
   <div className="title-wrapper"> <h1>Quiz app</h1></div>
    <div className="quiz-wrapper">
      <h1 className="question-title">Question {quizData[currentQuestion].number} </h1>
      <p className="question-remaining"> Remaining : {quizLength-currentQuestion-1}</p>
      <p className="question-text">{quizData[currentQuestion].questionText} </p>
      <div className="answer-box">
         {quizData[currentQuestion].answerOptions.map((answerOption, index) => (
         <button key={index} className="answer-options" onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
      </div>
    </div>

    <p className="footer">Made by Analog_guy</p>
  </>

  const renderResults = 
  <>
   <div className="title-wrapper"> <h1>Quiz app</h1></div>
    <div className="quiz-wrapper-result">
      <div className="results"><h1>⭐you scored {score} out of {quizLength}⭐</h1></div>
    </div>

    <p className="footer">Made by Analog_guy</p>
 </>
  
  return (
    <div className="app-wrapper">
      {showScore ? renderResults : renderNormal}
    </div>
    
    
  );
}

export default App;
