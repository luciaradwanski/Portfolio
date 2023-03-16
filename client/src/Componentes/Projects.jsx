import React from 'react';
import '../Styles/Projects.css'

export const Projects = () => {

    
    return (
        <div className='ContainerP'>
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
                        <p className='ParrafoP'>Desarrolle y diseñe junto a mis compañeros esta app, con login, carrito, reviews, mercado pago, perfil de usuario, perfil de admin. Tecnologías utilizadas: Node JS,  Express, Sequelize, PostgreSQL, React, Redux, antd, bootstrap, mercado pago, autenticación por terceros, ava Script, CSS, y HTML5</p>
                    </div>
                </section>
            </div>
        </div>
    )
}
