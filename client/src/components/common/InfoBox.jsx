import PropTypes from "prop-types";
import "../../assets/styles/components/infoBox.scss";

const InfoBox = ({ title, value, width = "narrow", color = "dark" }) => {
  return (
    <div className={"info-box " + color + " " + width}>
      <h6>{title}</h6>
      <h6> {value}</h6>
    </div>
  );
};

InfoBox.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  width: PropTypes.string,
  color: PropTypes.string,
};

export default InfoBox;
