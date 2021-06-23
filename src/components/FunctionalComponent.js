import React from 'react'
import {useTheme, useThemeUpdate} from '../ThemeContext'

function FunctionalComponent() {
    
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()

    const themaStyle = {
        background: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <>
            <button onClick={toggleTheme}>Cambiar tema</button>
            <div style={themaStyle}>Function Theme</div>
        </>
    )
}


export default FunctionalComponent