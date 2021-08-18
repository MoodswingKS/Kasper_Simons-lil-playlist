import { connect } from 'react-redux'
import { addItemToList } from './item-actions'

const mapDispatchToProps = dispatch => {
    return {
        addItemToList: (key, name, artist, genre, rating) => dispatch(addItemToList(key, name, artist, genre, rating))
    }
}

export default connect(null, mapDispatchToProps)