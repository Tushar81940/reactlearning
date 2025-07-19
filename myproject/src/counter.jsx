import { useState } from 'react';
import { useEffect } from 'react';



function Counter(){
  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.log("rerendered");
  },[count])

  return(
    <>
    <p>You clicked {count} times.</p>
    <button onClick={()=>setCount(count+1)}>click me</button>
    </>
  );
};
export default Counter