import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cassinos from "../pages/Cassino";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/cassino" element={<Cassinos/>} />
            </Routes>
        </BrowserRouter>
    )
}