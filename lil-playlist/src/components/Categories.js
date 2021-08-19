
const Categories = ({filter}) => {
    return (
        <div className="categories">
            <button className="name-song" onClick={filter}>SONG</button>
            <button className="name-artist" onClick={filter}>ARTIST</button>
            <button className="genre" onClick={filter}>GENRE</button>
            <button className="rating" onClick={filter}>RATING</button>
        </div>
    )
}

export default Categories