import { addItemToList, filterList } from './item-actions'
import { connect } from 'react-redux'


const mapDispatchToProps = dispatch => {
    return {
        addItemToList: (key, name, artist, genre, rating) => dispatch(addItemToList(key, name, artist, genre, rating)),
        filterList: (listName, key, name, artist, genre, rating) => dispatch(filterList(listName, key, name, artist, genre, rating))
    }
}

export default connect(null, mapDispatchToProps)