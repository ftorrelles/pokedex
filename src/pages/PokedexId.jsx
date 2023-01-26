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
                <img src="/poke-title.png" alt="" />
            </div>
            <img src={selectPoke.sprites?.front_default} alt="" />
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
