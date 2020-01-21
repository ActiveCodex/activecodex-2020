import React from 'react';

export default ({ id, data }) => {
    return (
        <>
            <section id={id}>
                <div className="container">
                    <div className="about__avatar">
                        <img alt={data.frontmatter.name} title={data.frontmatter.name} src={data.frontmatter.avatar.publicURL} />
                        <div>
                            <h2>{data.frontmatter.name}</h2>
                            <p>
                                {data.frontmatter.title}<br/>
                                {data.frontmatter.location}
                            </p>
                            <p><a className="btn btn--secondary" rel="noopener noreferrer" target="_blank" href="/resume/">View resume</a></p>
                        </div>
                    </div>
                    <div className="content" dangerouslySetInnerHTML={{ __html: data.html }} />
                </div>
            </section>
        </>
    )
};