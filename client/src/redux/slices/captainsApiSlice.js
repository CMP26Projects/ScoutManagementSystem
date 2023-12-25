import { apiSlice } from "./apiSlice";

const CAPTAINS_URL = "/api/captain";

export const captainsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetCaptains: builder.query({
      query: () => ({
        url: `${CAPTAINS_URL}/allCaptains/info`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCaptainsQuery } = captainsApi;
