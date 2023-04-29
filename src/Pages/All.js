import React, {useEffect, useState}from 'react'
import axios from 'axios'

const All = () => {
  const URL = "http://localhost:4000"

  const [accs,setAccs] = useState ([]);
  const getList = () => {
    axios
      .get(URL + "/accidents",{crossdomain: true})
      .then((res) => {
        console.log(res.data);
        setAccs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      
  };
  useEffect(() => {
    getList();
  }, [])
  
  return (
    <>
      <div id="top" style={{ fontFamily: "El Messiri" }} >
        <h1 className='text-3xl p-3 text-red-600'>Most Lethal Accidents : <span className='text-lg text-black'>Must read for safety purposes</span></h1>
        <div id="cards" className='flex'>

{/* card 1 */}
<div> 
</div>
          
        </div>
      </div>
    </>
  )
}

export default All