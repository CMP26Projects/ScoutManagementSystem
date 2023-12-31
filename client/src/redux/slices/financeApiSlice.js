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
    InsertSubscription: builder.mutation({
      query: (subscription) => ({
        url: `${FINANCE_URL}/subscription`,
        method: "POST",
        body: subscription,
      }),
      invalidatesTags: ["finance"],
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
  useInsertSubscriptionMutation,
  useGetIncomeQuery,
  useGetExpenseQuery,
  useInsertOtherItemMutation,
  useGetCurrentWeekSubscriptionsQuery,
} = financeApi;
