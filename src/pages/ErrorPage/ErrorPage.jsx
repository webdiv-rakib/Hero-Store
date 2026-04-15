import { useNavigate } from "react-router";
import errorimage from "../../assets/error-404.png"
const ErrorPage = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className="flex flex-col justify-center items-center space-y-10 mb-10">
            <div>
                <img src={errorimage} alt="" />
            </div>
            <div className="text-center space-y-3">
                <h1 className="text-4xl font-bold">Oops!Page Not Found!</h1>
                <p>The page your are looking for is not available.</p>
                <button onClick={handleGoBack} className="btn bg-gradient-to-r from-[#6b35e5] to-purple-400 text-white">Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;