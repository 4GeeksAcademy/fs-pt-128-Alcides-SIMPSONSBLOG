import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacter } from "../services/APIservices";

export const CharacterInfo = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    const getCharacterData = async () => {
        const charData = await getCharacter(id);
        setCharacter(charData);
    };

    useEffect(() => {
        getCharacterData();
    }, [id]);
    const imgUrl =
        character?.portrait_path
            ? `https://cdn.thesimpsonsapi.com/500${character.portrait_path}`
            : `https://cdn.thesimpsonsapi.com/500/character/${id}.webp`;

    return (
        <div className="container py-4">
            <div className="row g-4 align-items-center">
                <div className="col-12 col-md-5 d-flex justify-content-center">
                    <img
                        src={imgUrl}
                        alt={character.name}
                        className="img-fluid"
                        style={{ maxHeight: "420px", objectFit: "contain" }}
                    />
                </div>

                <div className="col-12 col-md-7 text-center text-md-start">
                    <h1 className="fw-bold mb-2">{character.name}</h1>
                    <p className="text-muted mb-0">
                        {character?.description || character?.catchphrase || " "}
                    </p>
                </div>
            </div>

            <hr className="my-4 border-danger" />

            <div className="row text-center g-3">
                <div className="col-6 col-md">
                    <div className="text-danger text-uppercase small">Name</div>
                    <div>{character.name}</div>
                </div>

                <div className="col-6 col-md">
                    <div className="text-danger text-uppercase small">Age</div>
                    <div>{character.age ?? "Unknown"}</div>
                </div>

                <div className="col-6 col-md">
                    <div className="text-danger text-uppercase small">Gender</div>
                    <div>{character.gender ?? "Unknown"}</div>
                </div>

                <div className="col-6 col-md">
                    <div className="text-danger text-uppercase small">Occupation</div>
                    <div>{character.occupation ?? "Unknown"}</div>
                </div>

            </div>
        </div>
    );
};
