import React, { useState, memo } from 'react';

// Child component wrapped with React.memo to avoid re-render
const Child = memo(function Child({ name }) {
  console.log(`Child rendered: ${name}`);
  return <h4>Child Name: {name}</h4>;
});

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      {/* This child will NOT re-render unless 'name' changes */}
      <Child name="Amit" />

      <h3>Count: {count}</h3>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment Count
      </button>
    </div>
  );
}

export default Parent;
