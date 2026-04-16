import AppsLists from "../AppsLists/AppsLists";

const AppsStore = ({ appData }) => {
    return (
        <div className='bg-base-200 md:pt-20'>
            <div className='text-center'>
                <h1 className="text-4xl text-black font-extrabold">Trending Apps</h1>
                <p className="md:mt-5 text-gray-500">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 justify-self-center items-center gap-5 gap-x-10  md:pb-10 md:pt-10">
                {
                    appData.map(app => <AppsLists key={app.id} app={app}></AppsLists>)
                }
            </div>
        </div>
    );
};

export default AppsStore;