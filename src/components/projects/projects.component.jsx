import React from 'react';
import {projects} from '../../utilities/lists.js';
import './projects.styles.css';

export default function Languages() {
    return (
        <div className="content">
            <h2 className="sub-title">Projects</h2>
            <ul className="main-list">
                <li className="project">Internship at M/s. Nokia Networks</li>
                {projects.map(project => (
                    <li key={project.name} className="project"><a className="project-link" href={project.link}>{project.name}</a></li>
                ))}
                <li className="project">Telegram Chatbots</li>
            </ul>
            <br/>
            <p className="visit-for-more">Visit <a className="project-link" href="https://github.com/Akashamba">GitHub</a> for more projects</p>
        </div>
    );
}