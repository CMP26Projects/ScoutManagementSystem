import PageTitle from "../common/PageTitle";
import ActivityCard from "../common/activityCard";
import Button from "../common/Button";

import "./ActivityPage.scss";
import { useGetAllActivitiesQuery } from "../../redux/slices/activitiesApiSlice";

const ActivityPage = () => {
  const { data: activityList, isFetching: isFetchingActivity } =
    useGetAllActivitiesQuery();

  if (!isFetchingActivity) {
    console.log("activities = ", activityList);
  }
  return (
    <div className="activity-page">
      <PageTitle title="الأنشطة" />
      <Button
        className="Button--medium Button--success add-button"
        linkTo="/add-activity"
      >
        إضافة
      </Button>
      <div className="activity-section">
        {isFetchingActivity
          ? "جاري التحميل..."
          : activityList.body.map((act) => {
              return <ActivityCard activity={act} />;
            })}
      </div>
    </div>
  );
};

export default ActivityPage;
