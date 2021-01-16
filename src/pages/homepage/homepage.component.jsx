import React from 'react';
import Intro from '../../components/intro/intro.component';
import Socials from '../../components/socials/socials.component';
import Languages from '../../components/languages/languages.component';
import Projects from '../../components/projects/projects.component';
import Footer from '../../components/footer/footer.component';
import Certifications from '../../components/certifications/certifications.component';
import Interests from '../../components/interests/interests.component';
import {Container} from '@material-ui/core';
import './homepage.styles.css';

export default function Homepage() {
    return (
        <div id="homepage">
            <div id="intro">
                <Intro/>
                <br/><br/>
                <Socials/> 
            </div>
            <Container className="container" style={{padding: '0'}} maxWidth="lg">
                                    
                <Languages/>                    
                <Projects/>                    
                <Interests/>                    
                <Certifications/>                                    
            </Container>
            <Footer/>
        </div>
    )
}