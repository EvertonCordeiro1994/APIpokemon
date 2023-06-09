import { useState, useRef } from 'react'
import { InputGroup, Button, Input, } from 'reactstrap'
import axios from 'axios'

export default function PokemonSearch() {
    const [searchTerm, setSearchTerm] = useState('')
    const [pokemonData, setPokemonData] = useState(null)
    const pageTopRef = useRef(null)



    const handleInputChange = (event) => setSearchTerm(event.target.value)

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
            setPokemonData(response.data)
        } catch (error) {
            console.error(error)
            setPokemonData(null)
        }
    }

    const upPage = () => pageTopRef.current.scrollIntoView({ behavior: 'smooth' })

    const handleButtonClick = () => {
        handleSearch()
        upPage()
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            handleButtonClick()
        }
    }


    return (
        <>
            {pokemonData && (
                <div ref={pageTopRef}>
                    <img style={{ width: '350' }} id='foto' src={pokemonData.sprites.front_default} />
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
            <InputGroup>
                <Input type="text" value={searchTerm} onChange={handleInputChange} onKeyPress={handleKeyPress} />
                <Button onClick={handleButtonClick} >Search</Button>

            </InputGroup>
        </>
    )
}