export const CharacterCard = ({ character }) => {
    const imgUrl = `https://cdn.thesimpsonsapi.com/500/character/${character.id}.webp`;


    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                src={imgUrl}
                className="card-img-top"
                alt={character.name}
                style={{ height: "220px", objectFit: "contain" }}
            />

            <div className="card-body d-flex flex-column" style={{ minHeight: "140px" }}>
                <h5 className="card-title text-truncate">{character.name}</h5>

                <p className="text-muted">Age: {character.age}</p>

                <p className="card-text small mb-0 text-truncate">Occupation: {character.occupation}</p>

                <p className="card-status"> Status: {character.status}</p>
            </div>
            <div className="mt-auto d-flex justify-content-between align-items-center px-2 pt-2">
                <button className="btn btn-outline-primary">
                    Learn more!
                </button>

                <button className="btn btn-outline-warning">
                    <i className="fa-regular fa-heart"></i>
                </button>
            </div>



        </div>
    )
}