import NavBar from '../../components/Header/NavBar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InfinitySpin } from 'react-loader-spinner';

const Root = () => {
    const navigation = useNavigation();
    const isNavigating = navigation.state === "loading";
    return (
        <div>
            <NavBar></NavBar>

            <main className="min-h-[calc(100vh-200px)]">
                {isNavigating ? (
                    
                    <div className="flex justify-center items-center h-full mt-32">
                        <InfinitySpin
                            width="200"
                            color="#6b35e5"
                        />
                    </div>
                ) : (
                    <Outlet></Outlet>
                )}
            </main>

            <ToastContainer position="top-right" autoClose={3000} />
            <Footer></Footer>
        </div>
    );
};

export default Root;