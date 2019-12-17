import React, { Component } from 'react';
import '../main.css'


class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '' }
        this.handleInput = this.handleInput.bind(this)
        this.handleForm = this.handleForm.bind(this)
    }

    handleInput(e) {
        this.setState({ title: e.target.value})
    }

    handleForm(e) {
        e.preventDefault()
        this.props.movieowned(this.state)
        this.setState({ title: ' '})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleForm}>
                    <label>Movie Title:</label>
                    <input type="text" value={this.state.title} onChange={this.handleInput}/>
                    <button>Add Movie</button>
                </form>
            </div>
        )
    }
}

export default MovieForm;