import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import PokedexId from "./pages/PokedexId";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/pokedex" element={<Pokedex />} />
                        <Route path="/pokedex/:id" element={<PokedexId />} />
                    </Route>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
