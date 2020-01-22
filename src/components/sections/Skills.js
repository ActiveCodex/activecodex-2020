import React from 'react';

export default function Skills({ id, data }) {
    const { frontmatter, excerpt } = data;
    const { heading, focus, current, /*past*/ } = frontmatter;
    return (
        <section id={id}>
            <div className="container">
                <h2>{heading}</h2>
                <p className="subheading">{excerpt}</p>

                <p>Since November 2019, my focus has shifted and started learning:</p>
                <p><ul className="skills skills--focus inline">
                    {focus.map((skill, i) =>
                        <li key={i}>{skill}</li>
                    )}
                </ul></p>

                <p>but I'm currently really great at:</p>
                <p><ul className="skills skills--current inline">
                    {current.map((skill, i) =>
                        <li key={i}>{skill}</li>
                    )}
                </ul></p>
            </div>
        </section>
    )
}