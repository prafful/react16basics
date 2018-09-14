import React from 'react';
import axios from 'axios'
import DisplayUser from './DisplayUser';

class RemoteData extends React.Component {

    constructor(){
        super()
        this.state ={
            users:[]
        }

        this.callRemoteData = this.callRemoteData.bind(this)
        this.insertData = this.insertData.bind(this)
    }
    
    componentWillMount(){
        this.callRemoteData()
    }

    callRemoteData(){
        axios.get("http://localhost:4444/feedback")
                .then((response)=>{
                    console.log(response.data)
                    this.setState({users:response.data})
                    console.log(this.state.users)
                })
    }

    displayData(){
        return(this.state.users.map((oneUser)=>{
           return(
               <DisplayUser
                    key={oneUser.id}
                    id={oneUser.id}
                    title={oneUser.title}
                    description={oneUser.description}
                    imageUrl={oneUser.imageUrl}
                    avatarUrl={oneUser.avatarUrl}
                    vote={oneUser.vote}
               ></DisplayUser>)
        }))
    }

    insertData(){
        axios.post("http://localhost:4444/feedback",{
                                                    "title": "Weekend Celebration",
                                                    "description": "Something new!!!",
                                                    })
                .then((response)=>{
                    console.log(response.data)
                })
    }

    render() { 
        return ( <div>
                    Call the child component 
                    to dispaly JSON data.
                    <table border="1">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Id</th>
                                <th>Votes</th>
                                <th>Title</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.displayData()}
                        </tbody>    
                    </table>
                    <p></p>
                    <button onClick={this.insertData}>Insert using POST</button>

                    </div> );
    }
}
 
export default RemoteData;