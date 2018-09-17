import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import updateTitle  from '../actions/updateTitleAction'


class FeedbackDescription extends React.Component {

    constructor(){
        super()
        this.state ={
            updatedFB:{}
        }
        this.updateTitleInContainer = this.updateTitleInContainer.bind(this)
        this.dispatchNewTitle = this.dispatchNewTitle.bind(this)
    }

    updateTitleInContainer(e){
        const temp_updatedFB = Object.assign({}, this.props.selectedFBprops, {
                                                                    title:e.target.value
                                                                        })
        this.setState({
            updatedFB:temp_updatedFB
        })
        console.log(this.state.updatedFB)


    }

    dispatchNewTitle(){
        this.props.updateTitle(this.state.updatedFB)
    }

    render() {
        if( this.props.selectedFBprops == null){
            return(
                <div>
                    Click on any title!!!!
                </div>
            )
        }

        return ( 
            <div>
                <ul>
                    <li>Feedback Description will come here</li>
                    <li>{this.props.selectedFBprops.description}</li>
                    <li>Title: {this.props.selectedFBprops.title}</li>
                    <br></br>
                    <form onSubmit={this.dispatchNewTitle}>
                        Update title:
                        <input type="text"
                               defaultValue={this.props.selectedFBprops.title} 
                               onChange={this.updateTitleInContainer}
                        />
                        <button type="submit">Update Title</button>
                    </form>
                </ul>
            </div>
        );
    }
}
 
function connectStateToComponentAsProps(state){
    return ({
        selectedFBprops:state.oneFB
    })
}

function connectActionToComponentAsProps(dispatch){
    return bindActionCreators({updateTitle: updateTitle}, dispatch)
} 


export default connect(connectStateToComponentAsProps, connectActionToComponentAsProps)(FeedbackDescription)