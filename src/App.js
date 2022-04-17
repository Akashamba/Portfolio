import { useState, useEffect } from 'react';
import Navbar from './components/navbar/navbar.component.jsx';
import Intro from './components/intro/intro.component';
import Socials from './components/socials/socials.component';
import Section from './components/section/section.component';
import Footer from './components/footer/footer.component';
import ScrollArrow from './components/scroll-arrow/scroll-arrow.component.jsx';
import ParticlesBg from 'particles-bg';
import {Container, useMediaQuery} from '@material-ui/core';
import Preloader from './components/preloader/preloader.component.jsx';
import './animations/load-in.css';
import { content } from './utilities/content.js';

function App() {
    const [load, setLoad] = useState(false);
    const md = useMediaQuery('(min-width:600px)');

    useEffect(() => {
        window.setTimeout(() => setLoad(true), 500);
    })
    
    if(load)
        return (
            <div className="App">
                <Navbar/>
                <div id="homepage">
                    <div id="intro-and-social">
                        <ParticlesBg type="cobweb" num={md?40:15} color="ffffff" bg={true} />
                        <Intro/>
                        <Socials/> 
                        <ScrollArrow/>
                    </div>
                    <Container className="container" style={{padding: '0'}} maxWidth="xl">               
                        {content.order.map((section, i) => {
                            return <Section key={i} data={content.sections[section]} /> 
                        })}
                    </Container>
                    <Footer/>
                </div>
            </div>
        );
    return (<Preloader/>)
}

export default App;
