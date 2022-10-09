import React,{ useState, useEffect } from 'react';
import axios from 'axios';

import Content from '../../components/SingleContent/Content';
import Pagination from '../../components/Pagination/Pagination';

const Trending = () => {

  const [content, setContent] = useState([]);

    const fetchTrending = async () => {
      const { data } = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=a87622cd39e327898dda6b34753ad69d')
      setContent(data.results);
    }

    useEffect(() => {
      fetchTrending();
    }, [])
    

  return (
    <>
    <div className='text-white font-bold pl-8 pt-3 text-2xl'>Trending</div>
    <div className='flex flex-wrap justify-around mb-20'>
      {content && content.map((c) => (
        <Content key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type={c.media_type} vote_average={c.vote_average} />
        ))}
    <Pagination  />
    </div>

    </>
  )
}

export default Trending