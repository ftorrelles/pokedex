import "../styles/pokedexId.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PokedexId = () => {
    const { id } = useParams();
    const [selectPoke, setSelectPoke] = useState({});
    //togle
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => {
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => (setSelectPoke(resp.data), console.log(resp.data)))
            .catch(() => toggle());
    }, [id]);
    console.log(selectPoke);
    return (
        <div className="container-pokeId">
            <div className="img-title">
                <img className="img-poke" src="/poke-title.png" alt="" />
            </div>
            <div className="container-poke-info">
                <div className="pokeInfo-1">
                    <div className="item1">
                        <div className="img-poke">
                            <img
                                className="img2"
                                src={
                                    selectPoke.sprites?.other?.dream_world
                                        ?.front_default
                                }
                                alt=""
                            />
                        </div>
                        <h3>
                            <strong>{selectPoke.name}</strong>
                        </h3>
                        <div className="id">
                            <p>
                                <strong># {id}</strong>
                            </p>
                        </div>
                    </div>
                    <div className="item2">
                        <div className="type">
                            <h3>Type</h3>
                            <ul>
                                <li>{selectPoke?.types?.[0]?.type?.name}</li>
                                <li>{selectPoke?.types?.[1]?.type?.name}</li>
                            </ul>
                        </div>
                        <div className="abilities">
                            <h3>abilities</h3>
                            <ul>
                                <li>
                                    {selectPoke?.abilities?.[0]?.ability?.name}
                                </li>
                                <li>
                                    {selectPoke?.abilities?.[1]?.ability?.name}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pokeInfo-2">
                    <div className="movements">
                        <h3>movements</h3>
                        <ul>
                            {selectPoke?.moves?.map((item, index) => (
                                <li key={index}>{item?.move?.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {isVisible && (
                <div className="container_popUp">
                    <div className="popUp">
                        <i className="bx bx-search-alt"></i>
                        <h3>¡no matches!</h3>
                        <Link to="/pokedex">
                            <button onClick={() => toggle()} className="btn">
                                ok
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PokedexId;
