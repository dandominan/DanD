import React from "react";
import Card from "./UI/Card";
import './CountryList.css';

const CountryList = props => {
    return (
        <div className="countrylist">
            {props.countries.length === 0 ? <p>No Results</p> : props.countries.map((country) => (

                <Card className="countrycard"
                    onButtonClick={props.onButtonClick}
                    countryName={country.name}
                    flag={country.flagURL}
                    capital={country.capital}
                    pop={country.pop}
                    region={country.region}
                />

            ))}
        </div>


    )
}

export default CountryList;