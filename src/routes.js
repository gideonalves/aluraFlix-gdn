// import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
// import Container from "components/Container";
import Rodape from "components/Rodape";
import Inicio from "pages/Inicio";
import NovoVideo from "pages/NovoVideo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            {/* <Container> */}
            {/* <Banner imagem="home" /> */}
                <Routes>
                    <Route path="/" element={<Inicio />}> </Route>
                    <Route path="/NovoVideo" element={<NovoVideo />}> </Route>              
                </Routes>


            {/* </Container> */}
            <Rodape />
           
        </BrowserRouter>
    )
}

export default AppRoutes;