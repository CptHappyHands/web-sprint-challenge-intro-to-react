import React, { useState } from 'react'
// import Button from './Button'
import styled from 'styled-components'

const StyledDiv = styled.div`
text-align: left;
`

const StyledButton = styled.button`
&:hover {transform: scale(1.15)
}
background-color: yellow;
text-align: left;
`
export default function Character( {newData}) {
    console.log(newData)
    
    const [open, setOpen] = useState(false)
    
    function toggle() {
        setOpen(wasOpened => !wasOpened)
    }
    return (
        
        <div className='character-name'>
            <StyledDiv>
            <h3>Name: {newData.name}<StyledButton>
            <button onClick={toggle}>+</button>
            </StyledButton></h3>
            </StyledDiv>
            <StyledDiv>
            {open && (
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
            )}
            </StyledDiv>
        </div>
    )
}