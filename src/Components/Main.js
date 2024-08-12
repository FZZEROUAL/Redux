import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { supprPrAction } from "../Parametres/actions";

export default function Main() {
  const pr = useSelector((data) => data.produits);
  const dispatch = useDispatch();

  const handleSupPr = (pid) => {
    dispatch(supprPrAction(pid));
  };

  return (
    <div className="App">
      <h1>Ajout</h1>
      <Link to="nvpr">
        <button>Nouveau</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Libellé</th>
            <th>Pu</th>
            <th>Qté en Stock</th>
            <th>Opérations</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(pr) && pr.map((prd) => (
            <tr key={prd.id}>
              <td>{prd.id}</td>
              <td>{prd.libelle}</td>
              <td>{prd.prixUnitaire}</td>
              <td>{prd.quantiteEnStock}</td>
              <td>
                <button onClick={() => handleSupPr(prd.id)}>Supprimer</button>
              </td>
              <td>
                <Link to={`/modpr/${prd.id}`}>
                  <button>Editer</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
