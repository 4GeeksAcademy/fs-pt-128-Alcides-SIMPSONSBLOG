import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getCharacters } from "../services/APIservices.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(()=>{
		getCharacters(dispatch)


	},[])


	return (
		<div className="container py-4">
			<div>
				<h1>Simpsons Characters</h1>
			</div>
			<div className="row g-3">
				{store.characters.map(character =>{
					<div className="col-sm6 col-mb4 col-lg-3" key={character.id}>
							card
					</div>
				})}
			</div>
		</div>
	);
}; 