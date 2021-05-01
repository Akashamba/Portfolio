import React from 'react';
import logo from '../../assets/images/logo-t.png';
import {footer, socials} from '../../utilities/lists.js';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './footer.styles.css'

export default function Footer() {
    const url = "akashamba.netlify.app";
    return(
        <div id="footer">
            <p>
                <AnchorLink href={footer.home} className="footer-link">Home</AnchorLink> 
                &nbsp; | &nbsp; 
                <a href={footer.resume} className="footer-link">Resumé</a> 
                &nbsp; | &nbsp;
                <a href={footer.phone} className="footer-link">Phone</a> 
                &nbsp; | &nbsp; 
                <a href={footer.email} className="footer-link">E-mail</a>                 
                &nbsp; | &nbsp; 
                <a href={footer.feedback} className="footer-link">Feedback</a>                                 
            </p>
            <br/>
            <a href="/" className="footer-link">{url}</a>
            <br/><br/>
            <img src={logo} alt="Akash Ambashankar Logo" className="footer-logo" />
            <p className="footer-logo-text">The Pentriangle</p>
            <p> &copy; <a href="/" className="footer-link">Akash Ambashankar</a></p>
            
            <p>
                {socials.map(icon => (
                        <a key={icon.name} href={icon.link}><i className={`footer-icon ${icon.name}`}></i></a>
                ))}
            </p>
            <br/><br/>
            <p class="quote">"a good listener is always a good learner."</p>
        </div>
    )
}
