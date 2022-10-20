import React, {useEffect, useState} from "react";
import CounterButtons from "./CounterButtons";
import ShowCounter from "./ShowCounter";


export default function Counter() {

    const [counter, setCounter] = useState<number>(0)
    const [countIncrease, setCountIncrease] = useState<boolean>(true)

    const count = () => {
        if (countIncrease === true){
            setCounter(counter+1)
        } else
            setCounter(counter-1)
    }

    const switchIncrease = () => {
        if(countIncrease === true) {
            setCountIncrease(false)
            return false
        }else {
            setCountIncrease(true)
            return true
        }

    }

    return (
        <footer>
            <CounterButtons callbackCount={count} switchIncrease={switchIncrease}/>
            <ShowCounter counter={counter}/>
        </footer>
    )
}

// <header>
//     <button onClick={switchCounter}>Switch Increase/Decrease</button>
//     <button onClick={increaseCount}>{buttonName}</button>
//     <h3>Anzahl Clicks: {counter}</h3>
// </header>