import "./App.css";

/* Import Components */
import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

/* Import useState() from React */
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState([0]);

  const counters = () => {
    const newCounter = [...counter];

    if (counter.length < 3) {
      newCounter.push(0);
    }

    setCounter(newCounter);
  };

  return (
    <>
      <Header />
      <div className="wrapper bloc">
        <button
          className="btn-add-counter"
          onClick={counters}
          style={{
            visibility: counter.length === 3 ? "hidden" : "visible",
          }}
        >
          Add counter
        </button>
      </div>
      <div className="container">
        {counter.map((count, index) => {
          return (
            <Counter counter={counter} setCounter={setCounter} index={index} />
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default App;

// App.js with components

// import "./App.css";

/* Import Components */
// import Header from "./components/Header";
// import Counter from "./components/Counter";
// import Footer from "./components/Footer";

/* Import useState() from React */
// import { useState } from "react";

// function App() {
//   const [counter, setCounter] = useState([0]);

//   const counters = () => {
//     const newCounter = [...counter];

//     counter.length < 3 && newCounter.push(0);
//     console.log(newCounter);

//     setCounter(newCounter);
//   };

//   return (
//     <>
//       <Header />
//       <div>
//         <button onClick={counters}>Add counter</button>
//       </div>

//       <div>
//         {counter.map((elem, index) => {
//           return (
//             <Counter counter={counter} setCounter={setCounter} index={index} />
//           );
//         })}
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default App;
