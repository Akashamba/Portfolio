import React from 'react';
import './projects.styles.css';

export default function Languages() {
    const projects = [
        {name: 'Coronavirus Tracker', link: 'https://coronavirus-tracker-live.netlify.app/'},
        {name: 'Dictionary App', link: 'simple-dictionary.netlify.app'},
        {name: 'Mobile Calculator(PWA)', link: 'http://mobile-calculator.netlify.app/'},
        {name: 'Todo Web App', link: 'https://todoxapp.netlify.app/'},
        {name: 'Stan Lee Tribute Page', link: 'https://stanlee-tribute.netlify.app'},
        {name: 'Health Me', link: 'https://healthme.netlify.app/'},
    ]
    return (
        <div className="content">
            <h3 className="sub-title">Projects</h3>
            <ul className="main-list">
                {projects.map(project => (
                    <li key={project.name} className="project"><a className="project-link" href={project.link}>{project.name}</a></li>
                ))}
                <li className="project">Telegram Chatbots</li>
            </ul>
            
            <p>Checkout My <a className="project-link" href="https://github.com/Akashamba">GitHub</a> for more</p>
        </div>
    );
}