import { useLoaderData } from 'react-router';
import Banner from '../../components/Banner/Banner';
import Information from '../../components/Information/Information';
import AppsStore from '../AppsStore/AppsStore';

const Home = () => {
    const appData = useLoaderData();
    console.log(appData)
    return (
        <div>
            <Banner></Banner>
            <Information></Information>
            <AppsStore appData={appData}></AppsStore>
        </div>
    );
};

export default Home;