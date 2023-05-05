import "./App.css";

function App() {
  const count = 0;

  const increament = (e) => {
    e.preventDefault();
    count = count + 1;
  };

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={increament}>Increment</button>
    </>
  );
}

export default App;
