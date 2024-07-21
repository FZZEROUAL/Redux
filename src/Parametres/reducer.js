const initial = { produits: [], compteur: 0 };

const reducer = (state = initial, action) => {
  switch (action.type) {
    case "remplir":
      return { ...state, produits: action.payload };
    case "suppr":
      return {
        ...state,
        produits: state.produits.filter((pr) => pr.id !== action.payload),
      };
    case "ajout":
      return { ...state, produits: [...state.produits, action.payload] };

      case "modpr":
       const Pr = state.produits.find((x) => x.id===parseInt(action.payload.id))
          if(Pr){
            Pr.LIB = action.payload.LIB;
            Pr.QTES = action.payload.QTES;
            Pr.PU = action.payload.PU;
          }
       
          return { ...state, produits: Pr };
          default:
            return state;
  }
};

export default reducer;
