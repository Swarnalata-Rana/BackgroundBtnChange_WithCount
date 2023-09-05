const Blue_Button = ({onColorCheng}) => {
  const handleClickFunction =()=>{
    onColorCheng('blue');
  };
  return (
    <div className="blue_color">        
        <button className='bluebtn' onClick={handleClickFunction}>Blue_Button</button>
    </div>
  )
}
export default Blue_Button;