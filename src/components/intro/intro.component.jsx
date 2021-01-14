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
                        <p id="intro-name" className="add-spacing"><span className="underline">Akash</span> <span className="underline">Ambashankar</span></p>
                        <p>{getAge()} y/o<span className="add-spacing"> • </span>Computer Science Engineer</p>
                        <p>Web Developer</p>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}