import React from "react";
import { useState, useEffect } from "react"
import Player from "./Componenets/Player.jsx"
import './App.css';

function App() {
  
  const [songs, setSongs] = useState([
    {
      title: "Cough",
      artist: "Kizz Daniel",
      img_src: "./images/picsk.jpg",
      src: "./music/songsK.mp3"
    },
    
    {
      title: "Rush",
      artist: "Ayra Starr",
      img_src: "./images/picsA.jpg",
      src: "./music/songsA.mp3"
    },


    {
      title: "Electricity",
      artist: "Pheelz",
      img_src: "./images/picsP.jpg",
      src: "./music/songsP.mp3"
    }

  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)

  useEffect(() =>{
    setNextSongIndex(() =>{
      if(currentSongIndex + 1 > songs.length -1) {
        return 0;
      } else {
        return currentSongIndex + 1
      }
    });
  }, [currentSongIndex]);



  return (
    <div className="App">
      <Player
         currentSongIndex ={currentSongIndex}
         setCurrentSongIndex ={setCurrentSongIndex} 
         nextSongIndex={nextSongIndex}
         songs={songs}
        />
          
    </div>
  );
}

export default App;

