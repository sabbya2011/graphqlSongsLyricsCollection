import React , {Component } from 'react';
import gql from 'graphql-tag';
import {graphql } from 'react-apollo';
import {Link} from 'react-router';

class SongList extends Component{
    rederSongList(){
        return this.props.data.songs.map((song)=>{
            return (
                <li className="collection-item" key={song.id}>{song.title}</li>
            )
        })
    }
    render(){
        if(this.props.data.loading){
            return <div>Loading ... </div>;
        }
        return( 
            <div>
                <ul className="collection">{this.rederSongList()}</ul>
                <Link to="song/new" className="btn-floating btn-large red right">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        )
    }
}

const query = gql`
{
    songs {
        id,
        title
    }
}
`;
export default graphql(query)(SongList);