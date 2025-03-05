import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
	
	// Estado para almacenar el número del contador
  const [count, setCount] = useState(0);

  let items = [];
  for (let i = 1; i <= count; i++) {
    items.push(<li key={i}>Elemento {i}🚀</li>);
  }
	
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
		  <h1>¡Hola Mundo en React desde Windows! 🚀</h1>
		</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
	  
	  <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> Contador en React </h1>
      <h2>{count}</h2>
	  
		<ul>{items}</ul>
      <button onClick={() => setCount(count + 1)} style={{ fontSize: "20px", padding: "10px 20px", cursor: "pointer" }}>
        Aumentar
      </button>
    </div>
	
	  <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
	  
	  
    </div>
  );
}


function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default App;
