import React from "react";

type GreetingsProps = {
    name: string
}

export default function Greetings(props: GreetingsProps) {
    return (
        <header>
            <h1>Willkommen {props.name}!</h1>
        </header>
    )
}