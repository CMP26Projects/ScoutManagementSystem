import React, { useState } from "react";
import TextInput, { RadioInput } from "../common/Inputs";
import CustomSelect from "../common/CustomSelect";
import "../../assets/styles/components/InsertScoutPage.scss";
import PageTitle from "../common/PageTitle";
import { useInsertScoutMutation } from "../../redux/slices/scoutApiSlice";
import Button from "../common/Button";
import { toast } from "react-toastify";
import { useGetSectorsQuery } from "../../redux/slices/sectorApiSlice";

const UpdateScoutPage = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [oldChosenSector, setOldChosenSector] = useState("");
  const [chosenSector, setChosenSector] = useState("");
  const [studyYear, setStudyYear] = useState("");
  const [enrollDate, setEnrollDate] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const [insertScout, { isLoading: isLoadingInsertScout }] =
    useInsertScoutMutation();

  let sectors = [];

  const { data, isFetching } = useGetSectorsQuery();

  if (data && !isFetching) {
    sectors = data.body;
    if (sectors.length === 0) {
      sectors = [{ baseName: "لا يوجد قطاع", suffixName: "" }];
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newScout = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      gender: gender,
      sectorbaseName: chosenSector.split(" ")[0],
      sectorSuffixName: chosenSector.split(" ")[1],
    };

    try {
      const res = await insertScout(newScout).unwrap();
      if (res.status === 400 || res.status === 500)
        throw new Error("Something went wrong while inserting the scout");
      toast.success("تم إنشاء الكشاف بنجاح");
    } catch (err) {
      toast.error("حدث خطأ أثناء إنشاء الكشاف");
      toast.error(JSON.stringify(err));
    }
  };

  return (
    <div className="add-scout-page">
      <PageTitle title="إضافة و تعيين كشافيين" />
      <section className="add-new-scout">
        <form className="add-scout-form" onSubmit={handleSubmit}>
          <h4>اختار الكشاف</h4>
          <CustomSelect
            name="sectors-old"
            label={"اختر القطاع"}
            data={sectors}
            displayMember={"sectorAllName"}
            valueMember={"sectorAllName"}
            selectedValue={oldChosenSector}
            required={true}
            onChange={(e) => setOldChosenSector(e.target.value)}
          />

          <CustomSelect
            name="sectors"
            label={"اختر الكشاف"}
            data={sectors}
            displayMember={"sectorAllName"}
            valueMember={"sectorAllName"}
            selectedValue={chosenSector}
            required={true}
            onChange={(e) => setChosenSector(e.target.value)}
          />

          <h4>تعديل الكشاف</h4>
          <div className="horizontally-aligned">
            <div className="form-card ">
              <TextInput
                type="text"
                label="الاسم الأول"
                name="firstname"
                placeholder="جون"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required={true}
              />
            </div>
            <div className="form-card">
              <TextInput
                type="text"
                label="الاسم الأوسط (الأب)"
                name="middlename"
                placeholder="دوي"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                required={true}
              />
            </div>
          </div>
          <div className="horizontally-aligned">
            <div className="form-card form-item">
              <TextInput
                type="text"
                label="الاسم الأخير (الجد)"
                name="lastname"
                placeholder="السيد"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required={true}
              />
            </div>
            <div className="form-card">
              <RadioInput
                label="النوع"
                name="gender"
                valuesArr={["ذكر", "أنثى"]}
                onChange={(e) => setGender(e.target.value)}
                required={true}
              />
            </div>
          </div>

          <div className="choose-sector">
            <CustomSelect
              name="sectors"
              label={"اختر القطاع"}
              data={sectors}
              displayMember={"sectorAllName"}
              valueMember={"sectorAllName"}
              selectedValue={chosenSector}
              required={true}
              onChange={(e) => setChosenSector(e.target.value)}
            />
          </div>

          <div className="horizontally-aligned">
            <div className="form-card ">
              <TextInput
                type="date"
                label="تاريخ الميلاد"
                name="birthDate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                required={true}
              />
            </div>
            <div className="form-card">
              <TextInput
                type="date"
                label="تاريخ دخول الكشافة"
                name="enrollDate"
                value={enrollDate}
                onChange={(e) => setEnrollDate(e.target.value)}
                required={true}
              />
            </div>
          </div>

          <div>
            <TextInput
              label="السنة الدراسية"
              type="text"
              name="studyYear"
              placeholder="الأول الإعدادي"
              value={studyYear}
              onChange={(e) => setStudyYear(e.target.value)}
              required={false}
            />
          </div>
          <Button className="insert-sector__btn Button--medium Button--primary-darker">
            إضافة
          </Button>

          {isLoadingInsertScout && (
            <p
              style={{
                direction: "rtl",
              }}
            >
              جاري الإضافة
            </p>
          )}
        </form>
      </section>
    </div>
  );
};

export default UpdateScoutPage;
