import { apiSlice } from "./apiSlice";

const TERM_URL = "/api/term";

export const termApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetCurTerm: builder.query({
      query: () => ({
        url: `${TERM_URL}/`,
        method: "GET",
      }),
    }),
    GetCurWeek: builder.query({
      query: () => ({
        url: `${TERM_URL}/week`,
        method: "GET",
      }),
    }),
    GetRemainingWeeks: builder.query({
      query: () => ({
        url: `${TERM_URL}/remaining`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetCurTermQuery,
  useGetCurWeekQuery,
  useGetRemainingWeeksQuery,
} = termApi;
