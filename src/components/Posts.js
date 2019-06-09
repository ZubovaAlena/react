import React from 'react';
import {Helmet} from 'react-helmet';
import BrandLists from './BrandList';

function Posts() {
    const BrandList = [BrandLists][0];

    return (
        <div className='Posts'>
            <Helmet>
                <title>Posts</title>
                <meta name="description" content="posts" />
            </Helmet>
            <div>
                {BrandList.map((post) =>
                    <div key={post.slug}>
                        <h3>{post.title}</h3>
                        <img src={post.brand_logo_url}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Posts;