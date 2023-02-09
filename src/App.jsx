import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import PokedexId from "./pages/PokedexId";
import { Container } from "react-bootstrap";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Container className="my-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route element={<ProtectedRoutes />}>
                            <Route path="/pokedex" element={<Pokedex />} />
                            <Route
                                path="/pokedex/:id"
                                element={<PokedexId />}
                            />
                        </Route>
                    </Routes>
                </Container>
            </div>
        </HashRouter>
    );
}

export default App;
