import React from 'react';
import BrandLists from '../brands';

function ItemDetail({ match }) {
    const brandList = [BrandLists][0];
    const item = brandList.find(({ slug }) => slug === match.params.slug);

    return (
       <div>
           <h3>{item.title}</h3>
           <img src={item.brand_logo_url}/>
       </div>
   )
}
export default ItemDetail;