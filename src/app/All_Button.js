"use client"
import React from 'react';
import Blue_Button from './Blue_Button'
import Green_Button from './Green_Button'
import Red_Button from './Red_Button'
import Yellow_Button from './Yellow_Button'
const All_Button = () => {
  return (
    <div>       
        <div>
                <Red_Button onColorCheng={handleClickFunction1}/>
                <Yellow_Button onColorCheng={handleClickFunction1}/>
                <Blue_Button onColorCheng={handleClickFunction1}/>
                <Green_Button onColorCheng={handleClickFunction1}/>
        </div>
    </div>
  )
}
export default All_Button;