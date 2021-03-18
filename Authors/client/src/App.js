import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router'
import Home from './views/Home'
import NewAuthor from './views/NewAuthor'
import UpdateAuthor from './views/UpdateAuthor'

function App() {
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
      </header>
      <body>
        <Router>
          <Home path="/"></Home>
          <NewAuthor path="/new"></NewAuthor>
          <UpdateAuthor path="/edit/:id"></UpdateAuthor>
        </Router>
      </body>
    </div>
  );
}

export default App;
