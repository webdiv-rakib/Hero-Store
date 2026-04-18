import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
    const { id } = useParams();
    const appId = parseInt(id);
    const appData = useLoaderData();
    const singleApp = appData.find(app => app.id === appId);

    const { title, companyName, image, description, size, reviews, ratingAvg, downloads, ratings } = singleApp;
    return (
        <div>
            <div className="flex justify-center gap-10 pt-10 pb-10">
                <div>
                    <img className="w-60" src={image} alt="" />
                </div>
                <div>
                    <div className="space-y-3">
                        <p className="text-2xl font-bold">{title}</p>
                        <p className="text-gray-500">Developed By <span className="text-[#6f36e7]">{companyName}</span></p>
                    </div>
                    <hr className="mt-5" />
                    <div className="flex items-center justify-center gap-20 mt-5 text-center">
                        <div>
                            <img className="w-10" src="https://img.icons8.com/?size=100&id=21339&format=png&color=000000" alt="" />
                            <p className="text-3xl font-extrabold">{downloads}</p>
                        </div>
                        <div>
                            <img className="w-10" src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" />
                            <p className="text-3xl font-extrabold">{ratingAvg}</p>
                        </div>
                        <div>
                            <img className="w-10" src="https://img.icons8.com/?size=100&id=13823&format=png&color=000000" alt="" />
                            <p className="text-3xl font-extrabold">{reviews}</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button className="btn bg-green-500 text-white">Install Now ({size}MB)</button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default AppDetails;