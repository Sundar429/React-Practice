import PropTypes from "prop-types";

//PropTypes oneOfType

export const MultiType = (props) => {
  return (
    <>
      <p> The value is {props.value}</p>
    </>
  )
}

MultiType.propTypes={
    value:PropTypes.oneOfType([PropTypes.string,PropTypes.number,PropTypes.bool]).isRequired,
}
