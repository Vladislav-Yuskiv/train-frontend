import axios from 'axios';

const BASIC_URL = "http://localhost:3001"

export async function getAllTrains(pagination) {
    const { limit = 30 , page = 1} = pagination
    try {
        const trains = await axios.get(`${BASIC_URL}/trains?page=${page}&limit=${limit}`)
        return trains.data 
    } catch (e) {
        console.log("Error in getAllTrains" , e.message );
    }   
}

export async function getAllTrainsByCreator(id) {
    try {
        const trains = await axios.get(`${BASIC_URL}/trains/all/${id}`)

        return trains.data
    } catch (e) {
        console.log("Error in getAllTrainsByCreator" , e.message );
    }   
}

export async function createTrain(id , body) {
    try {
        const trains = await axios.post(`${BASIC_URL}/trains/create/${id}` ,  body )

        return trains.data
    } catch (e) {
        console.log("Error in getAllTrainsByCreator" , e.message );
    }   


}