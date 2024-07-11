import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Applies() {
    const [applications, setApplications] = useState([]);
    useEffect(() => {
        axios.get('/api/applies')
            .then(response => setApplications(response.data))
            .catch(error => console.error('Fetch 할 data 없음', error));
    }, []);

    return (
        <div>
            <h1>지원서</h1>
            <ul>
                {applications.map(application => (
                    <li key={application.div}>
                        <Link to={`/applies/${application.id}`}>
                            {application.Name} {application.Email}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}