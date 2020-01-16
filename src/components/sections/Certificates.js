import React from 'react';

export default function Certificates({ id, nodes }) {
    return (
        <section id={id}>
            <div className="container">
                <h2>Certificates</h2>
                <ul className="timeline">
                    {nodes.map(({ node }, i) => {
                        const { frontmatter } = node;
                        const { board, period, heading, url } = frontmatter;
                        return (
                            <li key={i}>
                                <time>{period}</time>
                                <h3><a href={url} rel="noopener noreferrer" target="_blank">{heading}</a></h3>
                                {board}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}