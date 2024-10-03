import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetTopSongsQuery } from '../redux/services/shazamCore';

const CountryTracks = () => {
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopSongsQuery('all');

  if (isFetching && loading)
    return <Loader title="Loading Songs around you..." />;

  // if (error !== '') return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around you <span className="font-black"></span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.chart_items?.map((song, i) => (
          <SongCard
            key={song.item.id}
            item={song.item}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryTracks;
