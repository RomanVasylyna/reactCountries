import React from 'react';

function Countries({ country }) {
    return (<thead>
        <tr>
            <td>{country.index}</td>
            <td>{country.name}</td>
            <td>{country.capital}</td>
            <td>{country.area}</td>
            <td>{country.population}</td>
        </tr>
    </thead>)
}

export default Countries;