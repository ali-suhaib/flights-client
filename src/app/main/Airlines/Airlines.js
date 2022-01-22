import React, {useEffect, useState} from 'react';
import axiosInstance from "app/helpers/axiosInstanse"

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);
  
  useEffect(()=>{
    const request = axiosInstance.get(`/api/v1/airlines`);
    request.then((response) => {
      setAirlines(response.data);
    })
    .catch(err => {
      console.log(err)
    })
  }, [airlines.length]);

  const grid = airlines.map( (airline, index) => {
    const { name, image_url, slug, average_score } = airline

    return (
      <li 
        key={index}
      >
        {name}
      </li>
    )
  });

  return (
    <React.Fragment>
      <p> Airline#index</p>
      <p>{grid}</p>
    </React.Fragment>);
}

export default Airlines;
