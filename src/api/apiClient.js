import axios from 'axios';


const apiClient = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// POST 함수
export const submitApplication = (formData) => {
    return apiClient.post('/apply', formData);
};


export const fetchApplications = () => {
    return apiClient.get('/applies');
};

export default apiClient;
