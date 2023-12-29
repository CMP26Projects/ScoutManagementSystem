import { apiSlice } from './apiSlice'

const ALERT_URL = '/api/alert'

export const alertApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        GetAllAlerts: builder.query({
            query: (item) => ({
                url: `${ALERT_URL}/all`,
                method: 'GET',
                params: item,
            }),
            providesTags: ['alert'],
        }),
        GetAlert: builder.query({
            query: (id) => ({
                url: `${ALERT_URL}/${id}`,
                method: 'GET',
            }),
            providesTags: ['alert'],
        }),
        SendAlert: builder.mutation({
            query: (id, sectorBaseName, sectorSuffixName) => ({
                url: `${ALERT_URL}/${id}`,
                method: 'POST',
                body: {
                    sectorBaseName: sectorBaseName,
                    sectorSuffixName: sectorSuffixName,
                },
            }),
            invalidatesTags: ['alert'],
        }),
        CreateAlert: builder.mutation({
            query: (alert) => ({
                url: `${ALERT_URL}`,
                method: 'POST',
                body: alert,
            }),
            invalidatesTags: ['alert'],
        }),
        UpdateStatus: builder.mutation({
            query: (id) => ({
                url: `${ALERT_URL}/${id}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['alert'],
        }),
        DeleteAlert: builder.mutation({
            query: (id) => ({
                url: `${ALERT_URL}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['alert'],
        }),
    }),
})

export const {
    useGetAllAlertsQuery,
    useGetAlertQuery,
    useSendAlertMutation,
    useCreateAlertMutation,
    useUpdateStatusMutation,
    useDeleteAlertMutation,
} = alertApi
