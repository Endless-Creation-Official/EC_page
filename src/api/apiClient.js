import axios from 'axios';

const apiClient = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

//POST함수
export const submitApplication = (formData) => {
    return apiClient.post('/apply', formData);
};