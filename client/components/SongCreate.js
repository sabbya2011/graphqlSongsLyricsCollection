import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql } from 'react-apollo';

class SongCreate extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:''
        }
    }
    render(){
        <div>
            <h3>Create New Song</h3>
            <form>
                <label>Song Title</label>
                <input name="songTitle" onChange={event=>this.setState( {"title" : event.target.value})}/>
            </form>
        </div>;
    }
}
const query = `

`;

export default SongCreate;