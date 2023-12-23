import { apiSlice } from "./apiSlice";

const USERS_API = "/api/users";

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
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApi;
