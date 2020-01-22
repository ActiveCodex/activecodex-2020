import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../layouts';

import Scrollspy from 'react-scrollspy';

/* Sections */
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Timeline from '../components/sections/Timeline';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

const IndexPage = ({ data }) => (
    <Layout id={'home'} title={'Home'}>
        <Hero id="hero" data={data.hero} />
        <blockquote><q>I'm a developer, entrepreneur, critical thinker, dreamer, traveller, human being, earthling &amp; anything else I ever decide I want to be.</q></blockquote>

        <nav>
            <Scrollspy
                items={["about", "skills", "timeline", "work", "contact"]}
                currentClassName="active"
                offset={-10}
            >
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#timeline">Timeline</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#top">▲</a></li>
            </Scrollspy>
        </nav>

        <About id="about" data={data.about} />
        <Skills id="skills" data={data.skills} />
        <Timeline id="timeline" timeline={data.timeline.edges} />
        <Projects id="work" data={data.work} projects={data.projects.edges} blog={data.blog.edges} />
        <Contact id="contact" nodes={data.contact.edges} />
    </Layout>
);

IndexPage.propTypes = {
    location: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  {
    hero: markdownRemark(fileAbsolutePath: {regex: "/hero/"}) {
      html
    }
    about: markdownRemark(fileAbsolutePath: {regex: "/about/"}) {
      frontmatter {
        heading
        name
        title
        location
        avatar {
            publicURL
          }
        resume
      }
      html
    }
    skills: markdownRemark(fileAbsolutePath: {regex: "/skills/"}) {
      frontmatter {
        heading
        focus
        current
        past
      }
      excerpt(format: PLAIN)
    }
    timeline: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/experience/|/education/|/certificates/"}}, sort: {fields: frontmatter___date, order: ASC}) {
        edges {
            node {
                frontmatter {
                path
                period
                title
                body
                url
                projecturl
                location
                type
                }
                html
            }
        }
    }
    work: markdownRemark(fileAbsolutePath: {regex: "/work/"}) {
        frontmatter {
            heading
            cta
            url
        }
        html
      }
    projects: allMarkdownRemark(filter: {frontmatter: {published: {eq: true}, type: {eq: "project"}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 2) {
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
            }
          }
        }
      }
    blog: allMarkdownRemark(filter: {frontmatter: {published: {eq: true}, type: {ne: "project"}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 2) {
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
              tech
            }
          }
        }
      }
    contact: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/contact/"}}) {
        edges {
          node {
            frontmatter {
              heading
              cta
              url
            }
            html
          }
        }
      }
  }
`;