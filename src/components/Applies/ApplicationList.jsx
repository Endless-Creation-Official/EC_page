import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Applies/ApplicationList.module.css';
import { fetchApplications } from '../../api/apiClient' // Adjust path as necessary

export default function Applies() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchApplications();
        setApplications(response.data);
        console.log(response.data); // Log the fetched data
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className={styles.container}>
      <h1>지원서</h1>
      <ul>
        {applications.length > 0 ? (
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