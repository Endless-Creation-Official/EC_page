import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../Applies/ApplicationList.module.css';

export default function Applies() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/applies', {
          withCredentials: true,
        });
        setApplications(response.data);
        console.log(response.data); // Log the fetched data
      } catch (error) {
        console.error('Fetch 할 data 없음', error);
      }
    };

    fetchApplications();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className={styles.container}>
      <h1>지원서</h1>
      <ul>
        {applications ? (
          applications.map((application) => (
            <li key={application.id}>
              <Link to={`/applies/${application.id}`}>
                {application.name} {application.email} {application.state}
              </Link>
            </li>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
}
