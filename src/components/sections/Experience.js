import React from 'react';

export default function Experience(props) {
    const {
        id
        , nodes
    } = props

    return (
        <section id={id}>
            <div className="container">
                <h2>Experience</h2>
                <ul className="timeline timeline--event">
                    {nodes.map(({ node }, i) => {
                        const { frontmatter, html } = node;
                        const { period, title, url, type, company } = frontmatter;
                        return (
                            <li key={i}>
                                <time>{period}</time>
                                <h3>{title}</h3>
                                <p><a href={url} rel="noopener noreferrer" target="_blank">{company}</a> <small>- {type}</small></p>
                                <small dangerouslySetInnerHTML={{ __html: html }} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section >
    )
}