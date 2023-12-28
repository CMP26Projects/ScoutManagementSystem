import React from "react";
import {
  useGetBudgetQuery,
  useGetExpenseQuery,
  useGetIncomeQuery,
} from "../../redux/slices/financeApiSlice";
import StatisticTable from "../common/StatisticTable";
import InfoBox from "../common/InfoBox";
import "../../assets/styles/components/MoneyInfoSection.scss";
const InfoSectionMoneyPage = () => {
  const ItemsColNames = [{ name: "#" }, { name: "الوصف" }, { name: "القيمة" }];

  const { data: budget, isFetching: isFetchingBudget } = useGetBudgetQuery();
  const { data: income, isFetching: isFetchingIncome } = useGetIncomeQuery();
  const { data: expense, isFetching: isFetchingExpense } = useGetExpenseQuery();

  if (budget && !isFetchingBudget) console.log("budget = ", budget);
  if (income && !isFetchingIncome) console.log("budget = ", income);
  if (expense && !isFetchingExpense) console.log("budget = ", expense);

  return (
    <div className="all-info">
      <section className="info-section"> 
        <InfoBox
          title="محتوى الخزنة"
          value={
            isFetchingBudget
              ? "جاري التحميل"
              : !budget
              ? "لا يوجد بيانات"
              : budget?.body + " جنيه"
          }
          color="purple"
        />
        <InfoBox
          title="اشتراك الاسبوع الحالي"
          value={
            //   isFetchingAbsence
            //     ? "جاري التحميل"
            //     : !absenceRate?
            "لا يوجد بيانات"
            // : absenceRate?.body * 100 + "%"
          }
          color="dark"
        />
        <InfoBox
          title="أجمالي الأصول"
          value={
            isFetchingExpense
              ? "جاري التحميل"
              : !expense
              ? "لا يوجد بيانات"
              : expense?.body + " جنيه"
          }
          color="dark"
        />
        <InfoBox
          title="أجمالي الخصوم"
          value={
            isFetchingIncome
              ? "جاري التحميل"
              : !income
              ? "لا يوجد بيانات"
              : income.body + " جنيه"
          }
          color="dark"
        />
      </section>

      <section className="table">
        <StatisticTable
          title="البنود"
          columnNames={ItemsColNames}
          dataRows={[
            {
              date: "1/1/2023",
              description: "أوتاد جديدة",
              value: "200" + "جنيه",
            },
          ]}
        />
      </section>
    </div>
  );
};

export default InfoSectionMoneyPage;
