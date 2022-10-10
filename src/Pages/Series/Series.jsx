import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Content from '../../components/SingleContent/Content';
import Pagination from '../../components/Pagination/Pagination';

const Series = () => {

  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get('https://api.themoviedb.org/3/discover/tv?api_key=a87622cd39e327898dda6b34753ad69d&sort_by=popularity.desc&page=1&include_null_first_air_dates=false')
    setContent(data.results);
  }

  useEffect(() => {
    fetchTrending();
  }, [])


  return (
    <>
      <div className='text-white font-bold pl-8 pt-3 text-2xl'>TV Series</div>
      <div className='flex flex-wrap justify-around mb-20'>
        {content && content.map((c) => (
          <Content key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type="tv" vote_average={c.vote_average} />
        ))}
        <Pagination />
      </div>

    </>
  )
}

export default Series