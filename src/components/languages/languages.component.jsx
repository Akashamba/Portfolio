import React from 'react';

export default function Languages() {
    return (
        <div className="content">
            <h2 className="sub-title">Skills & Languages</h2>
            <ul className="main-list">
                <li className="main-item">
                    <span style={{fontWeight: 'bold'}}>Web Development</span>
                    <ul>
                        <li className="sub-item">HTML, CSS, JS</li>
                        <li className="sub-item">React</li>            
                        <li className="sub-item">Node JS</li>            
                    </ul>
                </li>
                <br/>
                <li className="main-item"><span style={{fontWeight: 'bold'}}>Progressive Web Apps (PWA)</span></li>
                <br/>
                <li className="main-item">
                    <span style={{fontWeight: 'bold'}}>Python Programming</span>
                    <ul>
                        <li className="sub-item">Flask</li>
                        <li className="sub-item">Pandas</li>            
                        </ul>
                </li>
                <br/>
                <li className="main-item"><span style={{fontWeight: 'bold'}}>Linux Terminal Commands</span></li>
            </ul>
        </div>
    );
}