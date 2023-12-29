import React, { useState } from "react";
import PageTitle from "../common/PageTitle";
import TextInput from "../common/Inputs";
import CustomSelect from "../common/CustomSelect";
import Button from "../common/Button";
import "../../assets/styles/components/MoneyPage.scss";

const AddActivityPage = () => {
  const [activityName, setActivityName] = useState(" ");
  const [activityType, setActivityType] = useState(" ");
  const [activityPlace, setActivityPlace] = useState(" ");
  const [activityDay, setActivityDay] = useState(" ");

  const activityTypesList = [
    { value: "entertainment", name: "ترفيه" },
    { value: "rowing", name: "تجديف" },
    { value: "camping", name: "نخييم" },
    { value: "wildCooking", name: "طهي في البرية" },
    { value: "scouting", name: "كشفي" },
    { value: "volunteering", name: "تطوعي" },
    { value: "other", name: "غير ذلك" },
  ];

  const days = [
    { name: "السبت", value: "sat" },
    { name: "الأحد", value: "sun" },
    { name: "الاثنين", value: "mon" },
    { name: "الثلاثاء", value: "tue" },
    { name: "الأربعاء", value: "wed" },
    { name: "الخميس", value: "thu" },
    { name: "الجمعة", value: "fri" },
  ];

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const newActivity = {
      name: activityName,
      place: activityType,
      day: activityDay,
      type: activityType,
    };

    console.log(newActivity);
    // try {
    //   const res = await insertScout(newActivity).unwrap();
    //   if (res.status === 400 || res.status === 500)
    //     throw new Error("Something went wrong while inserting the scout");
    //   toast.success("تم إنشاء الكشاف بنجاح");
    // } catch (err) {
    //   console.log();
    //   toast.error("حدث خطأ أثناء إنشاء الكشاف");
    //   toast.error(JSON.stringify(err));
    // }
  };
  return (
    <div className="money-page">
      <PageTitle title="إضافة نشاط" />
      <form className="add-item" onSubmit={HandleSubmit}>
        <h4>إضافة بند</h4>
        <TextInput
          type="text"
          label="اسم النشاط"
          name="activityName"
          placeholder="أضف النشاط"
          value={activityName}
          onChange={(e) => setActivityName(e.target.value)}
          required={true}
        />

        <CustomSelect
          label="اختار النوع"
          name="activityType"
          data={activityTypesList}
          displayMember="name"
          valueMember="value"
          selectedValue={activityType}
          onChange={(e) => setActivityType(e.target.value)}
          required={true}
        />

        <TextInput
          type="text"
          label="اسم المكان"
          name="activityPlace"
          placeholder="اختر اسم المكان"
          value={activityPlace}
          onChange={(e) => setActivityPlace(e.target.value)}
          required={false}
        />

        <CustomSelect
          label="اختار اليوم"
          name="activityDay"
          data={days}
          displayMember="name"
          valueMember="value"
          selectedValue={activityDay}
          onChange={(e) => setActivityDay(e.target.value)}
          required={true}
        />

        <Button className="insert-sector__btn Button--medium Button--primary-darker">
          إضافة
        </Button>

        {/* {isLoadingInsertScout && (
          <p
            style={{
              direction: "rtl",
            }}
          >
            جاري الإضافة
          </p>
        )} */}
      </form>
    </div>
  );
};

export default AddActivityPage;
