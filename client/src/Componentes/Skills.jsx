import React from 'react';
import '../Styles/Skills.css'
import {
    SiJavascript,
    SiCss3,
    SiTypescript,
    SiRedux,
    SiPostgresql,
    SiSequelize,
    SiExpress,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";


export const Skills = () => {
    return (
        <div className='ContainerSkills' id='skills'>
            <div>
                <h2 className='TitleSkills'>Skills</h2>
                <div className='Skills'>
                    <div>
                        <h5>Node.JS</h5>
                        <FaNodeJs />
                    </div>
                    <div>
                        <h5>PostgreSQL</h5>
                        <SiPostgresql />
                    </div>
                    <div>
                        <h5>Express</h5>
                        <SiExpress/>
                    </div>
                    <div>
                        <h5>Sequelize</h5>
                        <SiSequelize/>
                    </div>
                    <div>
                        <h5>Java Script</h5>
                        <SiJavascript/>
                    </div>
                    <div>
                        <h5>React</h5>
                        <FaReact/>
                    </div>
                    <div>
                        <h5>Redux</h5>
                        <SiRedux />
                    </div>
                    <div>
                        <h5>HTML5</h5>
                        <AiFillHtml5/>
                    </div>
                    <div>
                        <h5>CSS</h5>
                        <SiCss3/>
                    </div>
                    <div>
                        <h5>TypeScript</h5>
                        <SiTypescript/>
                    </div>
                </div>
            </div>
        </div>
    )
}
