import { apiSlice } from "./apiSlice";

const TERM_URL = "/api/term";

export const termApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetCurTerm: builder.query({
      query: () => ({
        url: `${TERM_URL}/`,
        method: "GET",
      }),
      providesTags: ["Term"],
    }),
    GetCurWeek: builder.query({
      query: () => ({
        url: `${TERM_URL}/week`,
        method: "GET",
      }),
      providesTags: ["Weeks"],
    }),
    GetRemainingWeeks: builder.query({
      query: () => ({
        url: `${TERM_URL}/remaining`,
        method: "GET",
      }),
      providesTags: ["Weeks"],
    }),
    InsertTerm: builder.mutation({
      query: (term) => ({
        url: `${TERM_URL}/`,
        method: "POST",
        body: term,
      }),
      invalidatesTags: ["Term", "Weeks"],
    }),
    UpdateTerm: builder.mutation({
      query: (term) => ({
        url: `${TERM_URL}/`,
        method: "PATCH",
        body: term,
      }),
      invalidatesTags: ["Term", "Weeks"],
    }),
  }),
});

export const {
  useGetCurTermQuery,
  useGetCurWeekQuery,
  useGetRemainingWeeksQuery,
  useInsertTermMutation,
  useUpdateTermMutation,
} = termApi;
