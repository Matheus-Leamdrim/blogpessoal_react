import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/home/home"
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar"
import Cadastro from "./assets/pages/cadastro/Cadastro";



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className="min-h-[80vh]">
    <Routes>
    <Route path ="/" element={<Cadastro/>}/>
    <Route path ="/home" element={<Home/>}/>
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
