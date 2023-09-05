"use client"
import { useState } from 'react';
import Blue_Button from './Blue_Button';
import Green_Button from './Green_Button';
import Red_Button from './Red_Button';
import Yellow_Button from './Yellow_Button';
const  page=()=> {
    const[color,setColor]=useState('');
    const[count,setCount]=useState({
        red:0,
        yellow:0,
        blue:0,
        green:0,
    });
    const handleClickFunction1=(newcolor)=>{
        setColor(newcolor)
        setCount((prev)=>({
            ...prev,
            [newcolor]:prev[newcolor]+1
        }))
    };
    return (
        <>  <div className='main_box'>
                <div className='box1'>
                    <div className='color_box' style={{backgroundColor:color}}>
                        <div className='color_box_letter'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                    </div>    
                    <div className='count_box'>
                        <div className="count_box2">
                            <div >Red_Count:-{count.red}</div>
                            <div >Yellow_Count:-{count.yellow}</div>
                            <div >Blue_Count:-{count.blue}</div>
                            <div >Green_Count:-{count.green}</div>
                        </div>
                    </div>
                </div>
                <div className='box2'>
                    <Red_Button onColorCheng={handleClickFunction1}/>
                    <Yellow_Button onColorCheng={handleClickFunction1}/>
                    <Blue_Button onColorCheng={handleClickFunction1}/>
                    <Green_Button onColorCheng={handleClickFunction1}/>
                </div>
            </div>
        </>
  )
};
export default page;
   

