import React from 'react';
import {Helmet} from 'react-helmet';

const Home = () => {
    return (
        <div className='Home'>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="home" />
            </Helmet>
            <div>
                <h2>добро пожаловать на наш сайт</h2>
            </div>
        </div>
    )
};

export default Home;