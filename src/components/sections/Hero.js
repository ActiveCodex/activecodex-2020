import React from 'react';
import styled from 'styled-components';
import IconScroll from '../../img/icons/IconScroll';

const Hero = styled.section`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 120px;
    min-height: calc(100vh - 86px);
    padding: 0 15px;
`;

export default ({ id, data }) => {
    return (
        <Hero id={id}>
            <div>
                <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
                <br/>
                {/* <a className="scroll" href="#me"><IconScroll /></a> */}
                <span className="scroll"><IconScroll /></span>
            </div>
        </Hero>
    )
};