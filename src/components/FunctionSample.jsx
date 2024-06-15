import PropTypes from "prop-types";

export const FunctionSample = (props) => {
    const{handleClick}=props
  return (
    <div>
     <p>This is Functional Component</p>
     <button onClick={handleClick}>Click Now</button>

    </div>
  )
}

FunctionSample.propTypes={
    handleClick:PropTypes.func.isRequired,
}