import React from 'react';
import { Link } from 'gatsby';
import Article from '../Article';

export default function Work({ id, projects, blog }) {
    return (
        <section id={id}>
            <div className="container container--lg">
                <h2>Work</h2>
                <p>
                    Much of my work has been for internal enterprise portals which naturally can't be shared with the public.
                    <br />Below you'll find some of my projects, personal notes and concepts using my skills and experience.
                </p>

                <h3>Projects</h3>
                <div className="projects">
                    {projects.map((data, i) => 
                        <div key={i}><Article data={data} /></div>
                    )}
                </div>

                <div className="container__links">
                    <Link className="btn btn--primary" to="/projects/">See more projects</Link>
                </div>

                <br />
                <br />
                
                <h3>Blog</h3>
                <div className="blog">
                    {blog.map((data, i) => 
                        <div key={i}><Article data={data} /></div>
                    )}
                </div>

                <div className="container__links">
                    <Link className="btn btn--primary" to="/blog/">See more posts</Link>
                </div>
            </div>
        </section>
    )
}
