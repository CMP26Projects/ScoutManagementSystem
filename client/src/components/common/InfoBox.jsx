import PropTypes from "prop-types";
import "../../assets/styles/components/infoBox.scss";

const InfoBox = ({ title, value, width = "narrow", color = "dark", spans }) => {
  const spanClass = spans ? "span-2-cols" : "";
  return (
    <div className={"info-box " + color + " " + width + " " + spanClass}>
      <h6>{title}</h6>
      <h6> {value}</h6>
    </div>
  );
};

InfoBox.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.any,
  width: PropTypes.string,
  color: PropTypes.string,
};

export default InfoBox;
