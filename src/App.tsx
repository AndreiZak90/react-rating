import "./App.css";
import Stars from "./components/Stars";

function App() {
  return (
    <>
      <div className="card">
        <h2 className="title">John Wick 4</h2>
        <Stars count={3} />
      </div>
    </>
  );
}

export default App;
