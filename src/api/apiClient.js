import axios from 'axios';

const host = window.location.hostname === "localhost" 
  ? ''
  : 'http://43.202.40.240:8080';

const apiClient = axios.create({
    baseURL: host,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// POST 함수
export const submitApplication = (formData) => {
    return apiClient.post('/api/applyForm', formData);
};
