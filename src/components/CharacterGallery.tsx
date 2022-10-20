import React from 'react';
import CharacterCard from "./CharacterCard";
import "./css/CharacterGallery.css"
import {nanoid} from "nanoid";
import {CharacterModel} from "../model/CharacterModel";

function CharacterGallery(props: {
    characters: CharacterModel[]
}) {
    return (
        <main>
            {
                props.characters.map(character => {
                    return <CharacterCard
                        character={character}
                        key={nanoid()}/>
                })
            }
        </main>
    );
}

export default CharacterGallery;