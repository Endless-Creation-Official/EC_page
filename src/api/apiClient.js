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

export const checkValidPhoneNumber = (phoneNumber) => {
  const url = new URL('/api/result', window.location.origin);
  url.searchParams.append('phoneNumber', phoneNumber);

  return fetch(url, {
    method: 'GET',
    credentials: 'include',
  })
    .then((response) => {
      // 404는 새로운 전화번호를 의미하므로 response를 그대로 반환
      if (response.status === 404) {
        return response;
      }
      
      if (!response.ok) {
        return response.json().then((data) => Promise.reject(data));
      }
      
      //console.log(response);
      return response.json();
    })
    .catch((error) => {
      console.error('Fetch Error:', error);
      return Promise.reject(error);
    });
}

export default apiClient;
