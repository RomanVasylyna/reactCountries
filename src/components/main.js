import React, {useEffect, useState} from 'react';
import CountriesHeader from './countries-header'
import Table from 'react-bootstrap/Table';

function Main() {
let [countries, setCountries] = useState([]);
let showName = name => alert(name);

useEffect(() => { //Обновление компонента (как только компонент отрендерился)
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
    setCountries(data.map((country, index) => {
    let{name, area, capital, population, code} = country;
    return {
        index: index +1,
        name,
        area,
        capital,
        population,
        code
    }
    }));
    })
    .catch(err => console.log(err));
}, [])

return (<>
<Table striped bordered hover/>
<CountriesHeader/>
    <tbody>
        { countries.map(country =>
        <tr>
        <td>{ country.index }</td>
        <td>{ country.name }</td>
        <td>{ country.capital }</td>
        <td>{ country.area }</td>
        <td>{ country.population }</td>
        </tr>

        )}
    </tbody>
    </>
);
}

export default Main;