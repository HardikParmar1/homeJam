
const Circle = (props)=>{
  return(
    <div className="circle">
    <img className="label-icon" src={props.icon} alt="icon"/>
    <p className="count">{props.count}</p>
    <p className="label-text">{props.label}</p>
    </div>

  )
}

export default Circle;
