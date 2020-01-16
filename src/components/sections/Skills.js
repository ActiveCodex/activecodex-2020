import React from 'react';

export default function Skills({ id, data }) {
    const { frontmatter, excerpt } = data;
    const { heading, focus, current, /*past*/ } = frontmatter;
    return (
        <section id={id}>
            <div className="container">
                <h2>{heading}</h2>
                <p className="subheading">{excerpt}</p>

                <h3>Current focus</h3>
                <ul className="skills skills--focus inline">
                    {focus.map((skill, i) =>
                        <li key={i}>{skill}</li>
                    )}
                </ul>

                <h3>Good at</h3>
                <ul className="skills skills--current inline">
                    {current.map((skill, i) =>
                        <li key={i}>{skill}</li>
                    )}
                </ul>

                {/* <h3>Almost forgot</h3>
                <ul className="skills skills--past inline">
                    {past.map((skill, i) =>
                        <li key={i}>{skill}</li>
                    )}
                </ul> */}
            </div>
        </section>
    )
}