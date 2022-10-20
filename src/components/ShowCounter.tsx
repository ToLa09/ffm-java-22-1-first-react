import React from 'react';

function ShowCounter(props: {
    counter: number
}) {
    return (
        <p>{props.counter}</p>
    );
}

export default ShowCounter;