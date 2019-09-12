import { SET_CONTRAT_RACHAT_ANTICIPE } from "../../utils/constants";
import { postContratRachatAnticipé as postContratRachatAnticipéApi } from "../../api/contratRachatAnticipeApi";
import { notificationSuccess, notificationError } from "./viewReducer";

export function postContratRachatAnticipé(contrat) {
    return async function(dispatch) {
        try {
            await postContratRachatAnticipéApi(contrat);
            dispatch(setContratRachatAnticipé(contrat));
            dispatch(notificationSuccess("Le contrat a correctement été ajouté !"))
        } catch (error) {
            dispatch(notificationError("Il semble que les informations fournies ne sont pas correctes. Veuillez contacter le support si le problème persiste."));
        }
    }
}

function setContratRachatAnticipé(result) {
    return {
        type: SET_CONTRAT_RACHAT_ANTICIPE,
        payload: result
    }
}

export default function reducer(state = {contratRachatAnticipé: []}, action) {
    switch (action.type) {
        case SET_CONTRAT_RACHAT_ANTICIPE:
            return { ...state, contratRachatAnticipé: action.payload };
        default:
            return state;
    }
}