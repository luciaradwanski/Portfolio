import React from 'react';
import {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../Styles/Projects.css'
import {getAllProjects} from '../Redux/Actions/ProjectActions.js'
import {Card} from './Card'
export const Projects = () => {

    const dispatch = useDispatch()
    const proj = useSelector((state) => state.projects)
    useEffect(() => {
        dispatch(getAllProjects())
    }, [dispatch])
    
    return (
        <div className='ContainerP' id='projects'>
            <h2 className='TitleProject'>Projects</h2>
            <div className='ContainerProject'>
                <section>
                    <iframe src="https://player.vimeo.com/video/806930583?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=2e923e59b2" width="400" height="300" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    <div className='Video'>
                        <h4 className='NameP'>Rick and Morty</h4>
                        <hr />
                        <p className='ParrafoP'>Desarrolle y diseñe esta app de Rick and Morty, la misma tiene un Login, Home, Form, Detail, filtros y ordenamientos. Las tecnologías que utilice fueron: Node JS, Express, Sequelize, postgreSQL, React, Redux, Java Script, CSS, y HTML5.</p>
                    </div>
                </section>
                <section>
                    <iframe src="https://player.vimeo.com/video/806930583?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=2e923e59b2" width="400" height="300" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    <div className='Video'>
                        <h4 className='NameP'>PI Countries</h4>
                        <hr />
                        <p className='ParrafoP'>Desarrolle y diseñe esta app de países, la misma tiene un Loading, Home, Form, Detail, filtros y ordenamientos. Las tecnologías que utilice fueron: Node JS, Express, Sequelize, postgreSQL, React, Redux, Java Script, CSS, y HTML5.</p>
                    </div>
                </section>
                <section>
                    <iframe src="https://player.vimeo.com/video/806930583?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=2e923e59b2" width="400" height="300" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    <div className='Video'>
                        <h4 className='NameP'>PF Computer Store</h4>
                        <hr />
                        <p className='ParrafoP'>Desarrolle y diseñe junto a mis compañeros esta app, con login, carrito, reviews, mercado pago, perfil de usuario, perfil de admin. Tecnologías utilizadas: Node JS,  Express, Sequelize, PostgreSQL, React, Redux, antd, bootstrap, mercado pago, autenticación por terceros, ava Script, CSS, y HTML</p>
                    </div>
                </section>
            </div>
            {/* <div>
                {proj.map((p, index) => (
                    <Card
                        name={p.name}
                        description={p.description}
                        githubUrl={p.githubUrl}
                        demoUrl={p.demoUrl}
                        vimeoUrl={p.vimeoUrl}
                        key={index}
                    />
                    
                ))}
            </div> */}
        </div>
    )
}
