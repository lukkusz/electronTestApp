import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const handleInvoke = event => {
    event.preventDefault();

    axios.get(`http://localhost:3000/questions`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="submit" onClick={handleInvoke}>Invoke</button>
      </header>
      
    </div>
  );
}

export default App;
