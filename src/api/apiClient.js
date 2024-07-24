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
    const url = new URL('/api/showResult', window.location.origin);
    url.searchParams.append('phoneNumber', phoneNumber);

    return fetch(url, {
        method: 'POST',
        credentials: 'include' // Ensures cookies or authentication headers are sent with the request
        // No Content-Type header needed since there is no body data
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Assuming the server sends back JSON
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

export default apiClient;
