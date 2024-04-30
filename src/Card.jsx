function Card({name, image, handleClick}) {
    return (
        <>
        <div className="card">
        <img
        onClick={handleClick}
        src={image}
        >
        </img>
        <p>{name}</p>
        </div>
        </>
    )
}

export default Card