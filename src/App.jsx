import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Inicio from "./Inicio";
import Menu from "./Menu";
import Contacto from "./Contacto";

function App() {
  useEffect(() => {
    console.log('Entraste a la cafeteria')
  }, [])


  return(
    <BrowserRouter>
        <header>
          <h1>Cafe Aroma</h1>
          <nav>
            <ul>
              <li> <Link to="/">Inicio</Link></li>
              <li> <Link to="/menu">Menu</Link></li>
              <li> <Link to="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Inicio />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="contacto" element={<Contacto />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App