import { ADOSSEMENT_URL } from "../utils/constants";
import axios from 'axios';

export async function getAdossement() {
    try {
        const result = await axios.get(ADOSSEMENT_URL);
        return result.data;
    } catch (error) {
        throw error;
    }
}