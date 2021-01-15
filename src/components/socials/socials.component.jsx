import React from 'react';
import {socials} from '../../utilities/lists.js';
import {Grid} from '@material-ui/core';
import './socials.styles.css';

export default function Socials() {

    return(
        <Grid container id="socials">
            {socials.map(icon => (
                <Grid item xs={2} key={icon.name}>
                    <a href={icon.link}><i className={`social-icon ${icon.name}`}></i></a>
                </Grid>
            ))}
        </Grid>
    )
}