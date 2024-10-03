import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import { ImFileMusic } from 'react-icons/im';
import { MdLibraryMusic } from 'react-icons/md';
import { IoEarthSharp } from 'react-icons/io5';
import { musicLogo } from '../assets';

const links = [
  { name: 'Home', to: '/', icon: HiOutlineHome },
  { name: 'Discover', to: '/discover', icon: IoEarthSharp },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
  { name: 'NFT musics', to: '/nft-musics', icon: MdLibraryMusic },
  { name: 'Mint music', to: '/mint-musics', icon: ImFileMusic },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-8 ml-8">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="cursor-pointer flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img
          src={musicLogo}
          alt="logo"
          className="w-full h-100 object-contain rounded-full animate-spin"
        />
        <NavLinks />
      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu
            className="cursor-pointer w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className="cursor-pointer w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <img
          src={musicLogo}
          alt="logo"
          className="w-full h-14 object-contain rounded-full"
        />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
