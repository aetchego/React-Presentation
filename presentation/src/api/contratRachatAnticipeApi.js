import axios from 'axios';
import { CONTRAT_RACHAT_ANTICIPE_URL } from '../utils/constants';

export async function postContratRachatAnticipé(contrat) {
    try {
        await axios.post(CONTRAT_RACHAT_ANTICIPE_URL, contrat);
    } catch (error) {
        throw error;
    }
}