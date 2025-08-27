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
      query: (lang) => `clients?locale=${lang}&populate=image`,
    }),

    // Client Pages (all)
    getClientPages: builder.query({
      query: (lang) => `client-page?locale=${lang}`,
    }),

    // TODO: Blog Posts
    getBlogPosts: builder.query({
      query: ({ page = 1, pageSize = PAGE_SIZE, lang }) =>
        `blog-posts?locale=${lang}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    }),
    getBlogPostById: builder.query({
      query: ({ id, lang }) => `blog-posts/${id}&locale=${lang}`,
    }),

    // Services / Our Services (all + by id)
    getServices: builder.query({
      query: (lang) => `services?locale=${lang}&fields=title,slug`,
    }),
    getServiceById: builder.query({
      query: ({ id, lang }) =>
        `services/${id}?locale=${lang}&populate[article][populate]=*`,
    }),

    // Hero Items (all)
    getHeroItems: builder.query({
      query: (lang) => `hero-items?locale=${lang}&populate=image`,
    }),

    // Our Teams (all)
    getOurTeams: builder.query({
      query: (lang) => `our-team?locale=${lang}&populate=image`,
    }),

    // Social Media Links (all)
    getSocialMediaLinks: builder.query({
      query: (lang) => `socail-media-links?locale=${lang}`,
    }),

    //For Admin Subscribers (all)
    getSubscribers: builder.query({
      query: (lang) => `subscribers?locale=${lang}`,
    }),

    // POST a new subscriber
    addSubscriber: builder.mutation({
      query: (subscriber) => ({
        url: "subscribers",
        method: "POST",
        body: { data: subscriber }, // Strapi expects { data: { ...fields } }
      }),
    }),
    // Team Members (all)
    getTeamMembers: builder.query({
      query: (lang) => `team-members?locale=${lang}&populate=image`,
    }),
  }),
});

// Export hooks
export const {
  useAddSubscriberMutation,
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
