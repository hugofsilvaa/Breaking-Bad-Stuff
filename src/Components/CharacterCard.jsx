import React from 'react'
import './Character.css'

export default function CharacterCard({ character, deleteCharacter }) {
    return (
        <div className='CharacterCard'>
            <div className="image">
                <img src={character.img} alt={character.name}/>
            </div>
            <div className="text">
                <h2>{character.name}</h2>
                <p>{character.nickname}</p>
                <p>{character.status}</p>
            </div>
            <div>
            <button onClick={() => deleteCharacter(character.char_id)}>
                Delete
            </button>
            </div>

            

        </div>
    )
}
