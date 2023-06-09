import { useState, useRef } from 'react'
import { InputGroup, Button, Input, } from 'reactstrap'
import { Icon } from '@iconify/react';
import axios from 'axios'

export default function PokemonSearch() {
    const [searchTerm, setSearchTerm] = useState('')
    const [pokemonData, setPokemonData] = useState(null)
    const pageTopRef = useRef(null)



    const handleInputChange = (event) => setSearchTerm(event.target.value)

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
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
                <div className='m-per' ref={pageTopRef}>
                    <img  id='foto' src={pokemonData.sprites.front_default} style={{width: '150px', height: '150px' }} />
                    <h1>{pokemonData.name}</h1>
                    <h3>ID: {pokemonData.id}</h3>
                    <img src="https://fontmeme.com/permalink/230609/aec8eed3816d2a0f04764304669b2424.png" alt="pokemon-font" border="0"/>
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
                <Input className='input' type="text" value={searchTerm} onChange={handleInputChange} onKeyPress={handleKeyPress} />
                <Button className='btn' onClick={handleButtonClick} >
                    <Icon className='icn' icon="fluent:search-12-filled" />
                </Button>

            </InputGroup>
            <div style={{ height: '2rem' }}></div>
        </>
    )
}