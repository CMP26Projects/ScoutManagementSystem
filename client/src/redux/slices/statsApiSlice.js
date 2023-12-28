import { apiSlice } from "./apiSlice";

const STATS_URL = "/api/stats";

export const statsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetAbsenceRate: builder.query({
      query: () => ({
        url: `${STATS_URL}/scouts`,
        method: "GET",
      }),
      providesTags: ["Stats", "absence"],
    }),
  }),
});

export const { useGetAbsenceRateQuery } = statsApi;
