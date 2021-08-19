import { filterList } from '../redux/playlist/item-actions'
import { useDispatch } from 'react-redux';


const Categories = () => {
    const dispatch = useDispatch()


    return (
        <div className="categories">
            <button className="name-song" 
                    onClick={() => dispatch(filterList('name'))}>
            SONG</button>
            <button className="name-artist"
                    onClick={() => dispatch(filterList('artist'))}>
            ARTIST</button>
            <button className="genre" 
                    onClick={() => dispatch(filterList('genre'))}>
            GENRE</button>
            <button className="rating"
                    onClick={() => dispatch(filterList('rating'))}>
            RATING</button>
        </div>
    )
}

export default Categories;