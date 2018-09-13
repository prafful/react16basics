import React from 'react';
import '../../node_modules/semantic-ui/dist/semantic.css'


class Product extends React.Component {
    
    

    render() {
        
       
        
        
        return ( <div className="item">
                    <div className="image">
                        <img src={this.props.productImage} />
                    </div>
                    <div className="middle aligned content">
                        <div className="description">
                            <a>{this.props.title}</a>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="extra">
                            <span>Submitted By:</span>
                            <img className="ui avatar image" src={this.props.avatarUrl}/>
                        </div>
                    </div>

                </div> );
    }
}
 
export default Product;