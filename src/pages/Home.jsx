import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetTopSongsQuery } from '../redux/services/shazamCore';
import { genres } from '../assets/constants';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Intro Section */}
      <div className="intro-section h-60 flex justify-center items-center text-white bg-hero bg-cover">
        <div className="text text-center">
          <h1 className="font-bold text-3xl md:text-5xl m-5">myTunes</h1>
          <h3 className="mt-5 text-xl md:text-2xl font-light">
            Your music, movies, and TV shows take center stage.
          </h3>
          <p className="mt-5 text-sm md:text-base">
            myTunes is the best way to organize and enjoy the music, movies, and
            TV shows you already have — and <br /> shop for the ones you want.
            Enjoy all the entertainment myTunes has to offer on your Mac and PC.
          </p>
        </div>
      </div>

      {/* Music Section */}
      <div className="ad bg-gray-900 text-white text-center py-12">
        <h2 className="font-bold text-2xl">Music</h2>
        <h5 className="font-light text-lg mt-5">45 million songs. Zero ads.</h5>
        <p className="font-normal text-sm mt-5 mb-8">
          Stream over 45 million songs, ad-free. Or download albums and tracks
          to listen to offline. All the music in your personal
          <br /> myTunes library — no matter where it came from — lives right
          alongside the Orange Music catalog. Start your free three-month trial
          with no commitment, and cancel anytime.
        </p>
        <a
          href="#"
          className="inline-block bg-purple-600 text-white text-sm py-2 px-5 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-purple-600"
        >
          Start Your Trial Now
        </a>
        <h6 className="mt-10 font-thin text-sm">
          Orange Music is available in myTunes, and for iOS and Android devices.
        </h6>

        <img
          className="w-full h-auto bg-cover my-10 object-cover bg-video"
          alt="iPad showing myTunes"
        />
      </div>

      {/* Movies Section */}
      <div className="card1 bg-white text-black p-10 rounded-lg shadow-lg mx-auto my-10 w-11/12 md:w-8/12">
        <h4 className="text-md font-semibold mb-5">
          The movie and TV collection you always wished for. Granted.
        </h4>
        <p className="font-light mb-8">
          With over 100,000 movies and TV shows to choose from, there’s always
          something great to watch on myTunes. If you watch on Orange TV 4K,
          you’ll be able to enjoy your favorite content in 4K HDR.
          <br /> So get ready to enjoy episodes of your favorite TV shows or hit
          movies anytime, anywhere. Just tap to play, or download if you’re
          going somewhere without Wi-Fi.
        </p>
        <a
          href="#"
          className="inline-block bg-purple-600 text-white text-sm py-2 px-5 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-purple-600"
        >
          Read More
        </a>
        <img className="w-full h-96 mt-10 object-cover bg-mac bg-cover bg-center bg-no-repeat" />
      </div>

      {/* Entertainment Section */}
      <div className="mt-5 bg-ipad bg-cover bg-center bg-no-repeat h-full text-white flex flex-col justify-center items-center p-10">
        <h3 className="font-semibold text-lg mb-5">
          A world of entertainment. Available wherever you are.
        </h3>
        <p className="font-light text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
          veniam nobis, nisi ut expedita, doloribus reprehenderit explicabo non
          velit repellat alias saepe inventore repellendus?
          <br /> Molestias suscipit eos tempora. Quae quaerat cumque in
          veritatis impedit dolorum sapiente recusandae minima quo aperiam quam,
          excepturi quasi totam ad quas?
        </p>
      </div>

      {/* Gift Cards Section */}
      <div className="card4 grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
        <div className="sec-1">
          <img className="w-full h-full object-contain bg-gcard bg-no-repeat bg-center bg-contain" />
        </div>
        <div className="sec-2 text-left p-5 md:p-10">
          <h3 className="font-semibold text-lg mb-4">Gift Cards</h3>
          <p className="font-light mb-5 text-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            expedita tempore quasi omnis a aut et totam illo fuga accusamus
            dolorum vero, ut harum consectetur. Minima molestias officiis culpa
            non sed dicta itaque. Et aliquam illo obcaecati molestias veritatis
            porro.
          </p>
          <h4 className="font-semibold text-md mb-4">
            Already have an Orange myTunes Music Gift Card?
          </h4>
          <hr className="border-black mb-5" />
          <a
            href="#"
            className="inline-block bg-purple-600 text-white text-sm py-2 px-5 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-purple-600"
          >
            Redeem
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
