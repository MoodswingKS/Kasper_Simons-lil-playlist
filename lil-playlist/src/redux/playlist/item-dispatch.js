import { addItemToList } from './item-actions'
import { connect } from 'react-redux'


const mapDispatchToProps = dispatch => {
    return {
        addItemToList: (key, name, artist, genre, rating) => dispatch(addItemToList(key, name, artist, genre, rating)),
        // filterList: (name, artist, genre, rating) => dispatch(filterList(name, artist, genre, rating))
    }
}

export default connect(null, mapDispatchToProps)