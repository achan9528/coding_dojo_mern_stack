import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Home from './views/Home';
import NewPet from './views/NewPet';
import UpdatePet from './views/UpdatePet';
import ViewPet from './views/ViewPet';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <body>
          <Router>
            <Home path="/"></Home>
            <NewPet path="/pets/new"></NewPet>
            <ViewPet path="/pets/:id"></ViewPet>
            <UpdatePet path="/pets/:id/edit"></UpdatePet>
          </Router>
      </body>
    </div>
  );
}

export default App;
