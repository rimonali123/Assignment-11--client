import { Link } from "react-router-dom";
import PopulerServiceCard from "./PopulerServiceCard";
import PropTypes from 'prop-types';

const PopulerService = ({allData}) => {
    // console.log(allData)
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-20">Our Populer Service</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-24 mt-10">
            {
                allData.slice(0,6).map(data => <PopulerServiceCard
                    key={data._id}
                    data={data}></PopulerServiceCard>)
            }
            </div>
            {/* <PopulerServiceCard></PopulerServiceCard> */}
            <div className=" justify-center">
            <Link to='/services' ><button className="btn btn-secondary mt-5 mx-auto w-44">Show All</button></Link>
            </div>
        </div>
    );
};
PopulerService.propTypes = {
    allData: PropTypes.object,
}

export default PopulerService;