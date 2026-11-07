import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {AppContext} from "../context/appcontaxt/AppContext.jsx";

const Appointment = () => {

    const {docId} = useParams()
    const  {mentors} = useContext(AppContext)

    const [mInfo, setMInfo] = useState(null)

    const fetchmInfo = async ()=>{
        const mInfo = mentors.find(m=>m.id ===Number(docId))
        setMInfo(mInfo)
        console.log(mInfo)
    }

    useEffect(() => {
        fetchmInfo()

    }, [mentors,docId]);
    return (
        <div>

        </div>
    );
};

export default Appointment;