import React from 'react';
import Product from './Product';

import feedback from '../data'

class ProductList extends React.Component {
    
    render() { 

        const product = feedback[0]
        console.log(product)

        return ( 
            <div className="ui unstackable items">
                <Product 
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    productImage={product.imageUrl}
                    avatarUrl={product.avatarUrl}
                />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
         );
    }
}
 
export default ProductList;