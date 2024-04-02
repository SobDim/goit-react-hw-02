const Options = ({ buttons, updateFeedback }) => {
  return (
    <div>
      {buttons.map(btn => (
        <button onClick={() => updateFeedback(btn)} key={btn}>
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Options;
