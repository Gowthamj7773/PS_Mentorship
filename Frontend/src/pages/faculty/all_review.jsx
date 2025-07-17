import React, { useEffect, useState } from 'react'
import axios from 'axios';
function All_review({mentorEmail , mentorLanguage}) {
    const [rating, SetRating] = useState([]);
    const [count,setCount] = useState(0);

        useEffect(()=>{
    async function GetRating() {
        try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://localhost:5000/faculty/mentor-feedback/${mentorEmail}/${mentorLanguage}`,
            {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            }
        
        );
        const rating = response.data.length;
        setCount(rating);
        //console.log("(for no.) all ratings:- ", response.data);
        SetRating(response.data);
        } catch (err) {
        console.error(
            "500 Error from DataBase!!!",
            err.response?.data || err.message
        );
        }
    }
    GetRating();
    },[])

    return (<>{count}</>)
}

export default All_review
