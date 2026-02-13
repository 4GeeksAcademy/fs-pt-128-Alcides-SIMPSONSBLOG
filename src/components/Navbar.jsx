import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  const removeFavorite = (id) => {
    dispatch({ type: "toggle_favorite", payload: { id } });
  }

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
		<Link to={"/"}>
        <span className="navbar-brand mb-0 h1">Simpsons Blog</span>
		</Link>

        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites{" "}
            <span className="badge bg-secondary ms-2">{store.favorites.length}</span>
          </button>

          <ul className="dropdown-menu dropdown-menu-end">
            {store.favorites.length === 0 ? (
              <li className="dropdown-item text-muted">(empty)</li>
            ) : (
              store.favorites.map((fav) => (
                <li
                  key={fav.id}
                  className="dropdown-item d-flex justify-content-between align-items-center"
                >
                  <span className="me-3">{fav.name}</span>
                  <button
                    className="btn btn-link text-danger p-0"
                    onClick={() => removeFavorite(fav.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
