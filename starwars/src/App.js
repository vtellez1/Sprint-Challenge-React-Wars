import React, { useState, useEffect } from "react";
import './App.css';
import StarWarsCard from "./components/StarWarsCard";
import Header from "./components/Header";
import axios from "axios";
import styled from 'styled-components'

const CharacterInfo = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-around;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [character, setCharacter] = useState([]);

    useEffect(() => {
      axios
      .get(`https://lambda-swapi.herokuapp.com/api/people/`)
      .then(response => {
          console.log(response.data.results);
          const character = response.data.results;
          setCharacter(character);
      })
      .catch(error => {
          console.log( error);
      });
  }, []);

  return (
    <div className="App">
      <Header/>
      <h1 className="PageTitle">React Wars</h1>
      <CharacterInfo>
          {character.map(item => {
            console.log(item.name);
            return <StarWarsCard 
            key= {character.id} 
            name={item.name} 
            height={item.height}
            birthyear={item.birth_year}
            mass={item.mass}/>}
        )};
    </CharacterInfo>
    </div>
  );
};

export default App;
