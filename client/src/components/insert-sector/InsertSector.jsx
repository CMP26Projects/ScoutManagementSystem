import { useState } from "react";
import Button from "../common/Button";
import PageTitle from "../common/PageTitle";
import TextInput from "../common/Inputs";
import "./InsertSector.scss";
import { useInsertSectorMutation } from "../../redux/slices/sectorApiSlice";
import { toast } from "react-toastify";

export default function InsertSector() {
  const [sectorBaseName, setSectorBaseName] = useState("");
  const [sectorSuffixName, setSectorSuffixName] = useState("");
  const [unitSectorLeader, setUnitSectorLeader] = useState("");

  const [insertSector, { isLoading: isLoadingInsertSector }] =
    useInsertSectorMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSector = {
      baseName: sectorBaseName,
      suffixName: sectorSuffixName,
      unitCaptainId: unitSectorLeader,
    };
    console.log(newSector);

    // Try To Insert New Sector
    try {
      const res = await insertSector(newSector).unwrap();
      if (res.status === 400 || res.status === 500)
        throw new Error("Something went wrong while inserting the sector");
      toast.success("تم إنشاء القطاع بنجاح");
    } catch (err) {
      toast.error("حدث خطأ أثناء إنشاء القطاع");
      toast.error(JSON.stringify(err));
    }
  };

  return (
    <div className="insert-sector container">
      <PageTitle title="إنشاء قطاع جديد" />

      <form onSubmit={handleSubmit} className="insert-sector__from">
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
