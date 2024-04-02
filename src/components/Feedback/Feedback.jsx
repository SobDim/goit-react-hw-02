const Feedback = ({ state }) => {
  const { good, neutral, bad } = state;
  return (
    <div>
      <h2>Good: {good}</h2>
      <h2>neutral: {neutral}</h2>
      <h2>bad: {bad}</h2>
    </div>
  );
};

export default Feedback;
