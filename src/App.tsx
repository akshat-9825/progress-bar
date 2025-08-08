import { useState } from "react";
import ProgressBar from "./components/progress-bar";

function App() {
  const [percentage, setPercentage] = useState(50);

  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen">
      <div>Progress bar value: {percentage}</div>
      <input
        type="range"
        min={0}
        max={100}
        value={percentage}
        onChange={(e) => setPercentage(Number(e.target.value))}
      />
      <ProgressBar percentage={percentage} />
    </div>
  );
}

export default App;
