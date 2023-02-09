import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const PokemonCard = ({ url }) => {
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        axios
            .get(url)
            .then((resp) => setDetail(resp.data))
            .catch((error) => console.error(error));
    }, [url]);
    let componentsClassName = "";
    switch (detail?.types?.[0].type.name) {
        case "steel":
            componentsClassName = "bg-steel";
            break;
        case "water":
            componentsClassName = "bg-water";
            break;
        case "bug":
            componentsClassName += "bg-bug";
            break;
        case "electric":
            componentsClassName += "bg-electric";
            break;
        case "ghost":
            componentsClassName += "bg-ghost";
            break;
        case "fire":
            componentsClassName += "bg-fire";
            break;
        case "fairy":
            componentsClassName += "bg-fairy";
            break;
        case "ice":
            componentsClassName += "bg-ice";
            break;
        case "fighting":
            componentsClassName += "bg-fighting";
            break;
        case "normal":
            componentsClassName += "bg-normal";
            break;
        case "plant":
            componentsClassName += "bg-plant";
            break;
        case "psychic":
            componentsClassName += "bg-psychic";
            break;
        case "rock":
            componentsClassName += "bg-rock";
            break;
        case "sinister":
            componentsClassName += "bg-sinister";
            break;
        case "ground":
            componentsClassName += "bg-ground";
            break;
        case "poison":
            componentsClassName += "bg-poison";
            break;
        case "flying":
            componentsClassName += "bg-flying";
            break;
        case "grass":
            componentsClassName += "bg-grass";
            break;
        case "dark":
            componentsClassName += "bg-dark";
            break;
        case "dragon":
            componentsClassName += "bg-dragon";
            break;

        default:
            break;
    }
    // const nameType = Object.keys(detail?.types?.[0]).slice(1);
    return (
        <div className={componentsClassName}>
            <Link to={`/pokedex/${detail?.id}`}>
                <div className="img-card">
                    {detail.sprites?.other?.dream_world?.front_default ? (
                        <img
                            src={
                                detail.sprites?.other?.dream_world
                                    ?.front_default
                            }
                            alt=""
                        />
                    ) : (
                        <img src="/error.png" alt="" />
                    )}
                </div>
                <h3 className="title-card">{detail?.name}</h3>
                <h6 className="info-card">
                    <span>Type: </span>
                    {detail?.types?.[0].type.name}
                </h6>
                <h6 className="info-card">
                    <span>{detail.stats?.[0].stat.name} </span>
                    {detail.stats?.[0].base_stat}
                </h6>
                <h6 className="info-card">
                    <span>{detail.stats?.[1].stat.name} </span>
                    {detail.stats?.[1].base_stat}
                </h6>
                <h6 className="info-card">
                    <span>{detail.stats?.[2].stat.name} </span>
                    {detail.stats?.[2].base_stat}
                </h6>
            </Link>
        </div>
    );
};

export default PokemonCard;
