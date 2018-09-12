import React from 'react';

class DisplayUser extends React.Component {
    
    render() { 
        return ( 
                    <tr>
                        <td>{this.props.id}</td> 
                        <td>{this.props.name}</td> 
                        <td>{this.props.email}</td>
                    </tr> 
                 );
    }
}
 
export default DisplayUser;