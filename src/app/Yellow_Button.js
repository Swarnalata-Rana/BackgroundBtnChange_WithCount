const Yellow_Button = ({onColorCheng}) => {
  const handleClickFunction =()=>{
    onColorCheng('yellow');
  };
  return (
    <div className="yellow_color">
            <button className='yellowbtn' onClick={handleClickFunction}>Yellow_Button</button>
    </div>
  )
}
export default Yellow_Button;