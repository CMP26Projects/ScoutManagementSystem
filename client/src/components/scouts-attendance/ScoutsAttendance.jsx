import { useState } from "react";
import CustomSelect from "../common/CustomSelect";
import PageTitle from "../common/PageTitle";
import "./ScoutsAttendance.scss";
import InfoBox from "../common/InfoBox";
import TextInput from "../common/Inputs";
import Button from "../common/Button";
import { useGetAllWeeksQuery } from "../../redux/slices/termApiSlice";

const scoutsDumpyData = [
  {
    id: 1,
    name: "محمد علي",
  },
  {
    id: 2,
    name: "محمد la علي",
  },
  {
    id: 3,
    name: "  some one special",
  },
  {
    id: 4,
    name: "last christmas",
  },
  {
    id: 5,
    name: "i gave you my heart",
  },
  {
    id: 6,
    name: "but the very next day",
  },
  {
    id: 7,
    name: "you gave it away",
  },
  {
    id: 8,
    name: "this year",
  },
  {
    id: 9,
    name: "to save me from tears",
  },
  {
    id: 10,
    name: "i'll give it to someone special",
  },
  {
    id: 11,
    name: "once bitten and twice shy",
  },
  {
    id: 12,
    name: "i keep my distance",
  },
  {
    id: 13,
    name: "but you still catch my eye",
  },
  {
    id: 14,
    name: "tell me baby",
  },
  {
    id: 15,
    name: "do you recognize me",
  },
  {
    id: 16,
    name: "well",
  },
  {
    id: 17,
    name: "it's been a year",
  },
  {
    id: 18,
    name: "it doesn't surprise me",
  },
  {
    id: 19,
    name: "happy christmas",
  },
  {
    id: 20,
    name: "i wrapped it up and sent it",
  },
  {
    id: 21,
    name: "with a note saying i love you",
  },
  {
    id: 22,
    name: "i meant it",
  },
  {
    id: 23,
    name: "now i know what a fool i've been",
  },
  {
    id: 24,
    name: "but if you kissed me now",
  },
  {
    id: 25,
    name: "i know you'd fool me again",
  },
  {
    id: 26,
    name: "last christmas",
  },
  {
    id: 27,
    name: "i gave you my heart",
  },
  {
    id: 28,
    name: "but the very next day",
  },
  {
    id: 29,
    name: "you gave it away",
  },
  {
    id: 30,
    name: "this year",
  },
  {
    id: 31,
    name: "to save me from tears",
  },
];

export default function ScoutsAttendance() {
  const [attendance, setAttendance] = useState(
    scoutsDumpyData.map((scout) => ({
      ...scout,
      present: false,
      excused: false,
    }))
  );
  const [subscription, setSubscription] = useState(0);
  const [chosenWeek, setChosenWeek] = useState("");

  let {
    data: weeks,
    isLoading: isLoadingWeeks,
    isFetching: isFetchingWeeks,
    isSuccess: isSuccessWeeks,
  } = useGetAllWeeksQuery();

  if (isSuccessWeeks && !isLoadingWeeks && !isFetchingWeeks) {
    weeks = weeks?.body;
    weeks = weeks.map((week) => ({
      ...week,
      display:
        week?.weekNumber +
        " - " +
        new Date(week?.startDate).toLocaleDateString(),
    }));

    console.log(weeks);
  }

  const handleCheckboxChange = (scoutId, checkboxType) => {
    setAttendance((prevState) => {
      return prevState.map((scout) => {
        return scoutId === scout.id
          ? { ...scout, [checkboxType]: !scout[checkboxType] }
          : scout;
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(attendance);

    const attendanceReqBody = attendance.map((scout) => ({
      ...scout,
      attendanceStatus: scout.present
        ? "present"
        : scout.excused
        ? "excused"
        : "absent",
      weekNumber: parseInt(chosenWeek),
      termNumber: weeks.find((week) => week.weekNumber === parseInt(chosenWeek))
        ?.termNumber,
    }));

    console.log({ attendanceReqBody });
  };

  return (
    <form onSubmit={handleSubmit} className="scouts-attendance-page container">
      <PageTitle title="تسجيل الغياب" />

      <div className="choose-week">
        <CustomSelect
          label="تغيير الأسبوع"
          data={weeks ? weeks : []}
          displayMember="display"
          valueMember="weekNumber"
          selectedValue={chosenWeek}
          onChange={(e) => {
            setChosenWeek(e.target.value);
          }}
          required={true}
        />
        {isLoadingWeeks && <p>جاري التحميل...</p>}
      </div>

      <div className="record-attendance">
        <table className="simple-table-for-checkboxes">
          <thead>
            <tr>
              <th className="num-col">#</th>
              <th>الاسم</th>
              <th className="check-col">حاضر</th>
              <th className="check-col">معتذر</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((scout) => (
              <tr key={scout.id}>
                <td className="num-col">{scout.id}</td>
                <td>{scout.name}</td>
                <td className="check-col">
                  <input
                    type="checkbox"
                    checked={scout?.present}
                    onChange={() => handleCheckboxChange(scout.id, "present")}
                    disabled={scout?.excused}
                  />
                </td>
                <td className="check-col">
                  <input
                    type="checkbox"
                    checked={scout?.excused}
                    onChange={() => handleCheckboxChange(scout.id, "excused")}
                    disabled={scout?.present}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="info-section attendance-info-section">
          <InfoBox title="العدد الكلي" value={attendance.length} />
          <InfoBox
            title="الحضور"
            value={attendance.filter((scout) => scout.present).length}
          />
          <InfoBox
            title="نسبة الحضور"
            value={
              Math.round(
                (attendance.filter((scout) => scout.present).length /
                  attendance.length) *
                  100
              ) + "%"
            }
          />
          <InfoBox
            title="الغياب"
            value={attendance.filter((scout) => !scout.present).length}
          />
        </div>
      </div>
      <div className="subscription-box">
        <div className="info-box colorful">
          <h4>تسجيل الاشتراك</h4>
          <TextInput
            label=""
            type="number"
            placeholder="المبلغ المدفوع"
            value={subscription.toString()}
            onChange={(e) => setSubscription(e.target.value)}
            required={true}
          />
          <p>يرجى ادخال إجمالي الاشتراك الفعلي</p>
        </div>
      </div>
      <Button className="Button--medium Button--success-light" type="submit">
        تسليم
      </Button>
    </form>
  );
}
