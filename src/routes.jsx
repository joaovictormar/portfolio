import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Resumo from "./pages/Resumo";

function AppRoutes () {
    
    return (
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/sobre" element={<Sobre/>}></Route>
            <Route path="/projetos" element={<Projetos/>}></Route>
            <Route path="/resumo" element={<Resumo/>}></Route>
        </Routes>
    </BrowserRouter>

    )

};

export default AppRoutes;