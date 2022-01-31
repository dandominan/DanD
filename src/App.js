import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import CountryList from './CountryList';
import FilterArea from './SearchFilter/FilterArea/FilterArea';
import SearchBar from './SearchFilter/SearchBar';
import DetailedCard from './UI/DetailedCard';

// const countriesArray = [
//   {
//     name: "Romania",
//     code: "RO",
//     pop: 20000,
//     region: "Europe",
//     capital: "Bucharest",
//     language: "Italian",
//     timezone: "UTC-12:00"
//   },
//   {
//     name: "Mexico",
//     code: "MEX",
//     pop: 34444,
//     region: "South America",
//     capital: "Bucharest",
//     language: "English",
//     timezone: "UTC+5:30"
//   },
//   {
//     name: "China",
//     code: "MEX",
//     pop: 20000,
//     region: "Asia",
//     capital: "Bucharest",
//     language: "Italian",
//     timezone: "UTC+4"
//   },
//   {
//     name: "China",
//     code: "CH",
//     pop: 20000,
//     region: "Asia",
//     capital: "Bucharest",
//     language: "German",
//     timezone: "UTC-9"
//   }]

const App = (props) => {
  const [allCountries, setAllCountries] = useState([]);
  const [searchedWord, setSearchedWord] = useState('');
  const [filterRegions, setFilterRegions] = useState([]);
  const [filterLanguages, setFilterLanguages] = useState([]);
  const [filterTimezone, setFilterTimezone] = useState([]);
  const [filterPopulation, setFilterPopulation] = useState({ From: '', To: '' })
  const [filteredCountriesByText, setFilteredCountriesByText] = useState(allCountries);
  const [filteredCountries, setFilteredCountries] = useState(filteredCountriesByText);
  

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then(response => response.json())
      .then(data => setAllCountries(data.map(country => (
        {
          "name": country.name,
          "capital": country.capital,
          "region": country.subregion,
          "pop": country.population,
          "code": country.alpha2Code,
          "flagURL": country.flag,
          "language": country.languages[0].name,
          "timezone": country.timezones[0]
        }))));
  }, []);

 

  const searchFilterHandler = (srchWrd) => {
    setSearchedWord(srchWrd);

  }

  const filteredByRegionsHandler = (region, shouldAddRegion) => {
    let newFilterRegions = filterRegions.slice();
    if (shouldAddRegion) {
      newFilterRegions.push(region);
      setFilterRegions(newFilterRegions);
    } else {
      newFilterRegions.splice(newFilterRegions.indexOf(region), 1)
      setFilterRegions(newFilterRegions);
    }
  }

  const filteredByLanguageHandler = (language, shouldAddLanguage) => {
    let newFilterLanguages = filterLanguages.slice();
    if (shouldAddLanguage) {
      newFilterLanguages.push(language);
      setFilterLanguages(newFilterLanguages)
    } else {
      newFilterLanguages.splice(newFilterLanguages.indexOf(language), 1)
      setFilterLanguages(newFilterLanguages)
    }
  }

  const filteredByTimeZoneHandler = (timezone, shouldAddTimezone) => {
    console.log("TZ Handler" + timezone)
    let newFilterTimezone = filterTimezone.slice();
    if (shouldAddTimezone) {
      newFilterTimezone.push(timezone);
      console.log(timezone);
      setFilterTimezone(newFilterTimezone)
    } else {
      newFilterTimezone.splice(newFilterTimezone.indexOf(timezone), 1)

      setFilterTimezone(newFilterTimezone)
    }
  }



  useEffect(() => {

    const filteredBySearchCountries = searchedWord === "" ? allCountries : allCountries.filter(country =>
      country.name.toLowerCase().startsWith(searchedWord.toLowerCase())
      || country.code.toLowerCase().startsWith(searchedWord.toLowerCase())
      // || country.capital.toLowerCase().startsWith(searchedWord.toLowerCase()) unele tari nu au capitala, motiv pentru care acest filtru nu functioneaza
    );

    setFilteredCountriesByText(filteredBySearchCountries)

  }, [allCountries, searchedWord, setFilteredCountriesByText])



  useEffect(() => {

    const filteredByRegions = filterRegions.length === 0 ? filteredCountriesByText :
      filteredCountries.filter(country => filterRegions.includes(country.region));

    const filteredByLanguages = filterLanguages.length === 0 ? filteredByRegions :
      filteredByRegions.filter(country => filterLanguages.includes(country.language));

    const filteredByTimezone = filterTimezone.length === 0 ? filteredByLanguages :
      filteredByLanguages.filter(country => filterTimezone.includes(country.timezone));
    console.log(filterTimezone)
    setFilteredCountries(filteredByTimezone)
  }, [allCountries, filteredCountriesByText, filterLanguages, filterRegions, filterTimezone])

  return (
 <Router>

 < div className="App">
   <Routes>
       <Route path='/'  element={
         <>
         <FilterArea onChangeRegion={filteredByRegionsHandler}
            onChangeLanguage={filteredByLanguageHandler}
            onChangeTimeZone={filteredByTimeZoneHandler} />
          <SearchBar onSearchFilter={searchFilterHandler} />
          <CountryList countries={filteredCountries} />
         </>
       }/>

       <Route path="/:countryName" element={<DetailedCard/>}/>
   </Routes>
        
         
    </div>
  
 </Router>
    
  

      

  );
}

export default App;
