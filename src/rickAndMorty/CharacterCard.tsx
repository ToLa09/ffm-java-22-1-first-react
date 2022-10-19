import React from 'react';
import "./CharacterCard.css"
import {CharacterModel} from "./CharacterModel";

function CharacterCard(props: {
    character: CharacterModel
}) {
    return (
        <section>
            <h2>{props.character.name}</h2>
            <img src={props.character.image} alt={"Rick and Morty Character"}/>
            <h3>{props.character.origin.name}</h3>
        </section>
    );
}

export default CharacterCard;