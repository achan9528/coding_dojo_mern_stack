import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router'
import Home from './views/Home'
import ProductDetail from './views/ProductDetail'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        <div>
          <Router>
              <Home path="/"></Home>
              <ProductDetail path="/products/:id"></ProductDetail>
          </Router>
        </div>

        {/* <ProductForm></ProductForm> */}
      </header>
    </div>
  );
}

export default App;
