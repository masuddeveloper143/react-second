









import { useState } from "react";

function Counter1() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase +1</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: "0 10px" }}>
        Decrease -1
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter1;