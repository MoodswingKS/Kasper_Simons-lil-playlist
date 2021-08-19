import AddItem from './AddItem'
import List from './List'
import { Component } from 'react'

// needs to be changed into hook later
import { connect } from 'react-redux'
// import { filterList } from '../redux/playlist/item-actions'
// import mapDispatchToProps from '../redux/playlist/item-dispatch'


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    render() { 

        return (
        <div>
            <AddItem data={this.props.item} />
            <List   data={this.props.list}
                      />
        </div>
    )}
}

const mapStateToProps = state => {
    return {
        list: state.playlist.list,
        item: state.playlist.item
    }
}

export default connect(mapStateToProps)(Main)