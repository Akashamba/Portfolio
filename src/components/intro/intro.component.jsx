import React from 'react';
import official from '../../assets/images/official.jpeg';
// import getAge from '../../utilities/age-calculator.js'
import {Grid, Container} from '@material-ui/core'
import './intro.styles.css'

export default function Intro() {
    return (
        <Container maxWidth="md" id="intro-container">
            <Grid container id="intro">
                <Grid item xs={12} md={7} id="profile-picture-container">
                    <div id="profile-picture-frame">
                        <img src={official} alt="Akash Ambashankar" id="profile-picture-closed" />
                    </div>
                </Grid>

                <Grid item xs={12} md={5}>
                    <div className="content intro-content">
                        <p id="intro-name" className="add-spacing">Akash Ambashankar</p>
                        {/*<p className="intro-sub-text">{getAge()} y/o<span className="add-spacing"> • </span>Web Development</p>*/}
                        <p className="intro-sub-text">Web Development<span className="add-spacing"> • </span>Machine Learning</p>
                        <p className="intro-sub-text" style={{paddingTop: "9px", fontWeight: "700"}}>Software Engineer</p>
                        <br/>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}