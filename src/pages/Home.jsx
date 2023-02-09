import "../styles/home.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userName } from "../store/slices/userName.slice";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const Home = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submit = (data) => {
        dispatch(userName(data.userName));
        navigate("/pokedex");
    };
    return (
        <Row>
            <div className="constainer_home">
                <div className="image1">
                    <img className="img1" src="/Nuevo16.png" alt="" />
                </div>

                <div className="form">
                    <div>
                        <h2>Hello trainer!</h2>
                        <form onSubmit={handleSubmit(submit)}>
                            <div className="label-input-btn">
                                <label
                                    className="label-inp"
                                    htmlFor="Give me your name to start"
                                >
                                    <h5 className="text">
                                        Give me your name to start
                                    </h5>
                                </label>
                                <div>
                                    <input
                                        className="input-home"
                                        type="text"
                                        id="userName"
                                        placeholder="name"
                                        {...register("userName")}
                                    />
                                    <button
                                        className="bt-input-home"
                                        type="submit"
                                    >
                                        <img
                                            className="searchpoek"
                                            src="/pokebola1.png"
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="images">
                        <div>
                            <img className="image2" src="/Nuevo8.png" alt="" />
                        </div>
                        <div>
                            <img className="image2" src="/Nuevo17.png" alt="" />
                        </div>
                        <div>
                            <img className="image2" src="/Nuevo3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Row>
    );
};

export default Home;
