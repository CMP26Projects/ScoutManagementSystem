import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const online = true;
const baseUrl = online
  ? "https://scouts-managment-system-api-dev.onrender.com"
  : "";

const baseQuery = fetchBaseQuery({ baseUrl });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Scouts"],
  endpoints: () => ({}),
});
