import React, {useEffect} from 'react';
import {projects} from '../../utilities/lists.js';
import {Grid, Container} from '@material-ui/core';
import Aos from 'aos';
import "aos/dist/aos.css";
import './projects.styles.css';

export default function Projects() {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, []);
    return (
        <div id="projects">
            <div className="section">
                <h2 className="sub-title" data-aos="fade-up">Projects</h2>
                <Container>
                    <Grid container>
                        <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                            <h3 className="item-heading">Single Sign-On Authentication System</h3>
                            <p className="item-content">Proposed a Single Sign-On Authentication System that uses Government IDs to authenticate users</p>
                            <p className="item-content">Patent filed under German Patent and Trademark Office</p>
                            <p className="item-content"><a className="item-link" href={projects[0].link}>Patent Certificate</a></p>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-right">
                            <hr/>
                        </Grid>
                        
                        <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                            <h3 className="item-heading">Dynamic Branch Predictor</h3>
                            <p className="item-content">Leading a team of three, in developing a Dynamic Branch Predictor using Deep Learning</p>
                            <p className="item-content">Working under the supervision of Dr.&nbsp;Chakraborty, NTNU, Trondheim, Norway</p>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-left">
                            <hr/>
                        </Grid>

                        <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                            <h3 className="item-heading">Flight Delay Prediction System</h3>
                            <p className="item-content">A Predictive Machine Learning Engine that can <b>classify delayed flights and predict their delay period</b></p>
                            <p className="item-content"><a className="item-link" href={projects[2].link}>Source Code</a></p>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-right">
                            <hr/>
                        </Grid>

                        <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                            <h3 className="item-heading">Coronavirus Tracker</h3>
                            <p className="item-content">A web app that tracks the spread of Covid-19 worldwide and provides useful data visualization</p>
                            <p className="item-content"><a className="item-link" href={projects[3].link}>{projects[3].name}</a></p>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-left">
                            <hr/>
                        </Grid>

                        <Grid className="item-container" data-aos="fade-right   " item xs={12} md={6}>
                            <h3 className="item-heading">Dictionary App</h3>
                            <p className="item-content">A <b>PWA</b> built on <b>Oxford API</b></p>
                            <p className="item-content"><b>Clean, Intuitive UI</b></p>
                            <p className="item-content"><a className="item-link" href={projects[4].link}>{projects[4].name}</a></p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}