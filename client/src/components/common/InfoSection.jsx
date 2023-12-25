import "../../assets/styles/components/InfoSection.scss";
import { useSelector } from "react-redux";
import InfoBox from "./InfoBox";
import { useGetCaptainsQuery } from "../../redux/slices/captainsApiSlice";
import { useEffect } from "react";

export default function InfoSection() {
  const { userInfo } = useSelector((state) => state.auth);
  const { type } = userInfo;

  const GeneralCaptainInfo = () => {
    const { data, isFetching, isLoading } = useGetCaptainsQuery();
    const captainCount = data?.body.length;

    return (
      <>
        <InfoBox title="محتوى الخزنة" value={captainCount} color="purple" />
        <InfoBox title="متوسط نسبة الغياب" value="10,113ج.م" color="dark" />
        <InfoBox title="عدد الأفراد" value="10,113ج.م" color="dark" />
        <InfoBox
          title="عدد القادة"
          value={isFetching ? "جاري التحميل" : captainCount}
          color="dark"
        />
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
