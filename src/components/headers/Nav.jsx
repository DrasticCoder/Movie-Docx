// import React, { useEffect,useState } from 'react';
// import { useHistory } from 'react-router-dom';

import { FaHotjar, FaSearch } from 'react-icons/fa';
import { MdMovieCreation } from 'react-icons/md';
import { RiSlideshow3Fill } from 'react-icons/ri';

const Nav = () => {

  // const [value, setValue] = useState(0);
  // const history = useHistory();

  // useEffect(() => {
  //   if(value === 0) {
  //     history.push('/');
  //   } else if(value === 1) {
  //     history.push('/movies');
  //   } else if(value === 2) {
  //     history.push('/series');
  //   } else if(value === 3) {
  //     history.push('/search');
  //   }
  // }, [value, history]);

  return (
    <>
        <section id="bottom-navigation" className="block z-10 fixed inset-x-0 bottom-0 z-10 shadow bg-gradient-to-r from-[#141e30] to-[#764AF1]  text-white">
            <div id="tabs" className="flex justify-between">
              <a href="/" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <FaHotjar size={25} className='inline-block mb-1' />
                <span className="tab tab-home block text-xs">Trending</span>
              </a>
              <a href="/movies" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <MdMovieCreation size={25} className="inline-block mb-1"/>
                <span className="tab tab-kategori block text-xs">Movies</span>
              </a>
           
              <a href="/series" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <RiSlideshow3Fill size={25} className="inline-block mb-1"/>
                <span className="tab tab-whishlist block text-xs">TV shows</span>
              </a>
              <a href='/search' className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <FaSearch size={25} className="inline-block mb-1"/>
                <span className="tab tab-account block text-xs">Search</span>
              </a>
            </div>
          </section>
    </>
  )
}

export default Nav