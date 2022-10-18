import { Link } from 'react-router-dom';

import { FaHotjar, FaSearch } from 'react-icons/fa';
import { MdMovieCreation } from 'react-icons/md';
import { RiSlideshow3Fill } from 'react-icons/ri';

const Nav = () => {

  return (
    <>
        <section id="bottom-navigation" className="block z-10 fixed inset-x-0 bottom-0 z-10 shadow bg-gradient-to-r from-[#141e30] to-[#764AF1]  text-white">
            <div id="tabs" className="flex justify-between">
              <Link to="/" className="flex flex-col items-center justify-center w-1/4 py-2 text-sm font-medium text-center text-white">
              <FaHotjar size={25} className='inline-block mb-1' />
                <span className="tab tab-home block text-xs">Trending</span>
              </Link>
              <Link to="/movies" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <MdMovieCreation size={25} className="inline-block mb-1"/>
                <span className="tab tab-kategori block text-xs">Movies</span>
              </Link>
           
              <Link to="/series" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <RiSlideshow3Fill size={25} className="inline-block mb-1"/>
                <span className="tab tab-whishlist block text-xs">TV shows</span>
              </Link>
              <Link to='/search' className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <FaSearch size={25} className="inline-block mb-1"/>
                <span className="tab tab-account block text-xs">Search</span>
              </Link>
            </div>
          </section>
    </>
  )
}

export default Nav