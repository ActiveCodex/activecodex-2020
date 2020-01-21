import React from 'react';
import { Link } from 'gatsby';

import ActiveCodex from '../img/activecodex-logo.png';
import Nav from './Nav';
import Social from './Social';

export default function Menu() {
    return (
        <header>
            <Link to="/"><img alt="ActiveCodex" title="ActiveCodex" src={ActiveCodex} /></Link>
            <Nav />
            <Social />
        </header>
    )
}
