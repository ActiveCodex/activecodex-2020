import React from 'react';
import IconScroll from '../../img/icons/IconScroll';

export default ({ id, data }) => {
    return (
        <section id={id}>
            <div>
                <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
                <br/>
                <span className="scroll"><IconScroll /></span>
            </div>
        </section>
    )
};