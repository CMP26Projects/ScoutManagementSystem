import "../../assets/styles/components/InfoSection.scss";
import { useSelector } from "react-redux";
import InfoBox from "./InfoBox";

export default function InfoSection() {
  const { userInfo } = useSelector((state) => state.auth);
  const { type } = userInfo;

  const GeneralCaptainInfo = () => {
    return (
      <>
        <InfoBox title="محتوى الخزنة" value="10,113ج.م" color="purple" />
        <InfoBox title="متوسط نسبة الغياب" value="10,113ج.م" color="dark" />
        <InfoBox title="عدد الأفراد" value="10,113ج.م" color="dark" />
        <InfoBox title="عدد القادة" value="10,113ج.م" color="dark" />
      </>
    );
  };

  return (
    <div className="info-section">
      {type === "general" && <GeneralCaptainInfo />}
      {type === "regular" && <GeneralCaptainInfo />}
      {type === "unit" && <GeneralCaptainInfo />}
    </div>
  );
}
