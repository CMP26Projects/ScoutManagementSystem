import React from "react";
import PageTitle from "../common/PageTitle";
import ActivityCard from "../common/activityCard";

const ActivityPage = () => {
  return (
    <>
      <PageTitle title="الأنشطة" />
      <Button className="Button--medium --success">تعديل</Button>
      <div className="activity-section">
        <ActivityCard title="تخييم" place="محمية وادي دجلة" time="يوم الجمعة" />
        <ActivityCard title="تخييم" place="محمية وادي دجلة" time="يوم الجمعة" />
        <ActivityCard title="تخييم" place="محمية وادي دجلة" time="يوم الجمعة" />
        <ActivityCard title="تخييم" place="محمية وادي دجلة" time="يوم الجمعة" />
      </div>
    </>
  );
};

export default ActivityPage;
