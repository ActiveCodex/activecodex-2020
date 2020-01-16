import React from 'react';
import styled from 'styled-components';

const Hero = styled.section`
    align-items: center;
    display: flex;
    min-height: calc(100vh - 86px);
    justify-content: center;
    padding: 0 15px;
`;

export default ({ id, data }) => {
    return (
        <Hero id={id}>
            <div>
                <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
                <br/>
                <a className="btn btn--secondary" href="#about">Scroll down</a>
            </div>
        </Hero>
    )
};