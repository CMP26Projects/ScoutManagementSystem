import { useState } from "react";
import PageTitle from "../common/PageTitle";
import TextInput from "../common/Inputs";
import Button from "../common/Button";
import CustomCheckbox from "../common/CustomCheckbox";
import "./InsertTermPage.scss";

export default function InsertTermPage() {
  const [termName, setTermName] = useState("");
  const [termStartDate, setTermStartDate] = useState("");
  const [termEndDate, setTermEndDate] = useState("");
  const [understandCheckbox, setUnderstandCheckbox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send request with this info to the server
    console.log({
      termName,
      termStartDate,
      termEndDate,
      understandCheckbox,
    });
  };

  return (
    <div className="insert-term container">
      <PageTitle title="إنشاء فترة " />
      <form className="insert-term__form" onSubmit={handleSubmit}>
        <TextInput
          label="اسم الفترة الجديدة"
          type="text"
          name="termName"
          value={termName}
          onChange={(e) => setTermName(e.target.value)}
          placeholder="اسم الفترة"
          required
        />
        <TextInput
          label="تاريخ بداية الفترة"
          type="date"
          name="termStartDate"
          value={termStartDate}
          onChange={(e) => setTermStartDate(e.target.value)}
          placeholder="تاريخ بداية الفترة"
          required
        />
        <TextInput
          label="تاريخ نهاية الفترة"
          type="date"
          name="termEndDate"
          value={termEndDate}
          onChange={(e) => setTermEndDate(e.target.value)}
          placeholder="تاريخ نهاية الفترة"
          required
        />
        <p className="insert-term__note">
          **إنشاء فترة هو إجراء لا رجعة به يجب مراعاة انه بعد إنشاء الفترة
          ستتحول كل الصفحات الاخرى الى احدث فترة تم إنشاءها
        </p>
        <CustomCheckbox
          labels={["لقد فهمت"]}
          values={["understand"]}
          checkedValues={understandCheckbox ? ["understand"] : []}
          onChange={(e) => setUnderstandCheckbox(e.target.checked)}
          name="understand"
        />
        <Button
          className="insert-term__btn Button--medium Button--primary-darker"
          type="submit"
        >
          إنشاء الفترة
        </Button>
      </form>
      <div className="actions-row">
        <Button
          className="insert-term__btn Button--medium Button--danger"
          disabled
        >
          الذهاب للترقيات
        </Button>
        <Button
          className="insert-term__btn Button--medium Button--dark"
          disabled
        >
          العودة للإجراءت
        </Button>
      </div>
    </div>
  );
}
