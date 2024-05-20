import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000//api';



// import axios from 'axios';

// const api = axios.create({
//     baseURL: 'http://localhost:8000/api/', 
// });

export default API_URL;


export const fetchMoodEntries = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createMoodEntry = async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
};

export const updateMoodEntry = async (id, data) => {
    const response = await axios.put(`${API_URL}${id}/`, data);
    return response.data;
};

export const deleteMoodEntry = async (id) => {
    const response = await axios.delete(`${API_URL}${id}/`);
    return response.data;
};

export const fetchArticles = async () => {
    const response = await axios.get(`${API_URL}articles/`);
    return response.data;
};

