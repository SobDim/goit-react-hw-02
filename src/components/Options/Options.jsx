import s from './Options.module.css';
const Options = ({ buttons, update, reset }) => {
  return (
    <div className={s.wrapper}>
      {buttons.map(btn => (
        <button onClick={() => update(btn)} key={btn}>
          {btn}
        </button>
      ))}
      <button className={s.reset} onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
};

export default Options;
