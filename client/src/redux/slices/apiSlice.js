import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === "production"
    ? "https://scouts-managment-system-development.onrender.com"
    : "";

const baseQuery = fetchBaseQuery({ baseUrl });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Scouts"],
  endpoints: () => ({}),
});
