const Green_Button = ({onColorCheng}) => {
  const handleClickFunction =()=>{
    onColorCheng('green');
  };
  return (
    <div className="green_color">
        <button className='greenbtn' onClick={handleClickFunction}>Green_Button</button>
    </div>
  )
}
export default Green_Button;