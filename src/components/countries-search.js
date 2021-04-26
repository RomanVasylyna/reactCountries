import React from 'react';


function CountriesSearch(props) {
return (<input type="text" placeholder="Search..." onKeyUp={ e => props.searchVal(e.value) }></input>);
}


export default CountriesSearch;
