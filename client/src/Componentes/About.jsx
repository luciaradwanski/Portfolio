import React from 'react'
import '../Styles/About.css'
export const About = () => {
    return (
        <section id='about'>
            <div className='ContainerHome'>
                <div className='ContainerLinkedin'>
                    <a className='IconH' href="https://www.linkedin.com/in/lu-radwanski/"><i className="uil uil-linkedin"></i></a>
                    <a className='IconH' href="https://github.com/luciaradwanski"><i className="uil uil-github-alt"></i></a>
                </div>
                <div className='Info'>
                    <img className='ImageH' src="https://media.licdn.com/dms/image/D4D03AQHGKUwr-k9_yw/profile-displayphoto-shrink_400_400/0/1678743229624?e=1684368000&v=beta&t=kIkIWXRzCG9PH14pUuNwoex7ouWj_zR_LyD7RPUypZk" alt=""/>
                    <div>
                        <h1>Hello There!! I'm</h1>
                        <h1>Lucia Radwanski</h1>
                        <p>Full Stack Developer</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
