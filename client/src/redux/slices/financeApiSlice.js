import { apiSlice } from "./apiSlice";

const FINANCE_URL = "/api/finance";

export const financeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetBudget: builder.query({
      query: () => ({
        url: `${FINANCE_URL}`,
        method: "GET",
      }),
      providesTags: ["finance"],
    }),
    GetIncome: builder.query({
      query: () => ({
        url: `${FINANCE_URL}/income`,
        method: "GET",
      }),
      providesTags: ["Income"],
    }),

    GetExpense: builder.query({
      query: () => ({
        url: `${FINANCE_URL}/expense`,
        method: "GET",
      }),
      providesTags: ["Expense"],
    }),
    InsertOtherItem: builder.mutation({
      query: (item) => ({
        url: `${FINANCE_URL}/otherItem`,
        method: "POST",
        body: item,
      }),
      validatesTags: ["finance", "Income", "Expense"],
    }),
  }),
});

export const {
  useGetBudgetQuery,
  useGetIncomeQuery,
  useGetExpenseQuery,
  useInsertOtherItemMutation,
} = financeApi;
