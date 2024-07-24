import axios from 'axios';


const apiClient = axios.create({
    baseURL: 'api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// POST 함수
export const submitApplication = (formData) => {
    return apiClient.post('/applyForm', formData);
};


export const fetchApplications = () => {
    return apiClient.get('/applies');
};

export const showResult = (phoneNumber) => {
    return apiClient.post('/showResult', null, {params: {phoneNumber}});
}

export default apiClient;
