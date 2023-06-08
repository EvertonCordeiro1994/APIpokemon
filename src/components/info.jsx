import { useState } from 'react'
import { Button, Input, } from 'reactstrap'
import axios from 'axios'

export default function PokemonSearch(){
    const [searchTerm, setSearchTerm] = useState('')
    const [pokemonData, setPokemonData] = useState(null)
  
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value)
    }
  
    const handleSearch = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
        setPokemonData(response.data)
      } catch (error) {
        console.error(error)
        setPokemonData(null)
      }
    }
  
    return (
      <>
        <Input type="text" value={searchTerm} onChange={handleInputChange} />
        <Button onClick={handleSearch}>Search</Button>
  
        {pokemonData && (
          <div>
            <img src={pokemonData.sprites.front_default}/>
            <h1>{pokemonData.name}</h1>
            <h6>ID: {pokemonData.id}</h6>
            <h2>Types</h2>
            <ul>
              {pokemonData.types.map((typeInfo) => (
                <li key={typeInfo.slot}>{typeInfo.type.name}</li>
              ))}
            </ul>
            <h2>Moves</h2>
            <ul>
              {pokemonData.moves.map((moveInfo) => (
                <li key={moveInfo.slot}>{moveInfo.move.name}</li>
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }