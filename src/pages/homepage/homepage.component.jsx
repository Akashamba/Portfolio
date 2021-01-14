import React from 'react';
import Intro from '../../components/intro/intro.component';
import Socials from '../../components/socials/socials.component';
import Languages from '../../components/languages/languages.component';
import Projects from '../../components/projects/projects.component';
import {Grid} from '@material-ui/core';
import './homepage.styles.css';

export default function Homepage() {
    return (
        <div>
            <Intro/>
            <br/><br/>
            <Socials/>
            <Grid id="lang-and-projects" container>
                <Grid className="lang-and-projects-item" item xs={12} md={6}>
                    <Languages/>
                </Grid>
                <Grid className="lang-and-projects-item" item xs={12} md={6}>
                    <Projects/>
                </Grid>

            </Grid>
        </div>
    )
}