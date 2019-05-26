import React from 'react';
import {Helmet} from 'react-helmet';

const Image = () => {
    return (
        <div className='Image'>
            <Helmet>
                <title>Image</title>
                <meta name="description" content="image" />
            </Helmet>
            <div>
                <img src="https://im0-tub-ru.yandex.net/i?id=1e12e9bd384e571bc70f162d1293355b&n=13&exp=1"/>
            </div>
        </div>
    )
};
export default Image;