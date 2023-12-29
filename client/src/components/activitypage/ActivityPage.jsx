import PageTitle from "../common/PageTitle";
import ActivityCard from "../common/ActivityCard";
import Button from "../common/Button";

import "./ActivityPage.scss";

const ActivityPage = () => {
  return (
    <div className="activity-page">
      <PageTitle title="الأنشطة" />
      <Button className="Button--medium Button--success add-button">
        إضافة
      </Button>
      <div className="activity-section">
        <ActivityCard title="تخييم" place="محمية وادي دجلة" time="يوم الجمعة" />
        <ActivityCard title="تخييم" place="محمية وادي دجلة" time="يوم الجمعة" />
        <ActivityCard title="تخييم" place="محمية وادي دجلة" time="يوم الجمعة" />
        <ActivityCard title="تخييم" place="محمية وادي دجلة" time="يوم الجمعة" />
      </div>
    </div>
  );
};

export default ActivityPage;
