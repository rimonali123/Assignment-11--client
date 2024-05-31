import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { motion } from "framer-motion"

const ServiceCard = ({ data }) => {
   
    const { _id, name, image, price, serviceArea, description, providerInfo } = data;
    return (
        <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
        >
                <div className="flex flex-col lg:flex-row card card-side bg-base-100 shadow-xl border">
                    <figure><img src={image} className="border  h-60 lg:w-[450px] md:w-[750px] md:h-96 lg:h-72" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
                        <p><span className="font-bold">Price :</span> {price} $</p>
                        <p><span className="font-bold">Area :</span> {serviceArea}</p>
                        <hr className="w-full border mb-2 mt-2" />

                        <div className="avatar flex gap-4">
                            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={providerInfo.providerImage} />
                            </div>
                            <h1 > <span className="text-xl font-bold">{providerInfo.provederName}</span> <span className="text-xl">(Provider)</span></h1>
                        </div>
                        <hr className="w-full border mb-2 mt-2" />
                        <div className="card-actions justify-end">
                            <Link
                                to={`/singleServiceDetails/${_id}`}
                            ><button className="btn btn-primary w-full">View Details</button></Link>
                        </div>
                    </div>
                </div>
            

        </motion.div>
    );
};
ServiceCard.propTypes = {
    data: PropTypes.object
}

export default ServiceCard;