import "../../assets/styles/components/infoBox.scss";
const InfoBox = ({ title, value, width = "narrow", color = "dark" }) => {
  return (
    <div className={"info-box " + color + " " + width}>
      <p6>{title}</p6>
      <p6> {value}</p6>
    </div>
  );
};

export default InfoBox;
