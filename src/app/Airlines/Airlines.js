import React, {useEffect, useState} from 'react';
import axiosInstance from '../helpers/axiosInstanse';

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);
  
  useEffect(()=>{
    const request = axiosInstance.get(`/api/v1/airlines`);
    request.then((response) => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  }, [airlines.length])

  return <p> Airline#index</p>
}

export default Airlines;
