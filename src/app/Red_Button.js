const Red_Button = ({onColorCheng}) => {
  const handleClickFunction =()=>{
    onColorCheng('red');
  };
  return (
    <div className="Red_color">
        <button className='redbtn' onClick={handleClickFunction}>Red_Button</button>
    </div>
  )
}
export default Red_Button;

