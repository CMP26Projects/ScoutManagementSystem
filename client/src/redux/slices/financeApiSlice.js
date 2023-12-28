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
  }),
});

export const { useGetBudgetQuery, useInsertSubscriptionMutation } = financeApi;
