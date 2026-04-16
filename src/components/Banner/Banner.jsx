import React from 'react';
import heroimg from "../../assets/hero.png"
const Banner = () => {
    return (
        <div className='text-center pt-20 space-y-5 bg-base-300 px-5'>
            <div>
                <h1 className='text-7xl font-extrabold'>We Build <br /><span className='bg-gradient-to-r from-[#6b35e5] to-purple-500 bg-clip-text text-transparent'>Productive</span> Apps</h1>
                <p className='text-xl text-gray-500'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex gap-5 justify-center items-center'>
                <button className='btn'><img className='w-10' src="https://img.icons8.com/?size=100&id=L1ws9zn2uD01&format=png&color=000000" alt="" />Google Play</button>
                <button className='btn'><img className='w-10' src="https://img.icons8.com/?size=100&id=4PbFeZOKAc61&format=png&color=000000" alt="" />App Store</button>
            </div>
            <div className='flex items-center justify-center'>
                <img src={heroimg} alt="" />
            </div>
        </div>
    );
};

export default Banner;