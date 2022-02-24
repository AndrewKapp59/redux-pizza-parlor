import { useState } from 'react';

function pizzaItem({pizza}) {

  const [toggled, setToggled] = useState(true);


  // toggles the pic and description
  const toggleButton = () => setToggled(!toggled);

  return (
    <>
      <div key={pizza.id} className="pizza-container">
        {toggled ? (
          <div className="pizza">
            
            <img src={pizza.path} />
          </div>
        ) : (
          <>
            <div className="text-pic" onClick={() => toggleImage()}>
              {/* <img className = 'together' onClick={() => toggleImage()} src={pizza.path} alt="background"/> */}
              <h4 className='description '>{pizza.description}</h4>
            </div>
          </>
        )}
          <>
            <div>
              <button className = "like-button" onClick={handleLikeClick}>Like</button>
              <p>Likes: {pizza.likes}</p>
            </div>
          </>
        </div>
    </>
  );


  return(

  )
}