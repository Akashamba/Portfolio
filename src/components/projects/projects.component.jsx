import React, {useEffect} from 'react';
import {projects} from '../../utilities/lists.js';
import {Grid, Container} from '@material-ui/core';
import Aos from 'aos';
import "aos/dist/aos.css";
import './projects.styles.css';

export default function Languages() {
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
                            <h3 className="item-heading">Flight Delay Prediction System</h3>
                            <p className="item-content">A Predictive Machine Learning Engine that can <b>classify delayed flights and predict their delay period</b></p>
                            <p className="item-content"><a className="item-link" href={projects[5].link}>Source Code</a></p>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-right">
                            <hr/>
                        </Grid>

                        <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                            <h3 className="item-heading">Coronavirus Tracker</h3>
                            <p className="item-content">A web app that tracks the spread of Covid-19 worldwide and provides useful data visualization</p>
                            <p className="item-content"><a className="item-link" href={projects[0].link}>{projects[0].name}</a></p>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-left">
                            <hr/>
                        </Grid>

                        <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                            <h3 className="item-heading">Dictionary App</h3>
                            <p className="item-content">A <b>PWA</b> built on <b>Oxford API</b></p>
                            <p className="item-content"><b>Clean, Intuitive UI</b></p>
                            <p className="item-content"><a className="item-link" href={projects[1].link}>{projects[1].name}</a></p>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-right">
                            <hr/>
                        </Grid>

                        {/* <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                            <h3 className="item-heading">Todo Web App</h3>
                            <p className="item-content"><b>Full Stack PWA</b> to manage daily tasks</p>
                            <p className="item-content">Easy to use and cross-platform</p>
                            <p className="item-content"><a className="item-link" href={projects[2].link}>{projects[2].name}</a> (In Development)</p>
                        </Grid> */}

                        <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                            <h3 className="item-heading">Gympark Fitness Studio</h3>
                            <p className="item-content"><b>Stylish, Modern and Professional demo website</b></p>
                            <p className="item-content"><a className="item-link" href={projects[2].link}>{projects[2].name}</a></p>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-left">
                            <hr/>
                        </Grid>

                        <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                            <h3 className="item-heading">Telegram Chatbots</h3>
                            <p className="item-content">Chatbots built in Python to perform various functions</p>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-left">
                            <hr/>
                        </Grid>

                        <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                            <h3 id="visit-github" className="item-heading">Visit My <a className="item-link" href="https://github.com/Akashamba">GitHub</a> for more projects</h3>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}