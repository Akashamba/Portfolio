import React from 'react';
import {Grid} from '@material-ui/core';
import './socials.styles.css';

export default function Socials() {
    const icons = [
        {name: "fab fa-instagram", link: "https://www.instagram.com/_akashamba_/"},
        {name: "fab fa-twitter", link: "https://twitter.com/akashamba238"},
        {name: "fab fa-github", link: "https://github.com/Akashamba"},
        {name: "fab fa-linkedin-in", link: "https://www.linkedin.com/in/akash-ambashankar/"},
        {name: "fab fa-medium-m", link: "https://akashambashankar.medium.com/"},
        {name: "fas fa-envelope", link: "mailto:akashambashankar@gmail.com"}
    ]
    return(
        <Grid container id="socials">
            {icons.map(icon => (
                <Grid item xs={2} key={icon}>
                    <a href={icon.link}><i className={`social-icon ${icon.name}`}></i></a>
                </Grid>
            ))}
        </Grid>
    )
}