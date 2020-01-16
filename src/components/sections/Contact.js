import React from 'react';

export default function Contact({ id, nodes }) {
    const { frontmatter, html } = nodes[0].node;
    const { cta, heading, url } = frontmatter;
    return (
        <section id={id}>
            <div className="container">
                <h2>{heading}</h2>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <a className="btn btn--primary" href={url}>{cta}</a>
            </div>
        </section>
    )
}