import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function ApplicationDetail() {
    const { id } = useParams();
    const [application, setApplication] = useState(null);
    useEffect(() => {
        axios.get(`/api/applications/${id}`)
            .then(response => setApplication(response.data))
            .catch(error => console.log('Fetch 할 data 없음', error));
    }, [id]);

    if (!application)
        return <div>Loading...</div>;

    return (
        <div>
            <h1>{application.Name}</h1>
            <p>{application.Major}</p>
            <p>{application.Studentid}</p>
            <p>{application.Birth}</p>
            <p>{application.Phonenumber}</p>
            <p>{application.Email}</p>
            <p>{application.Q1}</p>
            <p>{application.Q2}</p>
            <p>{application.Q3}</p>
        </div>
    );
}