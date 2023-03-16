import React from 'react'
import '../Styles/Nav.css'

export const Nav = () => {
    return (
        <nav className='ContainerNav'>
            <a className='NameLogo' href="#intro">Lucia Radwanski</a>
            <nav className='Nav'>
                <a className='Nava' href="#about">About</a>
                <a className='Nava' href="#skills">Skills</a>
                <a className='Nava' href="#projects">Projects</a>
                <a className='Nava' href="#certificate">Certificate</a>
                <a className='Nava' href="#skills">Contact</a>
            </nav>
        </nav>
    )
}
