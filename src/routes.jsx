import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/Others/ScrollToTop";

import PageBase from "./pages/PageBase";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Resumo from "./pages/Resumo";
import Page404 from "./pages/Page404";

function AppRoutes () {
    
    return (
    
    <BrowserRouter>
        <ScrollToTop/>
        <Routes>
            <Route path="/" element={<PageBase/>}>
                <Route index element={<Home/>}></Route>
                <Route path="/sobre" element={<Sobre/>}></Route>
                <Route path="/projetos" element={<Projetos/>}></Route>
                <Route path="/resumo" element={<Resumo/>}></Route>
                <Route path="*" element={<Page404/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>

    )

};

export default AppRoutes;