import React from 'react';
import './interests.styles.css';

export default function Interests() {
    return (
        <div className="content">
            <h2 className="sub-title">Interests</h2>
            <ul className="main-list">
                <li className="interest">Web Development</li>
                <li className="interest">Ethical Hacking</li>
                <li className="interest">Machine Learning</li>
                <li className="interest">Puzzles and Problem Solving</li>
                <li className="interest">
                    Designing
                    <ul className="sub-list">
                        <li className="interest">Frontend Web Dev.</li>
                        <li className="interest">Video Editing / <a href="https://www.youtube.com/watch?v=-I4gTr_keaE&t=14s">Montages</a></li>
                        <li className="interest"><a href="https://www.instagram.com/serendipitous59/">Photography</a></li>
                    </ul>
                </li>
                <li className="interest">
                    <span style={{width: '100%'}}>Music</span>
                    <ul className="sub-list" id="artist-list">
                        <li className="interest">Eminem</li>
                        <li className="interest">Lil Uzi Vert</li>
                        <li className="interest">Juice Wrld</li>
                        <li className="interest">Metro Boomin</li>
                        <li className="interest">Future</li>
                        <li className="interest">Skrillex</li>
                    </ul>
                </li>
                <li className="interest">Keeping things Organized and Systematic</li>
            </ul>
        </div>
    )
}