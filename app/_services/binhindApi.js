import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PAGE_SIZE } from "../_utils/config";

export const binhindApi = createApi({
  reducerPath: "binhindApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api",
  }),
  endpoints: (builder) => ({
    // Clients (all)
    getClients: builder.query({
      query: () => `clients?populate=image`,
    }),

    // Client Pages (all)
    getClientPages: builder.query({
      query: () => `client-page`,
    }),

    // TODO: Blog Posts
    getBlogPosts: builder.query({
      query: ({ page = 1, pageSize = PAGE_SIZE }) =>
        `blog-posts?pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    }),
    getBlogPostById: builder.query({
      query: (id) => `blog-posts/${id}`,
    }),

    // Services / Our Services (all + by id)
    getServices: builder.query({
      query: () => `services?fields=title,slug`,
    }),
    getServiceById: builder.query({
      query: (id) => `services/${id}?populate[article][populate]=*`,
    }),

    // Hero Items (all)
    getHeroItems: builder.query({
      query: () => `hero-items?populate=image`,
    }),

    // Our Teams (all)
    getOurTeams: builder.query({
      query: () => `our-team?populate=image`,
    }),

    // Social Media Links (all)
    getSocialMediaLinks: builder.query({
      query: () => `socail-media-links`,
    }),

    // Subscribers (all)
    getSubscribers: builder.query({
      query: () => `subscribers`,
    }),

    // Team Members (all)
    getTeamMembers: builder.query({
      query: () => `team-members?populate=image`,
    }),
  }),
});

// Export hooks
export const {
  useGetClientsQuery,
  useGetClientPagesQuery,
  useGetBlogPostsQuery,
  useGetBlogPostByIdQuery,
  useGetServicesQuery,
  useGetServiceByIdQuery,
  useGetHeroItemsQuery,
  useGetOurTeamsQuery,
  useGetSocialMediaLinksQuery,
  useGetSubscribersQuery,
  useGetTeamMembersQuery,
} = binhindApi;
