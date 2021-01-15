import React from 'react';
import './certifications.styles.css'

export default function Certifications() {
    return (
        <div className="content">
            <h2 className="sub-title">Certifications and Recognitions</h2>
            <ul className="main-list">
                <li className="certification">
                    <span style={{fontWeight: 'bold'}}>Web Design for Everybody Specialization</span>
                    <span className="university">University of Michigan</span>
                    <a className="certification-link" href="https://www.coursera.org/account/accomplishments/specialization/certificate/CQ6DZNM49XE4">View Certificate</a>
                </li>
                <br/>
                <li className="certification">
                    <span style={{fontWeight: 'bold'}}>Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)</span>
                    <span className="university"><a className="certification-link" href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/">Udemy</a></span>
                    <span>In Progress</span>
                </li>
                <br/>
                <li className="certification">
                    <span style={{fontWeight: 'bold'}}>Object-Oriented Design</span>
                    <span className="university">University of Alberta</span>
                    <a className="certification-link" href="https://coursera.org/share/87e0b6110a5736bde9eeab0d216cbe8a">View Certificate</a>
                </li>
                <br/>
                <li className="certification">
                    <span style={{fontWeight: 'bold'}}>Interdepartmental Paper Presentation Contest</span>
                    <span className="university">Runner Up</span>
                </li>
                <br/>
                {/*<li className="certification">
                    <span style={{fontWeight: 'bold'}}>Problem Solving (Basic) Certificate</span>
                    <span className="university">HackerRank</span>
                    <a className="certification-link" href="https://www.hackerrank.com/certificates/908bb94902e0">View Certificate</a>
                </li>
                <br/>
                <li className="certification">
                    <span style={{fontWeight: 'bold'}}>Step Certification</span>
                    <span className="university">STEP from The Hindu Group</span>
                    <a className="certification-link" href="https://assets.steptest.in/certificates/STEP-592605440935006485-20200129095622.pdf">View Certificate</a>
                </li>*/}   

                <p>Checkout My <a href="https://www.linkedin.com/in/akash-ambashankar/" className="more-certification-link">LinkedIn</a> for more</p>
            </ul>
        </div>
    )
}