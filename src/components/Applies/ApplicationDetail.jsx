import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ApplicationDetail() {
  const { id } = useParams();
  const [application, setApplication] = useState(null);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await axios.get(`/api/applies/${id}`, {
          withCredentials: true,
        });
        setApplication(response.data);
        console.log(response.data); // Log the fetched data
      } catch (error) {
        console.log('Fetch error:', error);
      }
    };

    fetchApplication();
  }, [id]);

  const updateState = async (newState) => {
    try {
      const response = await axios.patch(
        `/api/apply/${id}/update`,
        {
          state: newState,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setApplication({ ...application, state: newState }); // Assuming the state is a direct field
      console.log('Update successful:', response.data);
    } catch (error) {
      console.error('Update error', error);
    }
  };

  if (!application) return <div>Loading...</div>;

  return (
    <div>
      <h1>{application.name}</h1>
      <p>{application.major}</p>
      <p>{application.studentId}</p>
      <p>{application.birth}</p>
      <p>{application.phoneNumber}</p>
      <p>{application.email}</p>
      <p>{application.question1}</p>
      <p>{application.question2}</p>
      <p>{application.question3}</p>
      <form>
        <div>
          <button type='button' onClick={() => updateState('pass')}>
            Pass
          </button>
          <button type='button' onClick={() => updateState('fail')}>
            Fail
          </button>
        </div>
      </form>
    </div>
  );
}
