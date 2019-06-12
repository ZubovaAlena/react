import React from 'react';
import {Helmet} from 'react-helmet';
import BrandLists from '../brands';
import { Link } from 'react-router-dom';


function Posts() {
    const brandList = [BrandLists][0];

    return (
        <div className='Posts'>
            <Helmet>
                <title>Posts</title>
                <meta name="description" content="posts" />
            </Helmet>
            <div>
                {brandList.map((post) =>
                    <div key={post.slug}>
                        <Link to={`/posts/${post.slug}`}>
                            {post.brand_logo_url === null ? <h3>{post.title}</h3> : <img src={post.brand_logo_url}/>}

                    </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Posts;