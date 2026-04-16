import { Link } from "react-router";

const AppsLists = ({ app }) => {
    const { title, image, ratingAvg, downloads } = app;

    const formatDownloads = (num) => {
        return new Intl.NumberFormat('en-US', {
            notation: "compact",
            maximumFractionDigits: 1
        }).format(num);
    };

    return (
        <Link>
            <div className='rounded-xl w-max bg-gray-200 shadow-xl'>
                <div className='p-5'>
                    <div>
                        <img src={image} alt={title} className="rounded-xl w-full object-cover" />
                    </div>
                    <div className="mt-3">
                        <h3 className='font-bold text-lg'>{title}</h3>
                    </div>
                    <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                        <p className="badge text-green-500">⬇️ {formatDownloads(downloads)}</p>
                        <p className="badge text-yellow-500">⭐ {ratingAvg}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppsLists;