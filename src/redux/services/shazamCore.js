import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://genius-song-lyrics1.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_RAPID_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => `chart/referents/?time_period=month&per_page=12&page=1`,
    }),
    getTopArtists: builder.query({
      query: () => `chart/artists/?time_period=week&per_page=12&page=1`,
    }),
    getTopAlbums: builder.query({
      query: () => `chart/albums/?time_period=week&per_page=12&page=1`,
    }),
    getTopSongs: builder.query({
      query: (genre) =>
        `chart/songs/?time_period=week&chart_genre=${
          genre || 'all'
        }&per_page=12`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `song/details/?id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `song/recommendations/?id=${songid}`,
    }),
    getSongsByName: builder.query({
      query: (name) => `search/?q=${name}&per_page=12&page=1`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `artist/details/?id=${artistId}`,
    }),
    getArtistPopularSongs: builder.query({
      query: (artistId) =>
        `artist/songs/?id=${artistId}&sort=popularity&per_page=20&page=1`,
    }),
    getArtistAlbum: builder.query({
      query: (artistId) => `artist/albums/?id=${artistId}&per_page=20&page=1`,
    }),
    getAlbumDetail: builder.query({
      query: (albumId) => `album/details/?id=${albumId}`,
    }),
    getUserDetails: builder.query({
      query: (userId) => `user/details/?id=${userId}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetTopAlbumsQuery,
  useGetTopArtistsQuery,
  useGetTopSongsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetSongsByNameQuery,
  useGetArtistDetailsQuery,
  useGetArtistPopularSongsQuery,
  useGetArtistAlbumQuery,
  useGetAlbumDetailQuery,
  useGetUserDetailsQuery,
} = shazamCoreApi;
