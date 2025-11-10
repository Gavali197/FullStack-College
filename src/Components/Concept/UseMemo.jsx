import React, { useMemo, useState } from 'react'

function UseMemo() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const double = useMemo(() => {
    console.log("Calculating double...");
    // Simulate heavy calculation
    for (let i = 0; i < 1000000000; i++) {}
    return count * 2;
  }, [count]); // only re-run when count changes

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
  };

  return (
    <div style={theme}>
      <h2>Count: {count}</h2>
      <p>Double: {double}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>
    </div>
  );
}

export default UseMemo