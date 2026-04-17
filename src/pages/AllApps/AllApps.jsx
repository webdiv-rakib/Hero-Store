import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppsLists from '../AppsLists/AppsLists';

const AllApps = () => {
    const appData = useLoaderData();
    const [searchTerm, setSearchTerm] = useState("");

    // 3. Filter the apps based on the search term (case-insensitive)
    const filteredApps = appData.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <div className='text-center md:pt-20'>
                <h1 className='text-4xl font-extrabold'>Our All Applications</h1>
                <p className='md:mt-5 text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex items-center justify-between md:px-20'>
                <div className='text-2xl font-bold'>
                    {/* Update the count to reflect filtered results */}
                    <h1>({filteredApps.length}) Apps Found</h1>
                </div>
                <div>
                    <label className="input outline-none border-gray-300">
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
                        <input
                            type="search"
                            placeholder="Search by title..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </label>
                </div>
            </div>
            {/* 5. Conditional Rendering: Show grid OR "Not Found" message */}
            {filteredApps.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-5 md:pb-10 md:pt-10 pt-5 pb-5 px-5 md:px-20">
                    {
                        filteredApps.map(app => <AppsLists key={app.id} app={app}></AppsLists>)
                    }
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center mt-20 space-y-4 md:pb-10">
                    <h2 className="text-3xl font-bold text-gray-400">No App Found</h2>
                    <p className="text-gray-500">Try searching for a different keyword.</p>
                </div>
                // tooo lazy to anything today.
                // will start tomorrow.
            )}
        </div>
    );
};

export default AllApps;