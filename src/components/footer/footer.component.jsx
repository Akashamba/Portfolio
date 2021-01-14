import React from 'react';
import './footer.styles.css'

export default function Footer() {
    const resume = "https://drive.google.com/file/d/1J5WNIwbQi8iZHWczaliOyNtQQcNjoK0l/view?usp=sharing";
    return(
        <div id="footer">Find my resume <a className="project-link" href={resume}>here</a>.</div>
    )
}