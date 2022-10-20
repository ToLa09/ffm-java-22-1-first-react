import React, {useState} from "react";
import "./css/Header.css"

export default function Header(props: {
    getCharacters: (url: string) => void
    nextPage: () => void
    prevPage: () => void
}){
    // let [pageNumber, setPageNumber] = useState<number>(1)

    // function nextPage() {
    //     if (pageNumber < props.numberOfPages) {
    //         setPageNumber(pageNumber + 1)
    //     } else {
    //         setPageNumber(1)
    //     }
    //     props.getCharacters(pageNumber)
    // }
    //
    // function prevPage() {
    //     if(pageNumber > 1) {
    //         setPageNumber(pageNumber-1)
    //     } else {
    //         setPageNumber(props.numberOfPages)
    //     }
    //     props.getCharacters(pageNumber)
    // }

    const onChange = (event: any) => {
        props.getCharacters("https://rickandmortyapi.com/api/character/?name="+event.target.value)
    }


    return <>
        <header>
            <h1>Rick and Morty App 9000</h1>
            <div className="pageButtons">
                <button onClick={props.nextPage}>Nächste Seite</button>
                <button onClick={props.prevPage}>Vorherige Seite</button>
            </div>
            <h4>Name zum Filtern eingeben:</h4>
            <input type="text" onChange={onChange}/>
        </header>
    </>
}