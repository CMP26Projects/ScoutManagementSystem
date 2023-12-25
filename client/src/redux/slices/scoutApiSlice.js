import { apiSlice } from "./apiSlice";

const SCOUT_URL = "/api/scout";

export const scoutsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetAllScoutsCount: builder.query({
      query: () => ({
        url: `${SCOUT_URL}/allScouts/count`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllScoutsCountQuery } = scoutsApi;
