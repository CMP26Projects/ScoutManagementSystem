import { apiSlice } from "./apiSlice";

const FINANCE_URL = "/api/finance";

export const financeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetBudget: builder.query({
      query: () => ({
        url: `${FINANCE_URL}/budget`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetBudgetQuery } = financeApi;
