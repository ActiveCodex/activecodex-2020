import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import Article from '../components/Article';
import IconScroll from '../img/icons/IconScroll';

const BlogPage = ({ location, data }) => (
    <Layout location={location} id={'blog'} title={'Blog'} description={'Notes and concepts'}>
        <section>
            <div className="container">
                <h1>Notes and concepts</h1>
                <span className="scroll"><IconScroll /></span>
            </div>
        </section>
        <section id="articles">

            <div className="container container--lg">
                <div className="blog">
                    {data.allMarkdownRemark.edges.map((data, i) => {
                        const { node } = data;
                        const { frontmatter } = node;
                        const { date, tech, title, type, url } = frontmatter;
                        if (type === 'codepen') {
                            const imgUrl = url + '/image/large.png'
                            return (
                                <div key={i}>
                                    <article title={title}>
                                        <a rel="noopener noreferrer" target="_blank" href={url}>
                                            <div className="hero"><img src={imgUrl} alt={title} title={title} /></div>
                                            <time>{date}</time>
                                            <h3>{title}</h3>
                                            <ul className="inline">
                                                {tech.map((tech, i) =>
                                                    <li key={i}>{tech}</li>
                                                )}
                                            </ul>
                                        </a>
                                    </article>
                                </div>
                            )
                        }
                        else {
                            return <div key={i}><Article data={data} /></div>
                        }
                    })}
                </div>
            </div>
        </section>
    </Layout>
);

export default BlogPage;

export const query = graphql`
{
            allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {published: {eq: true}, type: {ne: "project"}}}) {
            edges {
            node {
            fields {
            slug
        }
        frontmatter {
            hero {
            publicURL
        }
        date(formatString: "MMM YYYY")
        title
        type
        tech
        url
      }
    }
  }
}
}
 
`
