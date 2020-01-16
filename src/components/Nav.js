import React from 'react';
import { Link } from 'gatsby';

export default function nav() {
    return (
        <nav>
            <Link activeClassName="active" to="/">About</Link>
            <Link activeClassName="active" to="/projects/">Projects</Link>
            <Link activeClassName="active" to="/blog/">Blog</Link>
        </nav>
    )
}
