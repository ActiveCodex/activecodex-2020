import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout id={'article'} title={post.frontmatter.title} description={post.frontmatter.title}>
            <section>
                <div className="container">
                    <article>
                        <time>{post.frontmatter.date}</time>
                        <h1>{post.frontmatter.title}</h1>
                    </article>
                </div>
            </section>
            <div><img src={post.frontmatter.hero.publicURL} alt={post.frontmatter.title} title={post.frontmatter.title} /></div>
            <section>
                <div className="container content">
                    <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
                </div>
            </section>
            <section className="container container__links">
                <Link className="btn btn--primary" to="/blog/">Back to Blog</Link>
                <a className="btn btn--secondary" href="#top">Back to top</a>
            </section>
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