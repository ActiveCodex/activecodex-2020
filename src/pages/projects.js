import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts';
import Article from '../components/Article';

const ProjectPage = ({ data }) => (
    <Layout id={'project'} title={'Projects'} description={"Some of my projects"}>
        <section>
            <div className="container container--xl">
                <h1>Some of my projects</h1>
                <p>
                    Much of my work has been for internal enterprise portals which naturally can't be shared with the public.
                    <br />Below you'll find some of my commercial and personal projects using my skills and experience.
                </p>
            </div>
        </section>
        <div id="articles">
            {data.allMarkdownRemark.edges.map((data, i) =>
                <section key={i}><Article data={data} /></section>
            )}
        </div>
    </Layout>
);

export default ProjectPage;

export const query = graphql`
{
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {published: {eq: true}, type: {eq: "project"}}}) {
        edges {
            node {
              fields {
                slug
              }
              frontmatter {
                hero {
                    publicURL
                }
                date(formatString: "YYYY")
                title
                tech
                url
                archive
                github
              }
            }
          }
    }
  }
  
`
