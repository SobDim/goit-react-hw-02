import s from './Options.module.css';
const Options = ({ buttons, update, reset, totalFeedback }) => {
  return (
    <div className={s.wrapper}>
      {buttons.map(btn => (
        <button onClick={() => update(btn)} key={btn}>
          {btn}
        </button>
      ))}
      {totalFeedback ? (
        <button className={s.reset} onClick={() => reset()}>
          Reset
        </button>
      ) : null}
    </div>
  );
};

export default Options;
