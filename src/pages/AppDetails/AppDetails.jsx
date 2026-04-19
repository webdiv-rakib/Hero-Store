import { useLoaderData, useNavigate, useParams } from "react-router";
import ReviewChart from "../../components/ReviewChart/ReviewChart";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const AppDetails = () => {
    const { id } = useParams();
    const appId = parseInt(id);
    const appData = useLoaderData();
    const singleApp = appData.find(app => app.id === appId);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const storedIds = JSON.parse(localStorage.getItem('installedApps')) || [];
        if (storedIds.includes(appId)) {
            setIsInstalled(true);
        }
    }, [appId]);

    const handleInstall = () => {
        const storedIds = JSON.parse(localStorage.getItem('installedApps')) || [];

        if (!storedIds.includes(appId)) {
            storedIds.push(appId);
            localStorage.setItem('installedApps', JSON.stringify(storedIds));
            setIsInstalled(true);
            toast.success(`${title} installed successfully!`);
        }
    };

    const formatDownloads = (num) => {
        return new Intl.NumberFormat('en-US', {
            notation: "compact",
            maximumFractionDigits: 1
        }).format(num);
    };
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    const { title, companyName, image, description, size, reviews, ratingAvg, downloads, ratings } = singleApp;
    return (
        <div>
            <div className="md:flex md:justify-center md:gap-10 pt-5 md:pt-10 md:pb-10 grid grid-cols-1 items-center justify-center">
                <div className="px-5">
                    <img className="w-60" src={image} alt="" />
                </div>
                <div className="px-5">
                    <div className="space-y-3 mt-5">
                        <p className="text-2xl font-bold">{title}</p>
                        <p className="text-gray-500">Developed By <span className="text-[#6f36e7] font-bold">{companyName}</span></p>
                    </div>
                    <hr className="mt-5" />
                    <div className="flex items-center justify-center gap-20 mt-5 text-center">
                        <div className="space-y-2">
                            <img className="w-10" src="https://img.icons8.com/?size=100&id=21339&format=png&color=000000" alt="" />
                            <p className="text-3xl font-extrabold">{formatDownloads(downloads)}</p>
                        </div>
                        <div className="space-y-2">
                            <img className="w-10" src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" />
                            <p className="text-3xl font-extrabold">{ratingAvg}</p>
                        </div>
                        <div className="space-y-2">
                            <img className="w-10" src="https://img.icons8.com/?size=100&id=13823&format=png&color=000000" alt="" />
                            <p className="text-3xl font-extrabold">{formatDownloads(reviews)}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleInstall}
                        disabled={isInstalled}
                        className={`mt-5 mb-5 btn w-max md:w-auto px-10 border-none text-white ${isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
                            }`}
                    >
                        {isInstalled ? "Installed" : `Install Now (${size}MB)`}
                    </button>
                </div>
            </div>
            <hr />
            {/* Bottom Section: Recharts */}
            <div className="pt-15 pb-15 md:px-20 px-5">
                <h2 className="text-3xl font-bold mb-10">Ratings & Reviews ({reviews})</h2>

                {/* Just pass the ratings array from your destructured app object! */}
                <ReviewChart ratings={ratings}></ReviewChart>
                {/* <ReviewChart ratings={ratings} /> */}
            </div>
            <hr />
            <div className="pt-15 pb-15 md:px-20 space-y-3 px-5">
                <h2 className="text-3xl font-bold">Description</h2>
                <p>{description}</p>
            </div>
            <div className="text-center pb-10">
                <button onClick={handleGoBack} className="btn bg-linear-to-r from-[#6b35e5] to-purple-400 text-white">Go Back</button>
            </div>
        </div>
    );
};

export default AppDetails;