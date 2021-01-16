import React from 'react';
import {AppBar, Toolbar, Drawer} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import './navbar.styles.css';

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    return(
        <AppBar position="fixed">
            <Toolbar>
                <p className="appbar-text">Akash</p>

                <div id="navigation">
                    <a edge="end" className="nav-link" href="#home">Home</a>
                    <a edge="end" className="nav-link" href="#languages">Skills & Languages</a>
                    <a edge="end" className="nav-link" href="#projects">Projects</a>
                    <a edge="end" className="nav-link" href="#interests">Interests</a>
                    <a edge="end" className="nav-link" href="#certifications">Certifications</a>
                </div>

                <MenuIcon id="menu-icon" onClick={() => setOpen(true)}/>
                <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                    <a edge="end" className="nav-link side" onClick={() => setOpen(false)} href="#home">Home</a>
                    <a edge="end" className="nav-link side" onClick={() => setOpen(false)} href="#languages">Skills & Languages</a>
                    <a edge="end" className="nav-link side" onClick={() => setOpen(false)} href="#projects">Projects</a>
                    <a edge="end" className="nav-link side" onClick={() => setOpen(false)} href="#interests">Interests</a>
                    <a edge="end" className="nav-link side" onClick={() => setOpen(false)} href="#certifications">Certifications</a>
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}