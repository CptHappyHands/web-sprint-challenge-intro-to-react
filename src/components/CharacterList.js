// Write your Character component here
import React from 'react'
import Character from './Character'

export default function CharEl(props) {
    const { chars } = props
    return (
        <div  className = 'body'>
            {chars.map(char => <Character key={char.name} newData={char}/>)}

        </div>
    )
}