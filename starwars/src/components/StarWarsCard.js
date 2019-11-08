import React from "react";
import styled from 'styled-components'

const CharacterBox = styled.div`
background-color: rgba(255,255,255,.4);
width: 37%;
padding: 1rem;
margin: 1.5rem;
`

const Media = styled.div`
img{
    width: 70%;
}
`

const starWarsCard = props => {
    return (
      
        <CharacterBox key={props.id}>
            <Media>
            <img src="https://cdn.dribbble.com/users/401403/screenshots/6431604/00_stormtrooper_800x600.jpg" alt="StormTrooper Profile"/>
            </Media>
         <h1>{props.name}</h1>
         <p>Birth Year: {props.birthyear} </p>
         <p> Height: {props.height}</p>
         <p>Mass: {props.mass}</p>
        </CharacterBox>
     
    );
  };
  
  export default starWarsCard;