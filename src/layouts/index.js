import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';

import '../css/global.scss';

const Layout = ({ id, title, description, children }) => (
    <div id="top">
        <SEO title={title} descripiton={description} />
        <Header />
        <main id={id}>
            {children}
        </main>
    </div>
)

export default Layout;