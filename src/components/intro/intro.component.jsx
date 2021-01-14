import React from 'react';
import official from '../../assets/images/Official.jpg';
import getAge from '../../utilities/age-calculator.js'
import {Grid, Typography} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import './intro.styles.css'

// background-image: linear-gradient(to right, #d7d2cc 0%, #304352 100%);

export default function Intro() {
    const history = useHistory();
    return (
        <Grid container id="intro">
            <Grid item xs={12} md={7} id="profile-picture-container">
                <img src={official} alt="Akash Ambashankar" onClick={() => history.push("/profile-picture")} id="profile-picture-closed" />
            </Grid>

            <Grid item xs={12} md={5}>
                <div className="content intro-content">
                    <p id="intro-name" className="add-spacing">Akash Ambashankar</p>
                    <p>{getAge()} y/o<span className="add-spacing"> • </span>Computer Science Engineer</p>
                    <p>Web Developer</p>
                </div>
            </Grid>
        </Grid>
    )
}