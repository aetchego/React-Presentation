export const HOME_PAGE = "HOME_PAGE";
export const POURQUOI_REACT = "POURQUOI_REACT";
export const DEMO = "DEMO";

export const SET_PAGE = "SET_PAGE";

export const ENQUEUE_SNACKBAR = "ENQUEUE_SNACKBAR";
export const CLEAR_NOTIFICATIONS = "CLEAR_NOTIFICATIONS";

export const SET_ADOSSEMENT = "SET_ADOSSEMENT";
export const SET_CONTRAT = "SET_CONTRAT";
export const SET_CODE_RACHAT = "SET_CODE_RACHAT";

export const SET_CONTRAT_RACHAT_ANTICIPE = "SET_CONTRAT_RACHAT_ANTICIPE";

/* VARIABLE A CHANGER SELON LE MODE */

const DEV_MODE = "http://localhost:3000";
const BUILD_MODE = "http://localhost:8081";

export const ADOSSEMENT_URL = DEV_MODE + "/RachatContratFCT/api/adossement";
export const CONTRAT_URL = DEV_MODE + "/RachatContratFCT/api/contrats;"
export const CODE_RACHAT_URL = DEV_MODE + "/RachatContratFCT/api/codeRachat;"
export const CONTRAT_RACHAT_ANTICIPE_URL = DEV_MODE + "/RachatContratFCT/api/contratRachatAnticipe";