import React from 'react';
import { Link } from 'gatsby';
import Nav from './Nav';
import Social from './Social';
import ActiveCodex from '../img/activecodex-logo.png';

export default function Menu() {
    return (
        <header>
            <Link to="/"><img alt="ActiveCodex" title="ActiveCodex" src={ActiveCodex} /></Link>
            <Nav />
            <Social />
        </header>
    )
}
