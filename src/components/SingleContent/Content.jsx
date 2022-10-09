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
    <div className='relative bg-gradient-to-r from-[#141e30] to-[#764AF1]  text-white hover:bg-white rounded-lg  m-4 p-1 rounded-b-[20px]'>

      
        <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          {vote_average.toString().length === 1 ? vote_average + '.0' : vote_average.toString().slice(0, 3)}
          </span>

        <img className='rounded-lg' src={poster ? img_300+poster : Unavailable} alt={title} />
      
        <h1 className='font-bold m-1 mt-2 text-center'>{title}</h1>
    
      <div className='grid grid-flow-col grid-rows-1 px-6 text-gray-300'>
        <span className='' >{media_type==="tv" ? "TV series" : "Movie"}</span>
        <span className='text-end' >{date}</span>
      </div>
    
    </div>
  )
}

export default Content