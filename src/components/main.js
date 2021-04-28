import React, { useEffect, useState } from 'react';
import CountriesHeader from './countries-header';
import Countries from './countries';
import CountriesSearch from './countries-search';
import Table from "react-bootstrap/Table";


function Main() {
let [countries, setCountries] = useState([]);
let [filteredCountries, setFilteredCountries] = useState([]);

const showName = name => alert(name);

const filterCountries = val => {
    setFilteredCountries(countries.filter(country => country.name.toLowerCase().includes(val) || country.capital.toLowerCase().includes(val)));
};

useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        setCountries(data.map((country, index) => {
        let {name, area, capital, population, alpha3Code} = country;

        return {
            index:index+1,
            name,
            area,
            capital,
            population,
            alpha3Code
        }

        }));
    })
    .catch(err => console.log(err));
}, [])


return(<>
    <CountriesSearch filterCountries={ filterCountries }/>
    <Table striped hover bordered size="sm">
        <CountriesHeader/>
        <Countries countries={filteredCountries.length ? filteredCountries : countries} showName={showName}/>
    </Table>
</>)


}




export default Main;
