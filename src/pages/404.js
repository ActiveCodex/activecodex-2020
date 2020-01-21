import React from 'react';
import Layout from '../layouts';
import styled from 'styled-components';

const Page = styled.section`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0;
    min-height: calc(100vh - 86px);
    padding: 0 15px;
`;

const Page404 = ({ location, data }) => (
    <Layout id={'error'} title={'Page not found!'} description={""}>
        <Page>
            <h1>Page not found!</h1>
        </Page>
    </Layout>
);

export default Page404;