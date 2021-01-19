import React from 'react';
import official from '../../assets/images/Official.jpg';
import getAge from '../../utilities/age-calculator.js'
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
                        <p className="intro-sub-text">{getAge()} y/o<span className="add-spacing"> • </span>Web Developer</p>
                        <p className="intro-sub-text">Aspiring Security Engineer</p>
                        <br/>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}