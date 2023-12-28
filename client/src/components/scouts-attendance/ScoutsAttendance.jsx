import { useState } from "react";
import CustomSelect from "../common/CustomSelect";
import PageTitle from "../common/PageTitle";
import "./ScoutsAttendance.scss";

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

  const handleCheckboxChange = (scoutId, checkboxType) => {
    setAttendance((prevState) =>
      prevState.map((scout) => {
        scout.id === scoutId
          ? { ...scout, [checkboxType]: !scout[checkboxType] }
          : scout;
      })
    );
  };

  return (
    <div className="scouts-attendance-page container">
      <PageTitle title="تسجيل الغياب" />

      <div className="chooseWeek">
        <CustomSelect
          /* TODO: Change checkbox to week  */
          label="تغيير الأسبوع"
          options={[
            { value: "1", text: "الأسبوع الأول" },
            { value: "2", text: "الأسبوع الثاني" },
          ]}
          value="1"
        />
      </div>
      <div className="record-attendance">
        <table className="simple-table-for-checkboxes">
          <thead>
            <tr>
              <th>#</th>
              <th>الاسم</th>
              <th>حاضر</th>
              <th>معتذر</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((scout) => (
              <tr key={scout.id}>
                <td>{scout.id}</td>
                <td>{scout.name}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={scout.present}
                    onChange={() => handleCheckboxChange(scout.id, "present")}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={scout.excused}
                    onChange={() => handleCheckboxChange(scout.id, "excused")}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
