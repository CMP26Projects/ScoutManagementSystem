import { apiSlice } from "./apiSlice";

const CAPTAINS_URL = "/api/captain";

export const captainsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetCaptains: builder.query({
      query: () => ({
        url: `${CAPTAINS_URL}/`,
        method: "GET",
      }),
    }),
    GetUnitCaptains: builder.query({
      query: () => ({
        url: `${CAPTAINS_URL}/`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCaptainsQuery, useGetUnitCaptainsQuery } = captainsApi;
