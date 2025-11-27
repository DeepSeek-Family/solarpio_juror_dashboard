import { api } from "../api/baseApi";

const connectingAccountSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    createAccountLink: builder.mutation({
      query: () => {
        return {
          method: "POST",
          url: "/connecting-account/create",
        };
      },
      transformResponse: (data) => {
        return data;
      },
      transformErrorResponse: ({ data }) => {
        const { message } = data;
        return message;
      },
    }),
  }),
});

export const { useCreateAccountLinkMutation } = connectingAccountSlice;
