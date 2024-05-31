import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

const PopulerServiceCard = ({ data }) => {
    // console.log(data);
    const { _id, name, image, price, description, providerInfo } = data;
    return (
        <div>


            <div data-aos="zoom-in" data-aos-duration="1500" className="card  bg-[#67e8f9] shadow-xl lg:h-[750px] border-2">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl lg:h-[350px] w-full border" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{name}</h2>
                    <p>{description}</p>
                    <p><span className="font-bold">Price :</span> {price} $</p>
                    <hr className="w-full border mb-2 mt-2" />
                    <div className="avatar flex gap-4">
                        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={providerInfo.providerImage} />
                        </div>
                        <h1 > <span className="text-xl font-bold">{providerInfo.provederName}</span> <span className="text-xl">(Provider)</span></h1>
                    </div>
                    <hr className="w-full border mb-2 mt-2" />

                    <div className="card-actions w-full">
                        <Link
                            to={`/singleServiceDetails/${_id}`}>
                            <button className="btn btn-primary w-full">View Details</button>
                        </Link>

                    </div>
                </div>
            </div>


            
        </div>
    );
};
PopulerServiceCard.propTypes = {
    data: PropTypes.object
}

export default PopulerServiceCard;