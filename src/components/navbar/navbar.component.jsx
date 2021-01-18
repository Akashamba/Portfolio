import React, {useEffect} from 'react';
import {AppBar, Toolbar, Drawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {navigation} from '../../utilities/lists.js';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './navbar.styles.css';

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset / (document.body.offsetHeight - window.innerHeight))
                document.body.style.setProperty('--scroll', 1);
            else
                document.body.style.setProperty('--scroll', 0);
          }, false);
    })
    return(
        <AppBar position="fixed">
            <Toolbar>
                <p className="appbar-text">Akash</p>

                <div id="navigation">
                    {navigation.map(location => (
                        <AnchorLink key={location.link} className="nav-link" href={location.link}>{location.name}</AnchorLink>    
                    ))}
                    <a className="nav-link" href="https://drive.google.com/file/d/1XJBgbOUDEuJOl1dCwBOIwJDjydOt0Xfg/view?usp=sharing">Resume</a>
                </div>

                <MenuIcon id="menu-icon" onClick={() => setOpen(true)}/>
                <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                    {navigation.map(location => (
                        <AnchorLink key={location.link} className="nav-link side" onClick={() => setOpen(false)}
                                    href={location.link}>{location.name}</AnchorLink>    
                    ))}
                    <a className="nav-link side" href="https://drive.google.com/file/d/1XJBgbOUDEuJOl1dCwBOIwJDjydOt0Xfg/view?usp=sharing">Resume</a>
            </Drawer>
            </Toolbar>
        </AppBar>
    )
}