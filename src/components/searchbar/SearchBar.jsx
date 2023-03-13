import React from "react";
import {HiOutlineSearch} from 'react-icons/hi'

export default function SearchBar() {
    return (
        <div className="w-full">
            <div className="flex">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-black rounded-l-lg text-xs  bg-white   focus:outline-none "
                    placeholder="Search Product Here..."
                />
                <button className="px-3 rounded-r-lg  text-white bg-[#FFBA71] ">
                    <HiOutlineSearch  className="h-4 w-4 text-black" aria-hidden="true"  />
                </button>
            </div>
        </div>
    );
}