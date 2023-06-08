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
            <h2>{pokemonData.name}</h2>
            <h6>ID: {pokemonData.id}</h6>
            <h6>Types:</h6>
            <ul>
              {pokemonData.types.map((typeInfo) => (
                <li key={typeInfo.slot}>{typeInfo.type.name}</li>
              ))}
            </ul>
            <h6>Moves:</h6>
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