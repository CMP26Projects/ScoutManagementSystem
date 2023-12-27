import { apiSlice } from "./apiSlice";

const CAPTAINS_URL = "/api/captain";

export const captainsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetCaptains: builder.query({
      query: () => ({
        url: `${CAPTAINS_URL}/`,
        method: "GET",
      }),
      providesTags: ["Captains"],
    }),
    GetUnitCaptains: builder.query({
      query: () => ({
        url: `${CAPTAINS_URL}/`,
        method: "GET",
      }),
      providesTags: ["Captains"],
    }),
  }),
});

export const { useGetCaptainsQuery, useGetUnitCaptainsQuery } = captainsApi;
