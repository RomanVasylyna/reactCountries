import React from 'react';


function CountriesSearch(props) {
return (<input 
type="text" 
placeholder="Search..." 
onKeyUp={ e => props.filterCountries(e.currentTarget.value.toLowerCase().trim()) }>
</input>);
}


export default CountriesSearch;
