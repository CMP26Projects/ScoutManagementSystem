import { apiSlice } from "./apiSlice";

const ACTIVITIES_URL = "/api/activities";

export const activitiesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetAllActivities: builder.query({
      query: () => ({
        url: `${ACTIVITIES_URL}/all`,
        method: "GET",
      }),
      providesTags: ["activites"],
    }),
    InsertActivity: builder.mutation({
      query: (activity) => ({
        url: `${ACTIVITIES_URL}`,
        method: "POST",
        body: activity,
      }),
      invalidatesTags: ["activites"],
    }),
  }),
});

export const { useGetAllActivitiesQuery, useInsertActivityMutation } =
  activitiesApi;
