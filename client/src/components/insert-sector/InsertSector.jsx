import { useState } from "react";
import Button from "../common/Button";
import PageTitle from "../common/PageTitle";
import TextInput from "../common/Inputs";
import "./InsertSector.scss";

export default function InsertSector() {
  const [sectorBaseName, setSectorBaseName] = useState("");
  const [sectorSuffixName, setSectorSuffixName] = useState("");
  const [unitSectorLeader, setUnitSectorLeader] = useState("");

  return (
    <div className="insert-sector container">
      <PageTitle title="إنشاء قطاع جديد" />

      <form className="insert-sector__from">
        <div className="insert-sector__form__container">
          <TextInput
            label="اسم القطاع"
            type="text"
            name="sectorBaseName"
            value={sectorBaseName}
            onChange={(e) => setSectorBaseName(e.target.value)}
            placeholder="اسم القطاع"
            required
          />
          <TextInput
            label="رقم القطاع"
            type="text"
            name="sectorSuffixName"
            value={sectorSuffixName}
            onChange={(e) => setSectorSuffixName(e.target.value)}
            placeholder="مثل: أ, ب, ج"
            required
          />
        </div>
        <Button className="insert-sector__btn Button--medium Button--primary-darker">
          إنشاء
        </Button>
      </form>
    </div>
  );
}
