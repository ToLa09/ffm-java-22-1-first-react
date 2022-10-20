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


  useEffect(() => {
      getCharacters("https://rickandmortyapi.com/api/character/")
  },[])

  const getCharacters = (url: string) => axios.get(url)
      .then(response => response.data)
      .then(data => {
        setCharacters(data.results)
        if (data.info.next != null) {
            console.log(data.info.next)
          setNextPage(data.info.next)
        }
        if (data.info.prev != null) {
            console.log(data.info.prev)
          setPreviousPage(data.info.prev)
        }
      })

    const renderNextPage = () => {
        getCharacters(nextPage)
        return [previousPage, nextPage]
    }

    function renderPrevPage() {
        getCharacters(previousPage)
        return [previousPage, nextPage]
    }

    return <>
    <Header callback={getCharacters} nextPage={renderNextPage} prevPage={renderPrevPage}/>
    <CharacterGallery characters={characters}/>
    <Counter/>
  </>
}

export default App;
