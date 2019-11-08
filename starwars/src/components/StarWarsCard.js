import React from "react";

const starWarsCard = props => {
    return (
      <div className="characterList" key={props.id}>

         <h1> Name: {props.name}</h1>
         <p>Birth Year: {props.birthyear} </p>
         <p> Height: {props.height}</p>
      </div>
    );
  };
  
  export default starWarsCard;