import React from 'react';
import './interests.styles.css';

export default function Interests() {
    return (
        <div className="content">
            <h2 className="sub-title">Interests</h2>
            <ul className="main-list">
                <li className="interest interest-bold">Web Development</li>
                <li className="interest interest-bold">Ethical Hacking</li>
                <li className="interest interest-bold">Machine Learning</li>
                <li className="interest interest-bold">Puzzles and Problem Solving</li>
                <li>
                    <span className="interest">Designing</span>
                    <ul className="sub-list">
                        <li className="interest">Frontend Web Dev.</li>
                        <li className="interest">Video Editing / <a href="https://www.youtube.com/watch?v=CpDJye53FDI&t=1s">Montages</a></li>
                        <li className="interest"><a href="https://www.instagram.com/serendipitous59/">Photography</a></li>
                    </ul>
                </li>
                <li>
                    <span className="interest interest-bold">Music</span>
                    <ul className="sub-list split-list">
                        <li className="interest">Eminem</li>
                        <li className="interest">Lil Uzi Vert</li>
                        <li className="interest">Juice Wrld</li>
                        <li className="interest">Metro Boomin</li>
                        <li className="interest">Future</li>
                        <li className="interest">Skrillex</li>
                    </ul>
                </li>
                <li>
                    <span className="interest interest-bold">Work Approach</span>
                    <ul className="sub-list split-list">
                        <li className="interest">Structured</li>
                        <li className="interest">Organized</li>
                        <li className="interest">Methodical</li>
                        <li className="interest">Systematic</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}