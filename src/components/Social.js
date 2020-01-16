import React from 'react'

import IconGithub from '../img/icons/IconGithub'
import IconLinkedIn from '../img/icons/IconLinkedIn'
import IconCodepen from '../img/icons/IconCodepen'
import IconTwitter from '../img/icons/IconTwitter'

export default function social() {
    return (
        <ul className="ul--social">
            <li><a href="https://github.com/ActiveCodex" rel="noopener noreferrer" target="_blank" title="Github"><IconGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/ActiveCodex" rel="noopener noreferrer" target="_blank" title="LinkedIn"><IconLinkedIn /></a></li>
            <li><a href="https://codepen.io/ActiveCodex" rel="noopener noreferrer" target="_blank" title="Codepen"><IconCodepen /></a></li>
            <li><a href="https://twitter.com/ActiveCodex" rel="noopener noreferrer" target="_blank" title="Twitter"><IconTwitter /></a></li>
        </ul>
    )
}
