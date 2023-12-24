import React from "react";
import StatisticTable from "../common/StatisticTable";

const TestTable = () => {
  const columnNames = [
    { name: "الاسم" },
    { name: "النوع" },
    { name: "الحالة" },
    { name: "الوضع" },
    { name: "أهي ماشية" },
  ];
  const dataRows = [
    {
      name: "إسماعيل أحمد قنباوي",
      type: "ذكر",
      status: "مقيد",
    },

    {
      name: "يعقوب غيتة",
      type: "ذكر",
      status: "غير مقيد",
    },
  ];

  return (
    <section className="test-box">
      <StatisticTable
        title="معلومات الكباتن"
        columnNames={columnNames}
        dataRows={dataRows}
      />
    </section>
  );
};

export default TestTable;
