import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';


const ManageServiceCard = ({ data }) => {
    
    // console.log(data);
    const { _id, image, name, description, price, serviceArea, providerInfo } = data;

    const handlaeDelete = _id => {
        console.log('delete button click by id :', _id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            
            
        })
        
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://assignment-11-server-side-theta.vercel.app/services/${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)

                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your service has been deleted.",
                                    icon: "success"
                                    
                                });
                                
                                
                                // const remaining = userData.filter(data => data._id !== _id);
                                // setUserData(remaining);
                            }
                            window.location.reload();
                            
                        })
                        
                }
                
            })
            

    }
    return (
        <div>
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
                    <div className="lg:flex gap-8 justify-center md:flex md:gap-10 space-x-1 mt-5 ">
                        <Link 
                            to={`/singleServiceDetails/${_id}`}
                            className="btn lg:w-[200px] w-40 bg-green-500 text-xl text-white"
                        >
                            View Details
                        </Link>
                        <Link 
                            to={`/updateService/${_id}`}
                            className="btn lg:w-[200px] w-20 bg-yellow-500 text-xl text-white">
                            Edit
                        </Link>
                        <button
                            onClick={() => handlaeDelete(_id)}
                            className="btn lg:w-[200px] w-20 bg-red-500 text-xl text-white"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
ManageServiceCard.propTypes = {
    data: PropTypes.object
}

export default ManageServiceCard;