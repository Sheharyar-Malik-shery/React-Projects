import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function incriment() {
    setCount(count + 1);
  }

  function decriment() {
    count > 0 ? setCount(count - 1) : 0;
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Count : {count}</h2>
      <Incriment handlebtn={incriment} />
      <Decriment handlebtn={decriment} />
    </>
  );
}

export default App;

function Incriment(props) {
  return <button onClick={props.handlebtn}>Incriment </button>;
}
function Decriment(props) {
  return <button onClick={props.handlebtn}>Decriment </button>;
}
