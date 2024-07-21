import { useState } from "react";
import { useDispatch } from "react-redux";
import { ajPrAction } from "../Parametres/actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function NvProduit() {
  const nbPr = useSelector((data) => data.produits.length) + 1;
  const [lib, setLib] = useState();
  const [QteS, setQteS] = useState();
  const [PU, setPU] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAjPr = () => {
    dispatch(
      ajPrAction({
        id: nbPr,
        libelle: lib,
        quantiteEnStock: QteS,
        prixUnitaire: PU,
      })
    );
    navigate("/");
  };
  return (
    <div className="App">
      <h1>Nouveau Produit</h1>

      <div>
      
        <label>Libelle : </label>
        <input
          type="text"
          value={lib}
          onChange={(e) => setLib(e.target.value)}></input>
      </div>
      <div>
       
        <label>Qantité : </label>
        <input
          type="text"
          value={QteS}
          onChange={(e) => setQteS(e.target.value)}></input>
      </div>
      <div>
      
        <label>PU : </label>
        <input
          type="text"
          value={PU}
          onChange={(e) => setPU(e.target.value)}></input>
      </div>
      <button onClick={handleAjPr}>Ajouter</button>
    </div>
  );
}
