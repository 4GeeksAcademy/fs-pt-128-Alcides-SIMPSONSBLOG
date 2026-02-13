import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getCharacters, getLocations } from "../services/APIservices.jsx";
import { CharacterCard } from "../components/CharacterCard.jsx"
import { LocationCard } from "../components/LocationCard.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getCharacters(dispatch),
		getLocations(dispatch)
	}, [])


	return (
		<div className="container py-4">
			<h2 className="text-danger mb-3">Characters</h2>

			<div className="d-flex overflow-auto flex-nowrap gap-3 pb-3">
				{store.characters.map(character => (
					<div
						key={character.id}
						className="card flex-shrink-0"
						style={{ width: "18rem" }}
					>
						<CharacterCard character={character} />
					</div>
				))}
			</div>
			<h2 className="text-danger mb-3">Locations</h2>
			<div className="d-flex overflow-auto flex-nowrap gap-3 pb-3">
				{store.locations.map(location => (
					<div
						key={location.id}
						className="card flex-shrink-0"
						style={{ width: "18rem" }}
					>
						<LocationCard location={location} />
					</div>
				))}
			</div>
		</div>

	);
}; 