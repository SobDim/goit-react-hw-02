import Notification from '../Notification/Notification';

const Feedback = ({ state, totalFeedback, positive }) => {
  const { good, neutral, bad } = state;
  //   totalFeedback ?
  return (
    <>
      {totalFeedback ? (
        <div>
          <h2>Good: {good}</h2>
          <h2>neutral: {neutral}</h2>
          <h2>bad: {bad}</h2>
          <p>Total: {totalFeedback} votes</p>
          <p>Positive:{positive} %</p>
        </div>
      ) : (
        <Notification />
      )}
    </>
  );
};

export default Feedback;
