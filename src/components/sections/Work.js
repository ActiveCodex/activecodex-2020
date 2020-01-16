import React from 'react';
import { Link } from 'gatsby';

export default function Work({ id, nodes }) {
    return (
        <section id={id}>
            <div className="container">
                <h2>Work</h2>
                <p>
                    Much of my work has been for internal enterprise portals which naturally can't be shared with the public.
                    <br />Below you'll find some of my projects, personal notes and concepts using my skills and experience.
                </p>
                
                <div id="articles">
                    {nodes.map((data, i) => {
                        const { node } = data;
                        const { fields, frontmatter } = node;
                        const { slug } = fields;
                        const { date, image, tech, title } = frontmatter;
                        return (
                            <article key={i} title={slug}>
                                <Link to={slug}>
                                    <div className="hero"><img src={image.publicURL} alt={title} title={title} /></div>
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
                    })}
                </div>
                <div>
                    <Link className="btn btn--primary" to={url}>{cta}</Link>
                </div>
            </div>
        </section>
    )
}
