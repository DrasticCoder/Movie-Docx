import React,{useState , useEffect} from 'react';
import axios from 'axios';

import Content from '../../components/SingleContent/Content';

const Search = () => {

  const [searchText, setSearchText] = useState('');
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a87622cd39e327898dda6b34753ad69d&language=en-US&query=${searchText!='' ? searchText : 'spiderman' }&page=1&include_adult=false`)
    setContent(data.results);
  }

  useEffect(() => {
    fetchTrending();
  }, [])




  return (
    <>
      <div className='text-white font-bold pl-8 pt-3 text-2xl'>Search</div>
    
    <div className='bg-purple-200 mx-5 p-5 '>
      <input type="text" placeholder='Search here...' value={searchText} onChange={(e) => { setSearchText(e.target.value); fetchTrending() }} className='appearance-none bg-green-300 border-none w-4/5 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' />

    </div>

      

    {/* <button onClick={fetchTrending}>Search</button> */}

    <div className='flex flex-wrap justify-around mb-20'>
      {content.length!=0 ? content.map((c) => (
        <Content key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type={c.media_type} vote_average={c.vote_average} />
      )) : <h1>No result Found</h1>}
      
    </div>

    </>
  )
}

export default Search