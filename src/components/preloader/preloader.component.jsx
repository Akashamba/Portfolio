import React from 'react';
import {ReactComponent as Loading} from '../../assets/images/preloader.svg';
import './preloader.styles.css';

export default function Preloader() {
    return(
        <div id="preloader-container">
            <div id="load-wrapper">
                <Loading/>
            </div>
        </div>
    )
}