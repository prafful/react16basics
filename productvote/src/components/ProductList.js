import React from 'react';
import Product from './Product';

import feedback from '../data'

class ProductList extends React.Component {
    
    render() { 

        const product = feedback
        console.log(product)

        const sortedProduct = product.sort((a,b)=>(
             a.vote-b.vote
        ))
        
        const allproducts = sortedProduct.map((p)=>{
            return(
            <Product
                    key={p.id}
                    id={p.id}
                    title={p.title}
                    description={p.description}
                    url={p.url}
                    productImage={p.imageUrl}
                    avatarUrl={p.avatarUrl}
                    vote={p.vote}
            ></Product>
            )
        })

        return ( 
                
                        <div className="ui unstackable items">
                            {allproducts}
                        </div>
                 
         );
    }
}
 
export default ProductList;