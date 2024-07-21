
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, } from "react-redux";
import { MdPrAction } from "../Parametres/actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ModProduit() {
  const { id } = useParams()
  const prd = useSelector(data => data.produits.find((x)=>x.id===parseInt(id))) ;
  const [LIB, setLIB] = useState( prd.LIB);
  const [QTES, setQTES] = useState( prd.QTES);
  const [PU, setPU] = useState( prd.PU);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleMdPr = () => {
    dispatch(
      MdPrAction({
        id: id,
        LIB: LIB,
        QTES: QTES,
        PU: PU,
      })
    );
    navigate("/");
  };
  return (
    <div className="App">
      <h1>Modification du produit numéro {id} </h1>
      <div>
      
        <label>Libelle : </label>
        <input
          type="text"
          value={LIB}
          onChange={(e) => setLIB(e.target.value)}></input>
      </div>
      <div>
        
        <label>Qantité : </label>
        <input
          type="number"
          value={QTES}
          onChange={(e) => setQTES(e.target.value)}></input>
      </div>
      <div>
       
        <label>PU : </label>
        <input
          type="number"
          value={PU}
          onChange={(e) => setPU(e.target.value)}></input>
      </div>
      <button onClick={handleMdPr}>Enregistrer</button> 
    </div>
  );
}
