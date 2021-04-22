import React, { useState } from 'react';

function Button() {
let [counter, setCounter] = useState(0); 

return (<button 
className={"btn btn-primary"} 
style={ {"fontSize":"1.5rem", "marginTop":"30px"} }
onClick={ () => setCounter(counter+1) }>
Click { counter }
</button>)

}

export default Button;
