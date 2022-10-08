import React from 'react';
import Unavailable from '../../assets/image.png';

const img_300 = "https://image.tmdb.org/t/p/w300";

const Content = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average
}) => {
  return (
    <div className='bg-gradient-to-r from-[#141e30] to-[#764AF1]  text-white hover:bg-white rounded-lg  m-4 p-3'>
        <img className='rounded-lg' src={poster ? img_300+poster : Unavailable} alt={title} />
      
        <h1 className='font-bold m-1 text-center'>{title}</h1>
    
      <div className='grid grid-flow-col grid-rows-1 px-6'>
        <span className='' >{media_type==="tv" ? "TV series" : "Movie"}</span>
        <span className='text-end' >{date}</span>
      </div>
    
      {/* <span>{vote_average}</span> */}
    </div>
  )
}

export default Content