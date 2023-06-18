import axios from 'axios';

const BASIC_URL = "http://localhost:3001"

export async function createAdmin(body) {
    try {
        const admin = await axios.post(`${BASIC_URL}/admins/signup`,  body )
        return admin.data
    } catch (e) {
        console.log("Error in createAdmin" , e.message);
    }
}