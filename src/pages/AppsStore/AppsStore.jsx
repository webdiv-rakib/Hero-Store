import AppsLists from "../AppsLists/AppsLists";

const AppsStore = ({ appData }) => {

    const topRatedApps = [...appData]
        .sort((a, b) => b.ratingAvg - a.ratingAvg)
        .slice(0, 8);

    return (
        <div className='bg-base-200 md:pt-20 pt-5'>
            <div className='text-center px-5'>
                <h1 className="text-4xl text-black font-extrabold">Trending Apps</h1>
                <p className="md:mt-5 text-gray-500">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 justify-self-center items-center gap-5 ms:gap-x-10  md:pb-10 md:pt-10 pt-5 pb-5">
                {
                    topRatedApps.map(app => (
                        <AppsLists key={app.id} app={app}></AppsLists>
                    ))
                }
            </div>
            <div className="text-center md:pb-10 pb-5">
                <button className="btn text-white bg-gradient-to-r from-[#6b35e5] to-purple-400">Show All</button>
            </div>
        </div>
    );
};

export default AppsStore;