import React from 'react';

export default function Socials() {
    const icons = [
        "fab fa-facebook-f",
        "fab fa-instagram",
        "fab fa-twitter",
        "fab fa-github",
        "fab fa-linkedin-in",
        "fab fa-medium-m",
        "fas fa-envelope",
    ]
    return(
        <div id="socials">
            {icons.map(iconName => (
                <span className="icon-border" key={iconName}>
                    <i className={iconName}></i>
                </span>
            ))}
        </div>
    )
}