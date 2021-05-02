import React, {useEffect} from 'react';
import {Grid, Container} from '@material-ui/core';
import Aos from 'aos';
import "aos/dist/aos.css";
import './interests.styles.css';

export default function Interests() {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, []);
    return (
        <div id="interests">
            <div className="section">
                <h2 className="sub-title long" data-aos="fade-up">Interests</h2>
                <Container>
                    <Grid container>
                        <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                            <h3 className="item-heading">Web Development</h3>
                        </Grid>

                        <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                            <h3 className="item-heading">Ethical Hacking</h3>
                        </Grid>


                        <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                            <h3 className="item-heading">Machine Learning</h3>
                        </Grid>

                        <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                            <h3 className="item-heading">Problem Solving</h3>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-left">
                            <hr/>
                        </Grid>

                        <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                            <h3 className="item-heading">Design</h3>
                            <p className="item-content">UI/UX Designing</p>
                            <p className="item-content">Video Editing / <a className="item-link" href="https://www.youtube.com/watch?v=CpDJye53FDI&t=1s">Montages</a></p>
                            <p className="item-content"><a className="item-link" href="https://www.instagram.com/serendipitous59/">Photography</a></p>
                        </Grid>

                        <Grid item xs={12} className="mobile-hr" data-aos="fade-right">
                            <hr/>
                        </Grid>

                        <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                            <h3 className="item-heading">Work Approach</h3>
                            <p className="item-content">Structured, Methodical</p>
                            <p className="item-content">Organized, Systematic</p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}