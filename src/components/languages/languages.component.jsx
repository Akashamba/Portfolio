import React, {useEffect} from 'react';
import {Grid, Container} from '@material-ui/core';
import Aos from 'aos';
import "aos/dist/aos.css";
import './languages.styles.css';

export default function Languages() {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, []);
    return (
        <div id="languages" className="section">
            <h2 className="sub-title long" data-aos="fade-up">Skills & Languages</h2>
            <Container>
                <Grid container>
                    <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                        <h3 className="item-heading">Web Development</h3>
                        <p className="item-content">Strong Foundation in <b>HTML, CSS, JS</b></p>
                        <p className="item-content">Practicing <b>React</b> through various projects</p>
                        <p className="item-content">Learning basics of <b>Node&nbsp;JS</b></p>
                    </Grid>
                    
                    <Grid item xs={12} className="mobile-hr" data-aos="fade-right">
                        <hr/>
                    </Grid>

                    <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                        <h3 className="item-heading">Git and GitHub</h3>
                        <p className="item-content">Able to <b>maintain software versions</b> using <b>git</b></p>
                        <p className="item-content">Collaborative Projects</p>
                    </Grid>
                    
                    <Grid item xs={12} className="mobile-hr" data-aos="fade-left">
                        <hr/>
                    </Grid>

                    <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                        <h3 className="item-heading">Progressive&nbsp;Web Apps (PWAs)</h3>
                        <p className="item-content">Able to design PWAs with React</p>
                        <p className="item-content"><b>powerful, effective, fast</b></p>
                        <p className="item-content"><b>cross-platform</b> apps on the web</p>
                    </Grid>
                    
                    <Grid item xs={12} className="mobile-hr" data-aos="fade-right">
                        <hr/>
                    </Grid>

                    <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                        <h3 className="item-heading">Python Programming</h3>
                        <p className="item-content">Knowledge of Python and Python modules</p>
                        <p className="item-content">including <b>Pandas, Flask</b></p>
                    </Grid>
                    
                    <Grid item xs={12} className="mobile-hr" data-aos="fade-left">
                        <hr/>
                    </Grid>

                    <Grid className="item-container" data-aos="fade-right" item xs={12} md={6}>
                        <h3 className="item-heading">Linux Terminal Commands</h3>
                        <p className="item-content">Operating a Linux Machine through the terminal</p>
                        <p className="item-content">An essential for <b>Security&nbsp;Engineering</b></p>
                        <p className="item-content"></p>
                    </Grid>
                    
                    <Grid item xs={12} className="mobile-hr" data-aos="fade-right">
                        <hr/>
                    </Grid>

                    <Grid className="item-container" data-aos="fade-left" item xs={12} md={6}>
                        <h3 className="item-heading">Communication</h3>
                        <p className="item-content">Well Spoken & Well&nbsp;Mannered</p>
                        <p className="item-content"></p>
                        <p className="item-content"><span style={{fontSize: '2rem', fontWeight: 'bold'}}>Clarity</span><br/>in <b>Words</b> & <b>Action</b></p>
                    </Grid>
                </Grid>
          </Container>
        </div>
    );
}
