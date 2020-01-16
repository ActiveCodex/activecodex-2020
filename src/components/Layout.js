import React from 'react';
import SEO from './SEO';
import Menu from './Menu';

import '../css/global.scss';

const Layout = ({ id, title, description, children }) => (
    <>
        <SEO title={title} descripiton={description} />
        <Menu />
        <main id={id}>
            {children}
        </main>
    </>
)

export default Layout;