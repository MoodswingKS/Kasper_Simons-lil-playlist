const ListItem = (item) => {
    return(
        <li className="listItem">
            <span>
                Track: {item.name} |
                Artist: {item.artist} |
                Genre: {item.genre} |
                Rating: {item.rating} |
                <hr />
            </span>
        </li>
    )
}

export default ListItem