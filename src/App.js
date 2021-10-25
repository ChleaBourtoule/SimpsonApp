import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import DisplaySimpson from './components/DisplaySimpson';
import { useState } from 'react';

const sampleSimpson = {
  quote:"I'm sleeping in the bath tub.",
  character:"Marge Simpson",
  image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
  characterDirection:"Right"
};

function App() {
  const [simpson, setSimpson] = useState(sampleSimpson);

  const getSimpson = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setSimpson(data[0]);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <DisplaySimpson simpson={simpson} />
        <button type='button' onClick={getSimpson}>Get Simpson's Quote</button>
      </header>
    </div>
  );
}

export default App;
