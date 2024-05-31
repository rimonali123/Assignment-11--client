import { useContext } from "react";
import Swal from "sweetalert2";

import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdateService = () => {
    const { user } = useContext(AuthContext)
    const allData = useLoaderData();
    const {_id, name, serviceArea, price, description, image} = allData;
    const handleSubmit = e => {

        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const serviceArea = e.target.area.value;
        const description = e.target.description.value;
        const image = e.target.image.value;
        const providerInfo = { provederName: user?.displayName, providerEmail: user?.email, providerImage: user?.photoURL }
        const updateService = { name, price, description, image, serviceArea, providerInfo };
        console.log(updateService);


        // update data to server

        fetch(`https://assignment-11-server-side-theta.vercel.app/services/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update Service item successfully',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })

                }
            })

    }
    return (
        <div>
            <Helmet>
                <title>Update service | ConsultHub</title>
            </Helmet>
            <div className="hero w-full">
                <div className="hero-content w-full flex flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Update Your Consult Service</h1>

                    </div>
                    <div className="card  w-full  shadow-2xl bg-[#F4F3F0]">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={name} placeholder="service name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Area</span>
                                    </label>
                                    <input type="text" name="area" defaultValue={serviceArea} placeholder="service area name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short description</span>
                                    </label>
                                    <input type="text" name="description" defaultValue={description} placeholder="short description at least 200 characters" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="url" name="image" defaultValue={image} placeholder="use image URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#D2B48C] font-bold">Update Service</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateService;