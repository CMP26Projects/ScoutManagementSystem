import { apiSlice } from "./apiSlice";

const USERS_API = "/api/auth";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: `${USERS_API}/login`,
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_API}/logout`,
        method: "GET",
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: `${USERS_API}/signUp`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useSignupMutation } =
  usersApi;
