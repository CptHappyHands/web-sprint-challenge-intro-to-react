import React from 'react'

export default function Character( {newData }) {
    console.log(newData)
    return (
        <div className='character-info'>
            <p>Height: {newData.height}</p>
            <p>Mass: {newData.mass}</p>
            <p>Hair Color: {newData.hair_color}</p>
            <p>Skin Color: {newData.skin_color}</p>
            <p>Eye Color: {newData.eye_color}</p>
            <p>Birth Year: {newData.birth_year}</p>
            <p>Gender: {newData.gender}</p>
            <p>Home World: {newData.homeworld}</p>
        </div>
    )
}