
//PropTypes.oneOf
import PropTypes from "prop-types";
export const SampleColor = (props) => {
    const{color}=props;
  return (
    <div style={{backgroundColor : color ,padding: "10px" , color:"white"}}>This component has bacground color is {color}</div>
  )
}


SampleColor.propTypes={
     color:PropTypes.oneOf(["red", "green" ,"blue"]).isRequired,



    
}