import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import NvProduit from "./Components/NvProduit";
import ModProduit from "./Components/ModProduit";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { remplirPrAction } from "./Parametres/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:9000/produits")
      .then((data) => dispatch(remplirPrAction(data.data)))
      .catch((err) => console.log("Données inaccessible"));
  });
  return (
    <div className="App">
      <h1>Routage et Redux</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/nvpr" element={<NvProduit />} />
          <Route path="/modpr/:id" element={<ModProduit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
