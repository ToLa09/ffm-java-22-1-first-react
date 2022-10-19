import React from 'react';
import CharacterCard from "./CharacterCard";
import "./CharacterGallery.css"
import {nanoid} from "nanoid";
import {CharacterModel} from "./CharacterModel";

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