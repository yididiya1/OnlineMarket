import React from "react";
import Dropdown from "./dropdown/Dropdown";
import SearchBar from "./searchbar/SearchBar";
import Compare from '../assets/images/compare.svg'
import InfoIcons from "./shared/InfoIcons";
import Wishlist from '../assets/images/wishlist.svg';
import User from '../assets/images/user.svg';
import Cart from '../assets/images/cart.svg';
import { NavLink } from "react-router-dom";
import GridMenu from '../assets/images/menu.svg';
import DropdownImage from './dropdown/DropdownImage';

const Header = () => {
    return (
        <>
            <header className="bg-[#131921] px-24  border-b-2 border-gray-700 ">
                {/* top part of the header includes information like language, currency options, phone number, and 
                    info about free shipping and free returns
                */}
                <div className="flex justify-between items-center">
                    {/* left part */}
                    <div className="">
                        <p className="text-white   text-xs">
                            Free Shipping Over $100 & Free Returns
                        </p>
                    </div>
                    {/* right part */}
                    <div className="flex items-center">
                        <div className="">
                            <p className="text-white text-xs">
                                Hotline: <a href="tel:+91 23423423425">+91 23423423425</a>{" "}
                            </p>
                        </div>
                        <div className='mx-6'>
                            <Dropdown title={"English"}/>
                        </div>
                        
                        <Dropdown title={"USD $"}/>
                    </div>
                </div>
            </header>
            <header className="px-24 bg-[#131921] py-4">
                <div className="flex ">
                    <div className="w-1/6">
                        <p className="text-3xl text-white">Digitic.</p> 
                    </div>
                    <div className="w-2/6 ">
                        <SearchBar />
                    </div>
                    <div className="flex flex-1  justify-end items-end">
                        <InfoIcons icon={Compare} option1={"Compare"} option2={"Products"}/>
                        <InfoIcons icon={Wishlist} option1={"Favourite"} option2={"Wishlist"}/>
                        <InfoIcons icon={User} option1={"Log In"} option2={"My Account"}/>
                        <InfoIcons icon={Cart} option1={"0"} option2={"$0.00"}/>
                    </div>
                    
                </div>
            </header>
            <header className='bg-[#3b4149] flex px-24 py-1 items-center'>
                <div className='w-1/5'>
                    <div className='w-full'>
                        <DropdownImage title={"SHOP CATEGORIES"} icon={GridMenu}/>
                    </div>
                </div>
                <div >
                    <div>
                        <NavLink to={'/about'} className='text-white text-sm mx-4 font-[300]' >HOME</NavLink>
                        <NavLink to={'/about'} className='text-white text-sm mx-4 font-[300]'>OUT STORE</NavLink>
                        <NavLink to={'/about'} className='text-white text-sm mx-4 font-[300]'>BLOGS</NavLink>
                        <NavLink to={'/about'} className='text-white text-sm mx-4 font-[300]'>CONTACT</NavLink>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
