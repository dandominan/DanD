import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import CountryDetails from "./../CountryDetails";



const DetailedCard = (props) => {
  const params = useParams();
        
     console.log(params.countryName)
   
    const [country, setCountry] = useState(null)
    
    useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${params.countryName}`)
          .then(response => response.json())
          .then(data =>  setCountry(data.map(country => ({
            
          "name": country.name,
          "capital": country.capital,
          "region": country.subregion,
          "pop": country.population,
          "code": country.alpha2Code,
          "currencies": country.currencies[0].name,
          "flagURL": country.flag,
          "language": country.languages[0].name,
          "timezone": country.timezones[0]
          }))
            
          ) )
        },[]);
            
     

    return (<div>
       <h1></h1>
    </div>
    
    )
}

export default DetailedCard;