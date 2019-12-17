import React, { Component } from 'react';
import '../main.css'
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false}
    }

    watched = () => {
        this.setState(state => ({
            clicked: !state.clicked
        }))
    }
    render() {
        
        return (<li onClick={this.watched} className={this.state.clicked === false ? 'not-watched' : 'watched'}>{this.props.title.toUpperCase()}</li>)
    }
}

export default Movie;