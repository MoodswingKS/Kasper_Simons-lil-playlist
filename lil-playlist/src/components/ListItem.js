const ListItem = (item) => {
    return (
        <li className="listItem">
            <div className="name-song">
                {item.name}
            </div>
            <div className="name-artist">
                {item.artist}
            </div>
            <div className="genre">
                {item.genre}
            </div>
            <div className="rating">
                {item.rating}
            </div>
        </li>
    )
}

export default ListItem