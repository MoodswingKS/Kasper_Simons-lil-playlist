import AddItem from './AddItem'
import List from './List'

// needs to be changed into hook later
import { connect } from 'react-redux'

const Main = ({ item, list }) => {
    return (
        <div>
            <AddItem data={item} />
            <List data={list} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        list: state.playlist.list,
        item: state.playlist.item
    }
}

export default connect(mapStateToProps)(Main)