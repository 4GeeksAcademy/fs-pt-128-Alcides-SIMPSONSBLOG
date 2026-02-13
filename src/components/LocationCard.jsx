import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const LocationCard = ({ location }) => {
    const imgUrl = `https://cdn.thesimpsonsapi.com/500/location/${location.id}.webp`;

    const { store, dispatch } = useGlobalReducer()

    const isFavorite = store.favorites.some(
        item => item.id === location.id && item.type === "location"
    )

    const addFavorite = () => {
        dispatch({
            type: "toggle_favorite",
            payload: { ...location, type: "location" }
        })
    }




    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                src={imgUrl}
                className="card-img-top"
                alt={location.name}
                style={{ height: "220px", objectFit: "contain" }}
            />

            <div className="card-body d-flex flex-column" style={{ minHeight: "140px" }}>
                <h5 className="card-title text-truncate">{location.name}</h5>

                <p className="text-muted">Town: {location.town}</p>

                <p className="card-text small mb-0 text-truncate">Use: {location.use}</p>
            </div>
            <div className="mt-auto d-flex justify-content-between align-items-center px-3 pt-2 pb-3">
                <Link to={`/location/${location.id}`}>
                    <button className="btn btn-outline-primary">
                        Learn more!
                    </button>
                </Link>

                <button
                    className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
                    onClick={addFavorite}
                >
                    <i className={`fa-${isFavorite ? "solid" : "regular"} fa-heart`}></i>
                </button>

            </div>




        </div>
    )
}