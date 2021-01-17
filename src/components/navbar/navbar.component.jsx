import React from 'react';
import {AppBar, Toolbar, Drawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {navigation} from '../../utilities/lists.js';
import './navbar.styles.css';

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    return(
        <AppBar position="fixed">
            <Toolbar>
                <p className="appbar-text">Akash</p>

                <div id="navigation">
                    {navigation.map(location => (
                        <a key={location.link} className="nav-link" href={location.link}>{location.name}</a>    
                    ))}
                </div>

                <MenuIcon id="menu-icon" onClick={() => setOpen(true)}/>
                <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                    {navigation.map(location => (
                        <a key={location.link} className="nav-link side" onClick={() => setOpen(false)} href={location.link}>{location.name}</a>    
                    ))}
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}