import React from 'react';
import IconScroll from '../../img/icons/IconScroll';

export default ({ id, data }) => {
    return (
        <section id={id}>
            <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
            <a href="#about" className="scroll"><IconScroll /></a>
        </section>
    )
};