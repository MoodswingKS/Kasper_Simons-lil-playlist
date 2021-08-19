import Categories from './Categories'
import ListItem from './ListItem'

const List = (props, {filter}) => {


    const listArray = props.data.map(
        item => <ListItem   key={item.id} 
                            name={item.name} 
                            artist={item.artist}
                            genre={item.genre}
                            rating={item.rating} 
                />
    )

    return(
        <div>
            <Categories filter={filter} />
            <ul>
                {listArray}
            </ul>
        </div>
    )
}

export default List