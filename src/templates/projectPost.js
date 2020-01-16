import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';

export default ({ data }) => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    const { date, title, url, archive, github, tech, images } = frontmatter;

    function renderButton(style, link, txt) {
        if (!link) {
            return null
        }
        return (
            <a className={style} rel="noopener noreferrer" target="_blank" href={link}>{txt}</a>
        )
    }

    function renderImages(title, images) {
        if (!images) {
            return null
        }
        return (
            images.map((image, i) =>
                <figure key={i}><img loading="lazy" alt={i} title={title + ' - Image ' + i} src={image.publicURL} /></figure>
            )
        )
    }

    return (
        <Layout id={'article'} title={title} description={title}>
            <article>
                <section>
                    <div className="container">
                        <time>{date}</time>
                        <h1>{title}</h1>
                    </div>
                    <div className="container">
                        <div>
                            <ul className="inline">
                                {tech.map((tech, i) =>
                                    <li key={i}>{tech}</li>
                                )}
                            </ul>
                        </div>
                        <div className="container__links">
                            {renderButton('btn btn--primary', url, 'Website')}
                            {renderButton('btn btn--secondary', github, 'Github')}
                            {renderButton('btn btn--secondary', archive, 'web.archive.org')}
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container">
                        <div dangerouslySetInnerHTML={{ __html: html }}></div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        {renderImages(title, images)}
                    </div>
                </section>
                <section className="container container__links">
                    <Link className="btn btn--primary" to="/projects/">Back to Projects</Link>
                    <a className="btn btn--secondary" href="#top">Back to top</a>
                </section>
            </article>
        </Layout>
    )
};

export const query = graphql`
    query ($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug} }) {
            frontmatter {
                images {
                    publicURL
                }
                date(formatString: "MMM YYYY")
                title
                url
                archive
                github
                tech
            }
            html
        }
    }
`;