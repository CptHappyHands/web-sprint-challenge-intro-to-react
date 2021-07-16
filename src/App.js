import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import CharacterList from './components/CharacterList'

export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const char_API = `https://swapi.dev/api/people` //made in to a const so I can reuse later if needed
  const [newData, setNewData] = useState([])

  useEffect(() => {
    axios.get(char_API)
    .then(res => {
      console.log(res.data)
      setNewData(res.data)
      return () => console.log('Cleanup');
    })
    .catch(err => console.log(err))
  })

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterList  chars={newData}/>
    </div>
  );
}


