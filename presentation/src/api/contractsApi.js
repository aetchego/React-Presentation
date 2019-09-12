import axios from 'axios';
import { CONTRAT_URL } from '../utils/constants';

export async function getContrats(adossement, beginWith) {
    try {
        const result = await axios.get(CONTRAT_URL + "/" + adossement + "/" + beginWith);
        return result.data;
    } catch (error) {
        throw error;
    }
}