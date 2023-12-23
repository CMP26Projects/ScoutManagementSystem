import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5000/api";

const baseQuery = fetchBaseQuery({ baseUrl });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Scouts"],
  endpoints: () => ({}),
});
