import React, { useState, useEffect } from 'react';
import './App.css';
import Meme from './components/Meme.jsx';

const meme_url = "https://api.imgflip.com/get_memes";
function App() {
  const [meme, setMeme] = useState();
  const getData = () => {
    fetch(meme_url)
      .then(response => response.json())
      .then(responsedata => setMeme(responsedata.data.memes[0]));
  };
  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="App">
      <Meme childMeme={meme}></Meme>
    </div>
  );
}

export default App;
