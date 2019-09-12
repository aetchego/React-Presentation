import axios from 'axios';
import { CODE_RACHAT_URL } from '../utils/constants';

export async function getCodeRachat(adossement) {
    try {
        const result = await axios.get(CODE_RACHAT_URL + "/" + adossement);
        return result.data;
    } catch (error) {
        throw error;
    }
}