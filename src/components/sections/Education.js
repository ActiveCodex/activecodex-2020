import React from 'react';

export default function Education({ id, nodes }) {
    return (
        <section id={id}>
            <div className="container">
                <h2>Education</h2>
                <ul className="timeline">
                    {nodes.map(({ node }, i) => {
                        const { frontmatter } = node;
                        const { period, school, title, url } = frontmatter;
                        return (
                            <li key={i}>
                                <time>{period}</time>
                                <h3>{title}</h3>
                                <a href={url} rel="noopener noreferrer" target="_blank">{school}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}