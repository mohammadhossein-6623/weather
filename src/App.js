import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./Page/Home/HomePage";
import { metronome } from "ldrs";

function App() {
  const [loading, setLoading] = useState(true);
  metronome.register();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading">
          <l-metronome size="45" speed="1.75" color="#fff"></l-metronome>
        </div>
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;
