import React from 'react';
import { Link } from 'gatsby';

export default function nav() {
    return (
        <nav>
            <Link activeClassName="active" to="/">Home</Link>
            <Link activeClassName="active" partiallyActive={true} to="/projects/">Projects</Link>
            <Link activeClassName="active" partiallyActive={true} to="/blog/">Blog</Link>
        </nav>
    )
}
