import { apiSlice } from "./apiSlice";

const SECTOR_URL = "/api/sector";

export const captainsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
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
        url: `${SECTOR_URL}/:baseName/:suffixName`,
        method: "PATCH",
        body: sector,
        params: {
          baseName: sector.baseName,
          suffixName: sector.suffixName,
        },
      }),
      invalidatesTags: ["Sector", "Captains"],
    }),
  }),
});

export const { useInsertSectorMutation, useUpdateSectorUnitCaptainMutation } =
  captainsApi;
