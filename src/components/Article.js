import React from 'react';
import { Link } from 'gatsby';

export default function Article({data}) {
    const { node } = data;
    const { fields, frontmatter } = node;
    const { slug } = fields;
    const { hero, date, title, tech } = frontmatter;
    const { publicURL } = hero;
    return (
        <article title={title}>
            <Link to={slug}>
                <div className="hero"><img src={publicURL} alt={title} title={title} /></div>
                <time>{date}</time>
                <h3>{title}</h3>
                <ul className="inline">
                    {tech.map((tech, i) =>
                        <li key={i}>{tech}</li>
                    )}
                </ul>
            </Link>
        </article>
    )
}