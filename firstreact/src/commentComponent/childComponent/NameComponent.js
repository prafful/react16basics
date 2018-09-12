import React from 'react';

class NameComponent extends React.Component {
   
    render() { 
        return ( <div>
              {this.props.name}  
        </div> );
    }
}
 
export default NameComponent;