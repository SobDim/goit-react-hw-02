import Notification from '../Notification/Notification';
import s from './Feedback.module.css';

const Feedback = ({ state, totalFeedback, positive }) => {
  const { good, neutral, bad } = state;
  return (
    <>
      {totalFeedback ? (
        <div>
          <div className={s.wrapper}>
            <h2>Good: {good};</h2>
            <h2>Neutral: {neutral}; </h2>
            <h2>Bad: {bad}; </h2>
          </div>

          <p>Total: {totalFeedback} votes</p>
          <p>Positive: {positive} %</p>
        </div>
      ) : (
        <Notification />
      )}
    </>
  );
};

export default Feedback;
