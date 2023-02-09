import "../styles/pokedex.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Pagination from "react-bootstrap/Pagination";

const Pokedex = () => {
    //store
    const userName = useSelector((state) => state.userName);
    const navigate = useNavigate();
    //choose toogle
    const [istrue, setIsTrue] = useState(false);
    const change = () => {
        setIsTrue(!istrue);
    };

    //get data
    const [type, setType] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const { register, handleSubmit } = useForm();
    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/type/")
            .then((resp) => setType(resp.data.results))
            .catch((error) => console.error(error));
        axios
            .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279")
            .then((resp) => setPokemons(resp.data.results))
            .catch((error) => console.error(error));
    }, []);

    const selectType = (e) => {
        const urlType = e.target.value;
        axios
            .get(urlType)
            .then((resp) => (setPokemons(resp.data.pokemon), setPage(1)))
            .catch((error) => console.error(error));
    };

    /// search engine by name
    const submit = (data) => {
        const pokeSelect = data.pokeName.toLowerCase().trim();
        navigate(`/pokedex/${pokeSelect}`);
    };
    //pagination
    const [page, setPage] = useState(1);
    const pokePerPage = 10;
    const lastIndex = page * pokePerPage;
    const firstIndex = lastIndex - pokePerPage;

    const PokePagination = pokemons?.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(pokemons.length / pokePerPage);

    const pagesNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pagesNumbers.push(i);
    }

    return (
        <div className="containerPokedex">
            <div className="header">
                <h1>Pokedex</h1>
                <p>
                    <span>
                        Welcome <strong>{userName}</strong>, here you can find
                        your favorite pokemon
                    </span>
                </p>
            </div>
            <section className="input">
                <div className="container_toggle">
                    <h3>Type</h3>
                    <div className="switch-button">
                        <input
                            onChange={() => change()}
                            type="checkbox"
                            id="switch-label"
                            className="switch-button__checkbox"
                        />
                        <label
                            htmlFor="switch-label"
                            className="switch-button__label"
                        ></label>
                    </div>
                    <h3>pokemon</h3>
                </div>
                {istrue ? (
                    <div>
                        <form onSubmit={handleSubmit(submit)}>
                            <input
                                className="input-pokedex"
                                type="text"
                                placeholder="Search here..."
                                {...register("pokeName")}
                            />
                            <button className="btn-input-pokedex" type="submit">
                                Go
                            </button>
                        </form>
                    </div>
                ) : (
                    <div>
                        <select onChange={selectType}>
                            {type?.map((dataType, index) => (
                                <option value={dataType.url} key={index}>
                                    {dataType.name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
            </section>

            <section className="container-pokemonCard">
                {PokePagination?.map((item, index) => (
                    <PokemonCard
                        key={index}
                        url={item.pokemon ? item.pokemon.url : item.url}
                    />
                ))}
            </section>

            <Pagination className="btn-pagination">
                <Pagination.Prev
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                />
                <Pagination.Item onClick={() => setPage(1)}>
                    {1}
                </Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item active>{page}</Pagination.Item>
                {/* ---------- */}
                <Pagination.Ellipsis />
                <Pagination.Item
                    onClick={() =>
                        page === 1 ? setPage(page) : setPage(page - 1)
                    }
                    // onClick={() =>
                    //     page === totalPages
                    //         ? setPage(page - 2)
                    //         : setPage(page - 1)
                    // }
                >
                    {page === 1 ? page : page - 1}
                    {/* {page === totalPages ? page - 2 : page - 1} */}
                </Pagination.Item>
                <Pagination.Item
                    onClick={() =>
                        page === 1 ? setPage(page + 1) : setPage(page)
                    }
                    // onClick={() =>
                    //     page === totalPages ? setPage(page - 1) : setPage(page)
                    // }
                >
                    {page === 1 ? page + 1 : page}
                    {/* {page === totalPages ? page - 1 : page} */}
                </Pagination.Item>
                <Pagination.Item
                    onClick={() =>
                        page === 1 ? setPage(page + 2) : setPage(page + 1)
                    }
                    // onClick={() =>
                    //     page === totalPages ? setPage(page) : setPage(page + 1)
                    // }
                >
                    {page === 1 ? page + 2 : page + 1}
                    {/* {page === totalPages ? page : page + 1} */}
                </Pagination.Item>
                {/* --------- */}
                <Pagination.Ellipsis />
                <Pagination.Item onClick={() => setPage(totalPages)}>
                    {totalPages}
                </Pagination.Item>
                <Pagination.Next
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                />
            </Pagination>
        </div>
    );
};

export default Pokedex;
