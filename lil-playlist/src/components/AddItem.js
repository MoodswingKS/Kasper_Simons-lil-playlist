import { Component } from 'react'

class AddItem extends Component {
    constructor() {
        super()
        this.state = {
            nameInput: "",
            artistInput: "",
            genreInput: "",
            ratingInput: ""
        }
    }

    render() {
        const nameValue = event => {
            this.setState({
                nameInput: event.target.value
            })
        }
        const artistValue = event => {
            this.setState({
                artistInput: event.target.value
            })
        }
        const genreValue = event => {
            this.setState({
                genreInput: event.target.value
            })
        }
        const ratingValue = event => {
            this.setState({
                ratingInput: event.target.value
            })
        }

        const onSubmit = e => {
            e.preventDefault()
            if (this.state.textField !== "") {
                this.props.onSubmit(this.state.nameInput, this.state.artistInput, this.state.genreInput, this.state.ratingInput)
                this.setState({ nameInput: "" })
                this.setState({ artistInput: "" })
                this.setState({ genreInput: "" })
                this.setState({ ratingInput: "" })
            }
        }

        return (
            <div className='addItemComponent'>
                <br />
                <form onSubmit={onSubmit} className='itemStateComponent'>
                    <input
                        placeholder="Song name"
                        type="text"
                        onChange={nameValue}
                        value={this.state.nameInput}
                    ></input>

                    <input
                        placeholder="Artist name"
                        type="text"
                        onChange={artistValue}
                        value={this.state.artistInput}
                    ></input>

                    <select
                        value={this.state.genreInput} 
                        onChange={genreValue}>
                            <option value='Genre'>Genre?</option>
                            <option value='Rock'>Rock</option>
                            <option value='DnB'>DnB</option>
                            <option value='Techno'>Techno</option>
                            <option value='French-core'>French-core</option>
                            <option value='Other'>Other</option>
                    </select>

                    <input
                        placeholder="Rating"
                        type="number"
                        style={{ width: '50px' }}
                        onChange={ratingValue}
                        value={this.state.ratingInput}
                    ></input>
                
                    <button><h2>+</h2></button>
                </form>
            </div>
        )
    }
}

export default AddItem