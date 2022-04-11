import React, {useEffect} from 'react';
import {Grid, Container} from '@material-ui/core';
import Aos from 'aos';
import "aos/dist/aos.css";
import './experience.styles.css';

export default function Experience() {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, []);
    return (
        <div id="experience">
            <div className="section">
                <h2 className="sub-title long" data-aos="fade-up">Experience</h2>
                <Container>
                    <Grid container>
                        <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                            <h3 className="item-heading">Basik Marketing</h3>
                            <p className="item-content"><b>Software Engineering Intern</b></p>
                            <p className="item-content">Feb 2022 - Present</p>
                            <p className="item-content">Working with the platform development team for <b>The Esports Club</b> on the microfrontend architecture</p>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-left">
                            <hr/>
                        </Grid>
                        
                        <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                            <h3 className="item-heading">Solarillion Foundation</h3>
                            <p className="item-content"><b>Undergraduate Research Assistant</b></p>
                            <p className="item-content">Jan 2021 - Dec 2021</p>
                            <p className="item-content">Developed a Flight Delay Prediction Model. Worked on Citation Intent Classification</p>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-left">
                            <hr/>
                        </Grid>

                        <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                            <h3 className="item-heading">PALS: An Initiative by Alumni of IITs</h3>
                            <p className="item-content"><b>Software Engineering Intern</b></p>
                            <p className="item-content">Jan 2021 - Jun 2021 • 6 mos</p>
                            <p className="item-content">Developed a simulation of <b>Amplitude Modulation and Demodulation</b> Virtual Lab</p>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-right">
                            <hr/>
                        </Grid>

                        <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                            <h3 className="item-heading">Nokia Networks</h3>
                            <p className="item-content"><b>Software Engineering Intern</b></p>
                            <p className="item-content">Oct 2020 - Jan 2021 • 4 mos</p>
                            <p className="item-content">Developed the front-end of a web application used by the <b>NOKIA Warehouse.</b></p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}
