import React, {useState} from 'react';

function App() {

const [count, setCount] = useState(0);

  return (
      <div>
        <h1>Heddll</h1>
        <button className="border 2px solid" onClick={ () => setCount(count + 1)}>Click Me!</button>
        <h1>{count}</h1>
      </div>

  );
}

export default App;
