import React, { useEffect, useState } from 'react';
import CountriesHeader from './countries-header';
import Countries from './countries';
import CountriesSearch from './countries-search';
import Table from "react-bootstrap/Table";


function Main() {
//В useState указываем значение по-умолчанию, то есть пустой массив
//первое значение это переменная а второе это функция которая будет обрабатывать ту переменную
let [countries, setCountries] = useState([]);   

let showName = name => alert(name);

let searchVal = val => alert(val);


// useEffect - это хук который срабатывает при обновлении компонента
// это эмуляция метода componentDidMount
// срабатывает когда компонент полностью отрендерился
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
}, []) //В параметре указываем условие для обновления компонента (если массив пустой)


return(<>
{/* Searching Countries */}
<CountriesSearch searchVal={searchVal}/>

<Table striped hover bordered size="sm">
{/* Table Header */}
<CountriesHeader/>

{/* Display All Countries */}
<Countries countries={countries} showName={showName}/>

</Table></>) 


}




export default Main;
