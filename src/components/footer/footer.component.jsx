import React from 'react';
import {footer, socials} from '../../utilities/lists.js';
import './footer.styles.css'

export default function Footer() {
    const url = "akashamba.netlify.app";
    return(
        <div id="footer">
            <p>
                <a href={footer.home} className="footer-link">About</a> 
                &nbsp; | &nbsp; 
                <a href={footer.resume} className="footer-link">Resume</a> 
                &nbsp; | &nbsp;
                <a href={footer.phone} className="footer-link">Phone</a> 
                &nbsp; | &nbsp; 
                <a href={footer.email} className="footer-link">Email</a>                 
                &nbsp; | &nbsp; 
                <a href={footer.feedback} className="footer-link">Feedback</a>                                 
            </p>
            <br/>
            <a href="/" className="footer-link">{url}</a>
            <br/><br/>
            <p> &copy; <a href="/" className="footer-link">Akash Ambashankar</a></p>
            
            <p>
                {socials.filter(icon => icon.name !== 'fas fa-envelope').map(icon => (
                        <a key={icon.name} href={icon.link}><i className={`footer-icon ${icon.name}`}></i></a>
                ))}
                <a key="fab fa-whatsapp" href="https://wa.me/+917397705666"><i className={'footer-icon fab fa-whatsapp'}></i></a>
            </p>
            <br/><br/>
        </div>
    )
}

// about resume mail email
// social icons