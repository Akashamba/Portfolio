import React from 'react';
import Intro from '../../components/intro/intro.component';
import {Container} from '@material-ui/core'
import './homepage.styles.css';

export default function Homepage(props) {
    return (
        <Container maxWidth="md" className="homepage">
            <Intro/>
            <ul>
                My Stuff
                <li><a href="https://coronavirus-tracker-live.netlify.app/">Coronavirus Live Tracker</a></li>
                <li><a href="https://stanlee-tribute.netlify.app/">Stan Lee Tribute Page</a></li>
                <li><a href="https://akash-writes.blogspot.com/">My Blog</a></li>
            </ul>
        </Container>
    )
}