import PageTitle from "../common/PageTitle";
import "./AssignCaptainPage.scss";
import ChangeCaptainType from "./ChangeCaptainType";

export default function AssignCaptainPage() {
  return (
    <div className="assign-captain-page container">
      <PageTitle title="تعيين قائد" />
      <div className="assign-captain-page__form__container">
        <h4 className="assign-captain-page__form__title">تغيير رتبة قائد</h4>
        <ChangeCaptainType />
      </div>

      <div className="assign-captain-page__form__container">
        <h4 className="assign-captain-page__form__title">
          تعيين قطاع لقائد عادي
        </h4>
      </div>
      <div className="assign-captain-page__form__container">
        <h4 className="assign-captain-page__form__title">
          تعيين قطاعات لقائد وحدة
        </h4>
      </div>
    </div>
  );
}
