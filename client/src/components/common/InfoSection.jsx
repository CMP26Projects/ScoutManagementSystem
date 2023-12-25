import "../../assets/styles/components/InfoSection.scss";
import { useSelector } from "react-redux";
import InfoBox from "./InfoBox";
import { useGetCaptainsQuery } from "../../redux/slices/captainsApiSlice";
import { useGetAbsenceRateQuery } from "../../redux/slices/statsApiSlice";
import { useGetAllScoutsCountQuery } from "../../redux/slices/scoutApiSlice";

export default function InfoSection() {
  const { userInfo } = useSelector((state) => state.auth);
  const { type } = userInfo;

  const GeneralCaptainInfo = () => {
    const { data: captains, isFetching } = useGetCaptainsQuery();
    const captainCount = captains?.body.length;

    const { data: absenceRate, isFetching: isFetchingAbsence } =
      useGetAbsenceRateQuery();

    const { data: scoutsCount, isFetching: isFetchingScoutsCount } =
      useGetAllScoutsCountQuery();

    return (
      <>
        <InfoBox title="محتوى الخزنة" value={captainCount} color="purple" />
        <InfoBox
          title="متوسط نسبة الغياب"
          value={
            isFetchingAbsence
              ? "جاري التحميل"
              : !absenceRate
              ? "لا يوجد بيانات"
              : absenceRate?.body?.absenceRate + "%"
          }
          color="dark"
        />
        <InfoBox
          title="عدد الأفراد"
          value={
            isFetchingScoutsCount
              ? "جاري التحميل"
              : !scoutsCount
              ? "لا يوجد بيانات"
              : scoutsCount?.body
          }
          color="dark"
        />
        <InfoBox
          title="عدد القادة"
          value={
            isFetching
              ? "جاري التحميل"
              : !captainCount
              ? "لا يوجد بيانات"
              : captainCount
          }
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
