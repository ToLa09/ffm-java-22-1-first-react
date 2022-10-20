import React, {useEffect, useState} from 'react';

function CounterButtons(props: {
    callbackCount: () => void,
    switchIncrease: () => boolean,
}) {
    let [buttonName, setButtonName] = useState<string>("Increase");

    function switchIncrease() {
        const increase = props.switchIncrease()
        if (increase) {
            setButtonName("Increase")
        } else {
            setButtonName("Decrease")
        }
    }

    return (
        <>
            <button onClick={props.callbackCount}>{buttonName}</button>
            <button onClick={switchIncrease}>Switch</button>
        </>
    );
}

export default CounterButtons;