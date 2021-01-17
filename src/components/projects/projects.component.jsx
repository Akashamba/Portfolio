import React, {useEffect} from 'react';
import {projects} from '../../utilities/lists.js';
import {Grid, Container} from '@material-ui/core';
import nokia from '../../assets/images/nokia.png';
import tracker from '../../assets/images/logo.png';
import telegram from '../../assets/images/telegram.webp';
import github from '../../assets/images/github.webp';
import Aos from 'aos';
import "aos/dist/aos.css";
import './projects.styles.css';

export default function Languages() {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, []);
    return (
        <div id="projects" className="section">
            <h2 className="sub-title" data-aos="fade-up">Projects</h2>
            <Container>
                <Grid container>
                    <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                        <h3 className="item-heading">Internship&nbsp;at M/s. Nokia&nbsp;Networks</h3>
                        <img src={nokia} alt="nokia logo" className="item-image"/>
                        <p className="item-content">Worked on <b>Web Development Projects</b></p>
                        <p className="item-content">using <b>React</b></p>
                        <p className="item-content">Learnt <b>collaborative</b> workflow</p>
                    </Grid>

                    <Grid item xs={12} className="mobile-hr" data-aos="fade-right">
                        <hr/>
                    </Grid>

                    <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                        <h3 className="item-heading">Coronavirus Tracker</h3>
                        <img src={tracker} alt="coronavirus tracker logo" className="item-image"/>
                        <p className="item-content">Tracks the spread of Covid-19 worldwide</p>
                        <p className="item-content">Clear Visualization of Data</p>
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

                    <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                        <h3 className="item-heading">Todo Web App</h3>
                        <p className="item-content"><b>Full Stack PWA</b> to manage daily tasks</p>
                        <p className="item-content">Easy to use and cross-platform</p>
                        <p className="item-content"><a className="item-link" href={projects[2].link}>{projects[2].name}</a></p>
                    </Grid>

                    <Grid item xs={12} className="mobile-hr" data-aos="fade-left">
                        <hr/>
                    </Grid>

                    <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                        <h3 className="item-heading">Telegram Chatbots</h3>
                        <p className="item-content">Chatbots built in Python to perform various functions</p>
                        <img src={telegram} alt="telegram logo" className="item-large-image"/>
                        <p className="item-content"><u>WordBot:</u> Meanings, synonyms, etc for words</p>
                        <p className="item-content"><u>TV Bot:</u> Movie and TV show details</p>
                    </Grid>

                    <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                    <h3 className="item-heading">Visit <a className="item-link" href="https://github.com/Akashamba">GitHub</a> for more projects</h3>
                    <div style={{height: '20%'}}></div>
                        <img src={github} style={{backgroundColor: "#fff", borderRadius: "50%"}} alt="github logo" className="item-large-image"/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}