import { useLoaderData } from "react-router-dom";
import PopulerService from "../Components/PopulerService";
import Slider from "../Components/Slider";
import { Helmet } from "react-helmet-async";
import ExtraSection1 from "../Components/ExtraSection1";
import ContactUs from "../Components/ContactUs";
import GoogleMap from "../Components/GoogleMap";


const Home = () => {
    const allData = useLoaderData();
    // console.log(allData)
    return (
        <div> 
            <Helmet>
                <title>Home | ConsultHub</title>
            </Helmet>
            <Slider></Slider>
            <PopulerService allData={allData}></PopulerService>
            <ExtraSection1></ExtraSection1>
            <ContactUs></ContactUs>
            <GoogleMap></GoogleMap>

        </div>
    );
};

export default Home;