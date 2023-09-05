import React, { useState } from 'react'
const Color_component = ({onCheng}) => {
  const[color,setColor]=useState('');
    const handleClickFunction=(event)=>{
      setColor(event)
      onCheng(event)
    }
  return (
    <div className='main'>    
        <div className='box' style={{backgroundColor:color}}>Chenging Box</div>    
            <button className='redbtn' onClick={()=>handleClickFunction("red")}>RedBtn</button>
            <button className='yellobtn' onClick={()=>handleClickFunction("yellow")}>YelloBtn</button>
            <button className='bluebtn' onClick={()=>handleClickFunction("blue")}>BlueBtn</button>
            <button className='greenbtn' onClick={()=>handleClickFunction("green")}>GreenBtn</button>
    </div>
  )
}
export default Color_component;

