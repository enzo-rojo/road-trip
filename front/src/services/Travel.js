import axios from 'axios'

const url = "http://localhost:5001"

export async function createTravel(user_id) {
    try {
        const response = await axios.post(`${url}/travels`, { user_id: Number(user_id) })
        const { message, data } = response.data;
        return {error: false, data: {message, travel: data}}
    } catch (error) {
        console.error(error.message);
        return {error: true, data: error.response.data.error}
    }
}

export async function getTravels() {
    try {
        const response = await axios.get(`${url}/travels`)
        const { message, data } = response.data;
        return {error: false, data: {message, travels: data}}
    } catch (error) {
        console.error(error.message);
        return {error: true, data: error.response.data.error}
    }
}

export async function getTravel(_id) {
    try {
        const response = await axios.get(`${url}/travels/${_id}`)
        const { message, data } = response.data;
        return {error: false, data: {message, travel: data}}
    } catch (error) {
        console.error(error.message);
        return {error: true, data: error.response.data.error}
    }
}

export async function getTravelByUser(user_id) {
    try {
        const response = await axios.get(`${url}/travels/mytravels`)
        const { message, data } = response.data;
        return { error: false, data: { message, travels: data } }
    } catch (error) {
        console.error(error.message);
        return { error: true, data: error.response.data.error }
    }
}

export async function createDestination(start, end, travel_id) {
    try {
        const response = await axios.post(`${url}/destinations`, { start, end, travel_id: Number(travel_id), rank: 1 })
        const { message, data } = response.data;
        return {error: false, data: {message, destination: data}}
    } catch (error) {
        console.error(error.message);
        return {error: true, data: error.response.data.error}
    }
}

export async function getDestinations() {
    try {
        const response = await axios.get(`${url}/destinations`)
        const { message, data } = response.data;
        return {error: false, data: {message, destinations: data}}
    } catch (error) {
        console.error(error.message);
        return {error: true, data: error.response.data.error}
    }
}

export async function getDestination(_id) {
    try {
        const response = await axios.get(`${url}/destinations/${_id}`)
        const { message, data } = response.data;
        return {error: false, data: {message, destination: data}}
    } catch (error) {
        console.error(error.message);
        return {error: true, data: error.response.data.error}
    }
}

export async function createActivity(destination_id, name, address, city, postcode, type, lat, lon) {
    try {
        const response = await axios.post(`${url}/activities`, { name, destination_id: Number(destination_id) })
        const { message, data } = response.data;
        return {error: false, data: {message, activity: data}}
    } catch (error) {
        console.error(error.message);
        return {error: true, data: error.response.data.error}
    }
}

export async function getActivities() {
    try {
        const response = await axios.get(`${url}/activities`)
        const { message, data } = response.data;
        return {error: false, data: {message, activities: data}}
    } catch (error) {
        console.error(error.message);
        return {error: true, data: error.response.data.error}
    }
}

export async function getActivityByDestination(destination_id) {
    try {
        const response = await axios.get(`${url}/activities/destination/${Number(destination_id)}`)
        const { message, data } = response.data;
        return {error: false, data: {message, activities: data}}
    } catch (error) {
        console.error(error.message);
        return {error: true, data: error.response.data.error}
    }
}