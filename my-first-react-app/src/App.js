import './App.css';
import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
// import axios from 'axios';
// import PersonCard from './components/PersonCard'
// import HookForm from './components/HookForm'
// import ColorForm from './components/ColorForm'
// import ColorBox from './components/Box'
// import Tabs from './components/Tabs/tabs'
// import ToDoList from './components/ToDoList/ToDoList'
// import ToDoListForm from './components/ToDoList/ToDoListForm'
// import PokemonList from './components/PokemonAPI/fetch'
// import Welcome from './components/RoutingPractice/Welcome'
// import Number from './components/RoutingPractice/Number'
// import Text from './components/RoutingPractice/Text'
// import Text2 from './components/RoutingPractice/Text2'
// import {Welcome, Number, Text, Text2} from './components/RoutingPractice/Home'
import Search from './components/LukeAPIWalker/search'
import Results from './components/LukeAPIWalker/Results'
import axios from 'axios';

function App() {
  // Box Generator
  // const[newColor, setNewColor] = useState("");
  // const [colors, setColors] = useState([]);

  // const addNewColor = (newColor) =>{
  //   setNewColor(newColor);
  //   setColors([...colors, newColor]);
  // }

  // ToDo List
  // const[tasks, setTasks] = useState([]);
  // const addTask = (newTask) => {
  //   setTasks([...tasks, newTask]);
  // };

  // const removeTask = (key) => {
  //   let tempArr = [];
  //   for (let i = 0; i < tasks.length; i++){
  //     if (i != key){
  //       tempArr.push(tasks[i]);  
  //     }
  //   }
  //   setTasks(tempArr);
  // }

  // const [pokemon, setPokemon] = useState([])
  // const [responseData, setResponseData] = useState(null);
  // const getPokemon = () => {
  // fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
  //   .then(response => {
  //     return response.json();
  //   }).then(response => {
  //     console.log(response);
  //     setPokemon(response.results);
  //   }).catch(err => {
  //     console.log(err);
  //   })

  //   axios.get("https://pokeapi.co/api/v2/pokemon?limit=2000")
  //     .then(response => {
  //       // console.log(response.data);
  //       setResponseData(response.data.results.map((index, i) => (
  //         <div key={i}>
  //           {index.name}
  //         </div>
  //       )));
  //     })
  // }

  const [results, setResults] = useState("")
  const [choice, setChoice] = useState()
  const [id, setID] = useState()


  const SubmitHandler = (selectedValue, typedValue) => {
    setChoice(selectedValue);
    setID(typedValue);
  }

  useEffect(() => {
    const lookup = "https://swapi.dev/api/" + choice + "/" + id;
    console.log(lookup);
    fetch(lookup)
      .then(response => {
        return response.json();
      }).then(response => {
        console.log(response);
        setResults(response);
      }).then(response => {
        // const lookup = "http://localhost:3000/" + choice + "/" + id;
      }).catch(err => {
            console.log(err);
          })
  }, [id, choice])

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
        </a>
        <p>How did that happen?</p> */}

        {/* My-First-React-App */}
        {/* <h1>Hello Dojo!</h1>
        <h2>Things I need to do:</h2>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul> */}


        {/* <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
        <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
        <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"}/>
        <PersonCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"}/> */}

        {/* Hook Form Assignment */}
        {/* <HookForm></HookForm> */}

        {/* Box Generator */}
        {/* <ColorForm onNewColor = {addNewColor}></ColorForm>
        <ColorBox colors={colors}></ColorBox> */}

        {/* Tabs */}
        {/* <Tabs tabs={["This is the first", "This is the second", "This is the third"]}></Tabs> */}

        {/* To Do List */}
        {/* <ToDoListForm onNewTask={addTask}></ToDoListForm>
        <ToDoList tasks={tasks} removeTask={removeTask}></ToDoList> */}

        {/* PokemonAPIFetch */}
        {/* <div>
          <button onClick={getPokemon}>Fetch Pokemon</button>
          {responseData}
          {/* <PokemonList pokemon={pokemon}></PokemonList> */}
        {/* </div> */}

        {/* <Router>
          <Welcome path="/home"></Welcome>
          <Number path="/:id"></Number>
          <Text path="/:word"></Text>
          <Text2 path="/:word/:textColor/:bgColor"></Text2>
        </Router> */}

        {/* LukeAPIWalker */}
        <Router>
          <Search path="/" submitHandler={SubmitHandler}></Search>
          <Search path="/:choice/:id" submitHandler={SubmitHandler}></Search>
        </Router>
        <Results results={results}></Results>
      </header>
    </div>
  );
}

export default App;
