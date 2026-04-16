import React from 'react';
import { useLoaderData } from 'react-router';
import AppsLists from '../AppsLists/AppsLists';

const AllApps = () => {
    const appData = useLoaderData();
    return (
        <div>
            <div className='text-center md:pt-20'>
                <h1 className='text-4xl font-extrabold'>Our All Applications</h1>
                <p className='md:mt-5 text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex items-center justify-between md:px-20'>
                <div className='text-2xl font-bold'>
                    <h1>({appData.length})Apps Found</h1>
                </div>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 justify-self-center items-center gap-5 ms:gap-x-10  md:pb-10 md:pt-10 pt-5 pb-5">
                {
                    appData.map(app => <AppsLists key={app.id} app={app}></AppsLists>)
                }
            </div>
        </div>
    );
};

export default AllApps;