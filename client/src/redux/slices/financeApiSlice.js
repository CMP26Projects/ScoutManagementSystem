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
      providesTags: ["finance"],
    }),

    GetExpense: builder.query({
      query: () => ({
        url: `${FINANCE_URL}/expense`,
        method: "GET",
      }),
      providesTags: ["finance"],
    }),
    InsertOtherItem: builder.mutation({
      query: (item) => ({
        url: `${FINANCE_URL}/otherItem`,
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["finance"],
    }),
    GetCurrentWeekSubscriptions: builder.query({
      query: () => ({
        url: `${FINANCE_URL}/subscription/all`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetBudgetQuery,
  useGetIncomeQuery,
  useGetExpenseQuery,
  useInsertOtherItemMutation,
  useGetCurrentWeekSubscriptionsQuery,
} = financeApi;
