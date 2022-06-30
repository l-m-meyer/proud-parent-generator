import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Quote from './components/Quote';
import Button from './components/Button';


function App() {
  const [phrase, setPhrase] = useState();

  const queryServer = () => {
    axios
      .get('http://localhost:3001/phrases')
      .then((res) => {
        setPhrase(res.data.phrase);
      });
  }

  return (
    <div className="App">
      <h1>Proud Parent</h1>
      <Quote phrase={phrase} />
      <Button queryServer={queryServer} />
    </div>
  );
}

export default App;
