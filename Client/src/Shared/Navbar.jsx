import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, GitHub, YouTube, Twitter, Search, Close, Menu } from "@mui/icons-material";
import Drawer from '@mui/material/Drawer';


export default function Navbar() {

    const [isVisible, setIsVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [open, setOpen] = useState(false);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("we are here");
        setSearchValue('');
    };



    const searchComponent = () => {
        return (
            <form className="flex items-center border border-gray-300 rounded bg-white" onSubmit={handleSearchSubmit} >
                <button type='submit' className='bg-white pr-1 ps-2 border-r'><Search style={{ color: "gray", fontSize: "1.2rem" }} /></button>
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search"
                    className="outline-none text-sm p-1 text-gray-500"
                />
                <button className='bg-white px-1 border-s' type='button' onClick={() => setIsVisible(false)} ><Close className='text-dark' style={{ color: "gray", fontSize: "1.2rem" }} /></button>
            </form>
        )
    }
    return (
        <nav className='fixed top-0 left-0 w-full flex justify-between p-4 bg-[#11182763] text-white z-10'>
            <div>
                <a href="/" className='text-2xl font-bold text-white' >Soul Speak</a>
            </div>
            <div className='flex-wrap hidden md:flex'>
                <div className=' flex items-center space-x-6 border-r-2 px-2 border-gray-300'>
                    <Link className='hover:text-[#213555]' to={"/home"}>Home</Link>
                    <Link className='hover:text-[#213555]' to={"/about"}>About</Link>
                    <Link className='hover:text-[#213555]' to={"/stories"}>Stories</Link>
                    <Link className='hover:text-[#213555]' to={"/contact-us"}>Contact Us</Link>
                </div>
                <div className='flex items-center px-2 space-x-4 border-r-2 border-gray-300'>
                    <a href="#facebook"><Facebook className='hover:text-[#213555]' style={{ fontSize: "1.2rem" }} /></a>
                    <a href="#twitter"><Twitter className='hover:text-[#213555]' style={{ fontSize: "1.2rem" }} /></a>
                    <a href="#youtube"><YouTube className='hover:text-[#213555]' style={{ fontSize: "1.2rem" }} /></a>
                    <a href="#github"><GitHub className='hover:text-[#213555]' style={{ fontSize: "1.2rem" }} /></a>
                </div>
                <div className="flex items-center ps-2 space-x-2">
                    {!isVisible && (
                        <Search
                            className="cursor-pointer"
                            style={{ fontSize: "1.2rem" }}
                            onClick={() => setIsVisible(true)}
                        />

                    )}
                    {
                        isVisible && searchComponent()
                    }
                </div>

            </div>

            <div className='md:hidden flex items-center'>
                <button onClick={() => setOpen(true)} ><Menu /></button>
                <Drawer anchor='top' open={open} onClose={() => setOpen(false)}>
                    <div className='p-4 text-white bg-[#111827] text-center space-y-4'>
                        <p>
                            <Link onClick={()=>setOpen(false)} className='hover:text-orange-500' to={"/home"}>Home</Link>
                        </p>
                        <p>
                            <Link onClick={()=>setOpen(false)} className='hover:text-orange-500' to={"/about"}>About</Link>
                        </p>
                        <p>
                            <Link onClick={()=>setOpen(false)} className='hover:text-orange-500' to={"/stories"}>Stories</Link>
                        </p>
                        <p>
                            <Link onClick={()=>setOpen(false)} className='hover:text-orange-500' to={"/contact-us"}>Contact Us</Link>
                        </p>

                        <div className='flex justify-around'>
                            <a onClick={()=>setOpen(false)} href="#facebook"><Facebook className='hover:text-orange-500' style={{ fontSize: "1.2rem" }} /></a>
                            <a onClick={()=>setOpen(false)} href="#twitter"><Twitter className='hover:text-orange-500' style={{ fontSize: "1.2rem" }} /></a>
                            <a onClick={()=>setOpen(false)} href="#youtube"><YouTube className='hover:text-orange-500' style={{ fontSize: "1.2rem" }} /></a>
                            <a onClick={()=>setOpen(false)} href="#github"><GitHub className='hover:text-orange-500' style={{ fontSize: "1.2rem" }} /></a>
                        </div>

                        <button className='absolute z-10 top-0 right-4' onClick={()=>setOpen(false)}><Close/></button>
                    </div>
                </Drawer>
            </div>
        </nav>
    )
}