/* eslint-disable react/prop-types */
const CustomHR = ({color = null}) => <hr style={{
    borderColor: color ? color : "#EAF6F6",
    borderStyle: "none",
    borderTopStyle: "dotted",
    borderWidth: "8px",
    width: "7%",
    margin: "0 auto"
  }} 
/>;

  export default CustomHR;