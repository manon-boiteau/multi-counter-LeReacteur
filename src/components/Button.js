const Button = ({ value, setCounter, counter, index }) => {
  console.log(33, counter);
  return (
    <button
      onClick={() => {
        value === "-" && setCounter(counter - 1);
        value === "+" && setCounter(counter + 1);
        value === "Reset" && setCounter(0);
      }}
    >
      {value}
    </button>
  );
};

export default Button;
