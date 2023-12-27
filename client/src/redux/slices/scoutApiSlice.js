import { apiSlice } from "./apiSlice";

const SCOUT_URL = "/api/scout";

export const scoutsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetAllScoutsCount: builder.query({
      query: () => ({
        url: `${SCOUT_URL}/`,
        method: "GET",
      }),
    }),
    InsertScout: builder.mutation({
      query: () => ({
        url: `${SCOUT_URL}/`,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetAllScoutsCountQuery, useInsertScoutMutation } = scoutsApi;
