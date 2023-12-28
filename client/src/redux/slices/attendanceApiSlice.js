import { apiSlice } from "./apiSlice";

const ATTENDANCE_URL = "/api/attendance";

export const attendanceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetSectorAttendance: builder.query({
      query: (sector) => ({
        url: `${ATTENDANCE_URL}/sector/all`,
        method: "GET",
        params: sector,
      }),
      providesTags: ["Attendance"],
    }),
    UpsertSectorAttendance: builder.mutation({
      query: (attendance) => ({
        url: `${ATTENDANCE_URL}/`,
        method: "POST",
        body: attendance,
      }),
      invalidatesTags: ["Attendance"],
    }),
  }),
});

export const {
  useGetSectorAttendanceQuery,
  useUpsertSectorAttendanceMutation,
} = attendanceApi;
