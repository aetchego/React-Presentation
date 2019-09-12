import { SET_ADOSSEMENT, SET_CONTRAT, SET_CODE_RACHAT } from "../../utils/constants";
import { getAdossement as getAdossementApi } from "../../api/adossementApi";
import { getContrats as getContratsApi } from "../../api/contractsApi";
import {getCodeRachat as getCodeRachatApi} from "../../api/codeRachatApi";
import { notificationError } from "../reducers/viewReducer";

export function getAdossement() {
    return async function(dispatch) {
        try {
            const result = await getAdossementApi();
            dispatch(setAdossement(result));
        } catch (error) {
            dispatch(notificationError("Nous ne pouvons pas récupérer les informations. Veuillez contacter le support si le problème persiste."))
        }
        
    }
}

export function getContrat(adossement, beginWith) {
    return async function(dispatch) {
        try {
            const result = await getContratsApi(adossement, beginWith);
            dispatch(setContrat(result));
        } catch (error) {
            dispatch(notificationError("Nous ne pouvons pas récupérer les informations. Veuillez contacter le support si le problème persiste."))
        }
    }
}

export function getCodeRachat(adossement) {
    return async function(dispatch) {
        try {
            const result = await getCodeRachatApi(adossement);
            dispatch(setCodeRachat(result));
        } catch (error) {
            dispatch(notificationError("Nous ne pouvons pas récupérer les informations. Veuillez contacter le support si le problème persiste."))
        }      
    }
}

function setAdossement(adossement) {
    return {
        type: SET_ADOSSEMENT,
        payload: adossement
    }
}

export function setContrat(contrat) {
    return {
        type: SET_CONTRAT,
        payload: contrat
    }
}

export function setCodeRachat(codeRachat) {
    return {
        type: SET_CODE_RACHAT,
        payload: codeRachat
    }
}

export default function reducer(state = {adossement: [], contrat: [], codeRachat: []}, action) {
    switch (action.type) {
        case SET_ADOSSEMENT:
            return { ...state, adossement: action.payload };
        case SET_CONTRAT:
            return {...state, contrat: action.payload };
        case SET_CODE_RACHAT:
                return {...state, codeRachat: action.payload };
        default:
            return state;
    }
}