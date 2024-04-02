const Options = ({ buttons, update, reset }) => {
  return (
    <div>
      {buttons.map(btn => (
        <button onClick={() => update(btn)} key={btn}>
          {btn}
        </button>
      ))}
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default Options;
