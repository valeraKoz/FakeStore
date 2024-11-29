import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const API_URL = "https://valerakoz.github.io/FakeStoreAPI/data.json";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    tagTypes: ['Product'],
    endpoints: builder => ({
        getProduct: builder.query({
            query: ()=>'',
            responseHandler: async (data)=>{
               const text = await data.text();
               return text.length ? JSON.parse(text) : null
            },
            transformResponse:(data, meta, arg)=> {
                return data[arg]
            }
        }),
        getProductByCategoryId: builder.query({
            query: () => '',
            responseHandler: async (data)=>{
                const text = await data.text();
                return text.length ? JSON.parse(text) : null
            },
            transformResponse(data, meta, arg) {
                const res = data[arg.category];
                const index = res.findIndex((item)=> item.id === arg.id);
                if (index > -1) {
                    return res[index]
                }
            }
        })

    })
})

export const { useGetProductQuery , useGetProductByCategoryIdQuery} = api;
