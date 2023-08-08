import React from 'react'

const Color_component = () => {
    const onClickRedBtn=(e)=>{
      console.log(e)
    }
    const onClickyelloBtn=(e)=>{
      console.log(e)
    }
    const onClickblueBtn=(e)=>{
      console.log(e)
    }
    const onClickgreenBtn=(e)=>{
      console.log(e)
    }
  return (
    <div>        
        <button className='redbtn' onClick={()=>{onClickRedBtn="red"}}>RedBtn</button>
        <button className='yellobtn' onClick={()=>{onClickyelloBtn="yello"}}>YelloBtn</button>
        <button className='bluebtn' onClick={()=>{onClickblueBtn="blue"}}>BlueBtn</button>

    </div>
  )
}

export default Color_component
