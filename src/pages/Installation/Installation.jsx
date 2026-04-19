import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
// import toast from 'react-hot-toast'; // Uncomment if using react-hot-toast

const Installation = () => {
    const appData = useLoaderData();
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState("");

    // 1. Load installed apps from localStorage on component mount
    useEffect(() => {
        // Retrieve the array of installed IDs (e.g., [1, 5, 12])
        const storedIds = JSON.parse(localStorage.getItem('installedApps')) || [];

        // Filter the full app data to only show installed apps
        const myApps = appData.filter(app => storedIds.includes(app.id));
        setInstalledApps(myApps);
    }, [appData]);

    // 2. Handle Uninstall Functionality
    const handleUninstall = (id) => {
        // Remove from UI state
        const updatedApps = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedApps);

        // Remove from localStorage
        const storedIds = JSON.parse(localStorage.getItem('installedApps')) || [];
        const updatedIds = storedIds.filter(storedId => storedId !== id);
        localStorage.setItem('installedApps', JSON.stringify(updatedIds));

        // Trigger Toast (Replace alert with your Toast library)
        alert("App uninstalled successfully!");
        // toast.success("App uninstalled successfully!");
    };

    // 3. Handle Sorting Logic
    const handleSort = (e) => {
        const order = e.target.value;
        setSortOrder(order);

        // Create a copy of the array before sorting
        const sortedApps = [...installedApps];

        if (order === "high-low") {
            sortedApps.sort((a, b) => b.downloads - a.downloads);
        } else if (order === "low-high") {
            sortedApps.sort((a, b) => a.downloads - b.downloads);
        }

        setInstalledApps(sortedApps);
    };

    // Helper to format download numbers cleanly
    const formatDownloads = (num) => {
        return new Intl.NumberFormat('en-US', { notation: "compact", maximumFractionDigits: 1 }).format(num);
    };

    return (
        <div className="min-h-screen px-5 md:px-20 pb-20">
            <div className='text-center pt-10 md:pt-20'>
                <h1 className='text-4xl font-extrabold'>Your Installed Apps</h1>
                <p className='mt-3 md:mt-5 text-gray-500'>Manage your downloaded applications here.</p>
            </div>

            {/* Sort Dropdown */}
            {installedApps.length > 0 && (
                <div className="flex justify-end mt-10 mb-5">
                    <select
                        className="select select-bordered w-full max-w-xs focus:outline-none"
                        value={sortOrder}
                        onChange={handleSort}
                    >
                        <option value="" disabled>Sort by Downloads</option>
                        <option value="high-low">High-Low</option>
                        <option value="low-high">Low-High</option>
                    </select>
                </div>
            )}

            {/* Apps Grid or Empty State */}
            {installedApps.length > 0 ? (
                <div className="mt-5 flex flex-col gap-5">
                    {installedApps.map(app => (
                        <div key={app.id} className="bg-base-100 shadow-xl border border-gray-100 flex justify-between items-center gap-10 p-5 rounded-xl">
                            <div className='flex gap-5'>
                                <img className='rounded-xl h-20' src={app.image} alt="" />
                                <div>
                                    <div className='mt-3'>
                                        <h2 className="card-title text-lg">{app.title}</h2>
                                    </div>
                                    <div className='flex gap-2 mt-3'>
                                        <p className="text-gray-500 text-sm">⬇️ {formatDownloads(app.downloads)} Downloads</p>
                                        <p className="text-gray-500 text-sm">⭐ {app.ratingAvg} Rating</p>
                                        <p className="text-gray-500 text-sm">💾 {app.size} MB</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => handleUninstall(app.id)}
                                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600 border-none"
                                >
                                    Uninstall
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center mt-20 space-y-4">
                    <h2 className="text-3xl font-bold text-gray-400">No Apps Installed</h2>
                    <p className="text-gray-500">Go to the App Store to install some amazing apps!</p>
                    <Link to="/apps" className="btn bg-[#6b35e5] hover:bg-purple-600 text-white mt-5 border-none">
                        Explore Apps
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Installation;