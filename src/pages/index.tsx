import React from 'react';
import { Redirect } from '@docusaurus/router';

export default function Home(): JSX.Element {
    return <Redirect to="/Front_Matter/About_the_Authors" />;
}
