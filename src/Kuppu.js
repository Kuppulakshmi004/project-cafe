import React,{useState} from 'react'
function Kuppu()
{
  const[counts1,setCounts1]=useState(0);
  const[counts2,setCounts2]=useState(20);
  function myfunc()
  {
    setCounts1(counts1+1);
  }
  function myfunc1()
  {
    setCounts1(counts1-1);
  }
  function myfunc2()
  {
    setCounts2(counts2+1);
  }
  return(
    <>
    <button onClick={myfunc}>increase</button>
    <span>{counts1}</span>
    <button onClick={myfunc1}>decrease</button>
    <span>{counts2}</span>
    <button onMouseOver={myfunc2}>touch me</button>
    
    </>
  )
}
export default Kuppu