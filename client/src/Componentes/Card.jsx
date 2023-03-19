import React from 'react'

import '../Styles/Projects.css'
/*<iframe src="https://player.vimeo.com/video/806930583?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=2e923e59b2" width="400" height="300" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */
/* name, description, githubUrl, demoUrl, vimeoUrl */
export const Card = ({name, description, githubUrl, demoUrl, vimeoUrl}) => {
    return (
        <div className='Card'>
            {/* <iframe src="https://player.vimeo.com/video/806930583?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=2e923e59b2" width="400" height="300" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
             */}
            <a href={vimeoUrl}></a>
            <div className='Video'>
                <h4 className='NameP'>{name}</h4>
                <p className='ParrafoP'>{description}</p>
                <div>
                    <a href={githubUrl}>GitHub{" "}</a>
                    <a href={demoUrl}>Deploy{" "}</a>
                </div>
            </div>
        </div>
    )
}
