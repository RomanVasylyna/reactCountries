import React from 'react';

function Countries(props) {
return (
    <tbody>
    { props.countries.map(country => (<tr key={country.alpha3Code}>
     <td>{country.index}</td>    
     <td onClick={ () => props.showName(country.name) }>{country.name}</td>  
     <td>{country.capital}</td> 
     <td>{country.area}</td>
     <td>{country.population}</td>
    </tr>))
    }
    </tbody> 
)
}


export default Countries;
