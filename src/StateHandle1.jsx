import React, {useState} from 'react';

const StateHandle1 = () => {
    const[like,setLike]=useState(10)
    function increment()
    {
        setLike(like+1)
    }
    function decrement()
    {
        setLike(like-1)
    }

  return (
    <div>
       <p>
        {like}
        
       </p>
       
       <button onClick={increment}>Like</button>
       <button onClick={()=>setLike(like-1)}>Dislike</button>
      
    </div>
  )
}

export default StateHandle1;