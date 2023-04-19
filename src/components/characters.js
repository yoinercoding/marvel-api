import React, {useState, useEffect} from 'react'

const Characters = () => {

    // Estados
    const [character, setCharacter] = useState([])

    useEffect(() => {
        
        fetch('https://gateway.marvel.com/v1/public/characters?limit=100&offset=1000&ts=1&apikey=7fd6829ec8cfb0b586b532707b5fd01e&hash=bfa6d4a1d36b6069beff4df09974fb82')
            .then(response => response.json())
            .then(data => setCharacter(data.data.results))

    }, [])

    return (
        <div className="container">
            <div className="characters">
                {
                    character.map( item => (
                        <div className="box" key={item.id}>
                            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name}/>
                            <div className="character">
                                <h3 className="name">{item.name}</h3>
                            </div>
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}

export default Characters