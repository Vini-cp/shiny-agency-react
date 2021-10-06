import { useParams, Link } from 'react-router-dom';

function Survey() {
  const { questionNumber } = useParams();
  const questionInt = parseInt(questionNumber);
  const prevQuestionNbr = questionInt === 1 ? 1 : questionInt - 1;
  const nextQuestionNbr = questionInt + 1;

  return (
    <div>
      <h1>Survey 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <nav>
        {questionInt > 1 ? (
          <Link to={`/survey/${prevQuestionNbr}`}>Previous </Link>
        ) : (
        null
        )}
        {questionInt < 10 ? (
          <Link to={`/survey/${nextQuestionNbr}`}> Next </Link>
        ) : (
          <Link to="/results"> Results </Link>
        )}
      </nav>
    </div>
  );
}

export default Survey;
