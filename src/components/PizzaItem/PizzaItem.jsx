import { useState } from 'react';

function pizzaItem({pizza}) {

  const [toggled, setToggled] = useState(true);


  // toggles the pic and description
  const toggleButton = () => setToggled(!toggled);



  return(
     <div className='pizza-container'>

     </div>
  )
}