import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './scroll-arrow.styles.css';

export default function ScrollArrow() {
    return(
        <div id="scroll-arrow-container">
            <AnchorLink id="arrow" href="#languages"><i className="fas fa-angle-up"></i></AnchorLink>
        </div>
    )
}