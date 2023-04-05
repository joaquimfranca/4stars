import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Header from "./components/Header";
import Mymovies from "./pages/Mymovies";


function RoutesApp() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movies />} />
        <Route path="/mymovies" element={<Mymovies />} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default RoutesApp;
