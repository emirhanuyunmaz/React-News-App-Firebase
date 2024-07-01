import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const newsApi = createApi({
    reducerPath:"newsApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://newsapi.org/v2/"}),
    endpoints:(builder) => ({
        getTopNews : builder.query({
            query:() => `top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        }),

        getCategoryNews : builder.query({
            query : (categoryName) => `https://newsapi.org/v2/top-headlines/sources?category=${categoryName}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        }),
    })
})

export const { useGetTopNewsQuery , useGetCategoryNewsQuery } = newsApi