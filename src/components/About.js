import React from 'react';
import {Helmet} from 'react-helmet';

const About = () => {
    return (
        <div className='About'>
            <Helmet>
                <title>About</title>
                <meta name="description" content="about" />
            </Helmet>
            <div>
                <h2>React-route</h2>
            </div>
        </div>
    )
};

export default About;