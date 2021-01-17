import React,{useEffect} from 'react';
import {Grid, Container} from '@material-ui/core';
import Aos from 'aos';
import "aos/dist/aos.css";
import './certifications.styles.css'

export default function Certifications() {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, []);
    return (
        <div id="certifications" className="section">
            <h2 className="sub-title long" data-aos="fade-up">Certifications and Recognitions</h2>
            <Container>
                <Grid container>
                    <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                        <h3 className="item-heading">Complete React Developer in 2021</h3>
                        <p className="item-content">w/ Redux, Hooks, GraphQL</p>
                        <p className="item-content"><a href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/" className="item-link">On Udemy</a></p>
                        <p className="item-content">In Progress</p>
                    </Grid>

                    <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                        <h3 className="item-heading">Web Design for Everybody Specialization</h3>
                        <p className="item-content">From the University of Michigan</p>
                        <p className="item-content">on Coursera</p>
                        <p className="item-content"><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/CQ6DZNM49XE4" className="item-link">View Certificate</a></p>
                    </Grid>

                    <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                        <h3 className="item-heading">Object-Oriented Design</h3>
                        <p className="item-content">From the University of Alberta</p>
                        <p className="item-content">on Coursera</p>
                        <p className="item-content"><a href="https://coursera.org/share/87e0b6110a5736bde9eeab0d216cbe8a" className="item-link">View Certificate</a></p>
                    </Grid>

                    <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                        <h3 className="item-heading">Research Paper Presentation Contest</h3>
                        <p className="item-content">Motion Microscope to detect Covid-19</p>
                        <p className="item-content">Runners Up</p>
                    </Grid>

                    <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                        <h3 className="item-heading">BEC Vantage Certification</h3>
                        <p className="item-content">From Cambridge English</p>
                        <p className="item-content">Certified in Business English Communication</p>
                        {/*<p className="item-content"><a href="https://coursera.org/share/87e0b6110a5736bde9eeab0d216cbe8a" className="item-link">View Certificate</a></p>*/}
                    </Grid>

                    <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                        <h3 className="item-heading">STEP Certification</h3>
                        <p className="item-content">from The Hindu Group</p>
                        <p className="item-content">Listening, Speaking, Reading and Writing skills in English</p>
                        <p className="item-content"><a href="https://assets.steptest.in/certificates/STEP-592605440935006485-20200129095622.pdf" className="item-link">View Certificate</a></p>
                    </Grid>

                    <Grid className="item-container" data-aos="fade-top" item xs={12}>
                        <p className="item-content">Visit <a href="https://www.linkedin.com/in/akash-ambashankar/" className="item-link">LinkedIn</a> for more certifications</p>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}