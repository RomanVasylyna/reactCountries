import React from 'react';

function Countries(countries) {
return (
            
    <tbody>
    {countries.map(country =>
        <tr>
            <td>{country.index}</td>
            <td>{country.name}</td>
            <td>{country.capital}</td>
            <td>{country.area}</td>
            <td>{country.population}</td>
        </tr>

    )}
</tbody>
)
}


export default Countries;
