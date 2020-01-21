import React from 'react';
import { Link } from 'gatsby';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

export default function Experience(props) {
    const {
        id
        , timeline
    } = props

    function renderLink(url, txt, classes, target) {
        if (url) {
            if (target) {
                return <a rel="noopener noreferrer" target="_blank" className={classes} href={url}>{txt}</a>
            }
            else {
                return <Link className={classes} to={url}>{txt}</Link>
            }
        }
        else if (!url && classes) {
            return null
        }
        else {
            return txt
        }
    }

    return (
        <section id={id}>
            <div className="container container--xl">
                <h2>Timeline</h2>

                <ul className="keys">
                    <li className="key key--experience"><span></span>Experience</li>
                    <li className="key key--education"><span></span>Education</li>
                    <li className="key key--certificate"><span></span>Certificate</li>
                </ul>

                <Tabs defaultIndex={8}>
                    <TabList className="timeline timeline--time">
                        <li data-path={'start'}><span className="dot"></span><span className="txt">Initial</span></li>
                        {timeline.map(({ node }, i) => {
                            const { frontmatter } = node;
                            const { path, body } = frontmatter;
                            return (
                                <Tab key={i} data-path={path}><span className="dot"></span><span className="txt">{body}</span></Tab>
                            )
                        })}
                    </TabList>
                    <div className="timeline timeline--event">
                        {timeline.map(({ node }, i) => {
                            const { frontmatter, html } = node;
                            const { path, period, title, url, projecturl, type, body } = frontmatter;
                            return (
                                <TabPanel key={i} data-path={path}>
                                    <time>{period}</time>
                                    <h3>{title}</h3>
                                    <p><b>{renderLink(url, body, '', true)}</b> <small>- {type}</small></p>
                                    <small dangerouslySetInnerHTML={{ __html: html }} />
                                    {renderLink(projecturl, 'View project', 'btn btn--secondary btn--sm')}
                                </TabPanel>
                            )
                        })}
                    </div>
                </Tabs>

            </div>
        </section >
    )
}