import React from 'react';
import '../Styles/Footer.css'

export const Footer = () => {
    return (
        <footer className='ContainerFooter'>
            <div className='Footer'>
                <div className='FooterContent'>
                    <p className='Pfooter'>© 2023 Lucia Radwanski | Full Stack Developer | Todos los derechos reservados.</p>
                </div>
                <div className='FooterNav'>
                    <ul className='Ul'>
                        <li className='Li'><a href="#about">About</a></li>
                        <li className='Li'><a href="#skills">Skills</a></li>
                        <li className='Li'><a href="#projects">Projects</a></li>
                        <li className='Li'><a href="#certificate">Certificates</a></li>
                        <li className='Li'><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
