const Counter = ({ counter, setCounter, index }) => {
  return (
    <div className="wrapper bloc-2">
      <div>
        <button
          className="btn-minus"
          index={index}
          onClick={() => {
            const minus = [...counter];
            minus.splice(index, 1, minus[index] - 1);
            setCounter(minus);
          }}
          style={{
            visibility: counter[index] === 0 ? "hidden" : "visible",
          }}
        >
          -
        </button>
        <span index={index}>{counter[index]}</span>
        <button
          className="btn-plus"
          index={index}
          onClick={() => {
            const plus = [...counter];
            plus.splice(index, 1, plus[index] + 1);
            setCounter(plus);
          }}
          style={{
            visibility: counter[index] === 10 ? "hidden" : "visible",
          }}
        >
          +
        </button>
      </div>
      <button
        className="btn-reset"
        index={index}
        onClick={() => {
          const reset = [...counter];
          reset.splice(index, 1, 0);
          setCounter(reset);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
