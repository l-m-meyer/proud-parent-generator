import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './components/Quote';
import Button from './components/Button';


function App() {
  const [phrase, setPhrase] = useState();
  useEffect(() => {
    axios
      .get('http://localhost:3001/phrases')
      .then((res) => {
        setPhrase(res.data.phrase);
      })
  }, [])
  return (
    <div className="App">
      <h1>Proud Parent</h1>
      <Quote phrase={phrase} />
      <Button />
    </div>
  );
}

export default App;
