import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

/* Sections */
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
// import Work from '../components/sections/Work';
import Timeline from '../components/sections/Timeline';
// import Experience from '../components/sections/Experience';
// import Certificates from '../components/sections/Certificates';
// import Education from '../components/sections/Education';
import Contact from '../components/sections/Contact';
// import { Hero, About, Skills, Experience, Work, Certificates, Education, Contact } from '@sections';

const IndexPage = ({ location, data }) => (
    <Layout id={'home'} title={'Home'}>
        <Hero id="hero" data={data.hero} />

        <nav className="nav--home">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#timeline">Timeline</a>
            <a href="#projects">Work</a>
            {/* <Link className="btn" to="#work">WORK</Link> */}
            {/* <Link className="btn" to="#experience">EXPERIENCE</Link> */}
            {/* <Link className="btn" to="#certificates">CERTIFICATES</Link> */}
            {/* <Link className="btn" to="#education">EDUCATION</Link> */}
            <a href="#contact">Contact</a>
        </nav>

        <About id="about" data={data.about} />
        <Skills id="skills" data={data.skills} />
        <Timeline id="timeline" timeline={data.timeline.edges} />
        <Projects id="projects" data={data.work} projects={data.projects.edges} blog={data.blog.edges} />
        {/* <Experience id="experience" nodes={data.experience.edges} />
        <Certificates id="certificates" nodes={data.certificates.edges} />
        <Education id="education" nodes={data.education.edges} /> */}
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
              date(formatString: "DD MMM YYYY")
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