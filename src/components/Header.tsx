import React, {useState} from "react";
import "./css/Header.css"

export default function Header(props: {
    callback: (url: string) => void
    nextPage: () => string[]
    prevPage: () => string[]
}){
    let [nextPageNumber, setNextPageNumber] = useState<string>("2")

    function nextPage() {
        setNextPageNumber(props.nextPage()[1].split("=")[1])
    }

    function prevPage() {
        props.prevPage()
    }

    return <>
        <header>
            <h1>Rick and Morty App 9000</h1>
            <div>
                <button onClick={nextPage}>Seite {nextPageNumber}</button>
                <button onClick={prevPage}>Rückwärts</button>
            </div>
        </header>
    </>
}