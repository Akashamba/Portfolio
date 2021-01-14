import React from 'react';
import official from '../../assets/images/Official.jpg';
import './photo.styles.css';

export default function Photo() {
    return (
        <div className="profile-picture-open-container">
            <img src={official} alt="Akash Ambashankar" className="profile-picture-open" />
        </div>
    )
}