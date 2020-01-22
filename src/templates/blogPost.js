import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../layouts';

export default ({ location, data }) => {
    const post = data.markdownRemark;
    return (
        <Layout location={location} id={'article'} title={post.frontmatter.title} description={post.frontmatter.title}>
            <section>
                <div className="container">
                    <article>
                        <time>{post.frontmatter.date}</time>
                        <h1>{post.frontmatter.title}</h1>
                    </article>
                </div>
            </section>
            <article>
                <div className="container content">
                    <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
                </div>
            </article>
            <div className="container container__links">
                <Link className="btn btn--primary" to="/blog/">Back to Blog</Link>
                <a className="btn btn--secondary" href="#top">Back to top</a>
            </div>
        </Layout>
    )
};

export const query = graphql`
    query ($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug} }) {
            frontmatter {
                date(formatString: "MMM YYYY")
                title
                hero {
                  publicURL
                }
            }
            html
        }
    }
`;