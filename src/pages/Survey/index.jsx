import { useParams, Link } from 'react-router-dom';

function Survey() {
  const { questionNumber } = useParams();

  return (
    <div>
      <h1>Survey 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <nav>
        {parseInt(questionNumber, 10) > 1 ? (
          <Link to={`/survey/${parseInt(questionNumber, 10) - 1}`}>Previous </Link>
        ) : null}
        {parseInt(questionNumber, 10) < 10 ? (
          <Link to={`/survey/${parseInt(questionNumber, 10) + 1}`}> Next </Link>
        ) : (
          <Link to="/results"> Results </Link>
        )}
      </nav>
    </div>
  );
}

export default Survey;
