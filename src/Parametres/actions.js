export const remplirPrAction = (pr) => {
  return { type: "remplir", payload: pr };
};

export const supprPrAction = (Pid) => {
  return { type: "suppr", payload: Pid };
};

export const ajPrAction = (NvPr) => {
  return { type: "ajout", payload: NvPr };
};

export const MdPrAction = (Mdid) => {
  return { type: "modpr", payload: Mdid };
};
