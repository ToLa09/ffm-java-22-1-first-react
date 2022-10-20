import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import CharacterGallery from "./components/CharacterGallery";
import Counter from "./components/Counter";
import axios from "axios";
import {CharacterModel} from "./model/CharacterModel";

function App() {

  const [characters, setCharacters] = useState<CharacterModel[]>([])
    const [nextPage, setNextPage] = useState<string>("https://rickandmortyapi.com/api/character/")
    const [previousPage, setPreviousPage] = useState<string>("https://rickandmortyapi.com/api/character/")
    const [numberOfPages, setNumberOfPages] = useState<number>(2)


  useEffect(() => {
      getCharacters("https://rickandmortyapi.com/api/character/")
  },[])

  const getCharacters = (url: string) => {
      axios.get(url)
          .then(response => response.data)
          .then(data => {
              setCharacters(data.results)
              setNumberOfPages(data.info.pages)
              if (data.info.next != null) {
                  // console.log("set next: "+data.info.next)
                  setNextPage(data.info.next)
              } else setNextPage(url)
              if (data.info.prev != null) {
                  // console.log("set prev: "+data.info.prev)
                  setPreviousPage(data.info.prev)
              } else setPreviousPage(url)
          })
    }

    const renderNextPage = () => {
        getCharacters(nextPage)
        // console.log("next: "+nextPage)
        // return [previousPage, nextPage]
    }

    function renderPrevPage() {
        getCharacters(previousPage)
        // console.log("prev: "+previousPage)
        // return [previousPage, nextPage]
    }

    return <>
    <Header getCharacters={getCharacters} nextPage={renderNextPage} prevPage={renderPrevPage}/>
    <CharacterGallery characters={characters}/>
    <Counter/>
  </>
}

export default App;
