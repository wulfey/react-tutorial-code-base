import React, { Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

import fetchSongs from '../queries/fetchSongs'

class SongCreate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
    }

    onSubmit(event){
        // block submission
        event.preventDefault();
        // console.log(this.state.title);
        // mutate the server
        this.props.mutate({
            variables: {title: this.state.title},
            refetchQueries: [{ query: fetchSongs }] //ES6 options here, also variables: 
        }).then(() => hashHistory.push("/"));   
    }

    render(){
        return(
            <div>
                <h3>Create New Song Form</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song Title:</label>
                    <input 
                        onChange={event => this.setState({title: event.target.value})}
                        value={this.state.title}
                    />
                </form>
                <div>
                    <Link className="btn btn-primary" to={`/`}>
                            Back 
                    </Link>
                </div>
            </div>
        )
    }
}

//need to define a mutation here


//need special export to handle mutation 
// export default SongCreate;

// need to pass something in from the form submit
// but how ...
const mutation = gql`
    mutation AddSong($title: String){
        addSong(title: $title){
            title
        }
    }
`;


// this is like CONNECT from REDUX
// just like REDUX, the query is going to be on the THIS.PROPS
export default graphql(mutation)(SongCreate);