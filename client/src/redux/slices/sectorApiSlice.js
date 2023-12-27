import { apiSlice } from "./apiSlice";

const SECTOR_URL = "/api/sector";

export const captainsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetSectors: builder.query({
      query: () => ({
        url: `${SECTOR_URL}/`,
        method: "GET",
      }),
      providesTags: ["Sector"],
    }),
    InsertSector: builder.mutation({
      query: (sector) => ({
        url: `${SECTOR_URL}/`,
        method: "POST",
        body: sector,
      }),
      invalidatesTags: ["Sector", "Captains"],
    }),
    UpdateSectorUnitCaptain: builder.mutation({
      query: (sector) => ({
        url: `${SECTOR_URL}/${sector.baseName}/${sector.suffixName}`,
        method: "PATCH",
        body: sector,
      }),
      invalidatesTags: ["Sector"],
    }),
    UpdateSectorRegularCaptain: builder.mutation({
      query: (sector) => ({
        url: `${SECTOR_URL}/${sector.baseName}/${sector.suffixName}`,
        method: "PATCH",
        body: sector,
      }),
      invalidatesTags: ["Sector"],
    }),
  }),
});

export const {
  useGetSectorsQuery,
  useInsertSectorMutation,
  useUpdateSectorUnitCaptainMutation,
  useUpdateSectorRegularCaptainMutation,
} = captainsApi;
