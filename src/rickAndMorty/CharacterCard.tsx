import React from 'react';
import "./CharacterCard.css"

type Props = {
    name: string,
    img: string,
    origin: string,
}

function CharacterCard(props: Props) {
    return (
        <section>
            <h2>{props.name}</h2>
            <img src={props.img}/>
            <h3>{props.origin}</h3>
        </section>
    );
}

export default CharacterCard;