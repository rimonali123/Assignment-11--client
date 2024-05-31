import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const BookServiceDetails = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const [startDate, setStartDate] = useState(new Date());
    const allData = useLoaderData();
    // console.log(allData);
    const { _id } = useParams()
    const data = allData.find((d)=> d._id == _id)
    const { image, name, price, serviceArea, description, providerInfo } = data;
    // console.log(data)



    const handleAdd = e => {

        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const image = e.target.image.value;
        const id = e.target.id.value;
        const description = e.target.description.value;
        const userName = e.target.userName.value;
        const userEmail = e.target.UserEmail.value;
        const instruction = e.target.instruction.value;
        const date = startDate
        const dateInt = date.toLocaleDateString()

        const providerInfo = { provederName: user?.displayName, providerEmail: user?.email, providerImage: user?.photoURL }
        const bookService = { id, dateInt, instruction, UserEmail: userEmail, userName, name, price, image, description, serviceArea, providerInfo };
        console.log(bookService);


        fetch('https://assignment-11-server-side-theta.vercel.app/bookedService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Service booked successfully',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })

                }
            })
    }
    return (
        <div className="mt-10">
            <Helmet>
                <title>Booked service Details | ConsultHub</title>
            </Helmet>

            <div className="flex flex-col lg:flex-row card card-side bg-base-100 shadow-xl border-2 h-64 w-1/2 mx-auto">
                <figure><img src={providerInfo.providerImage} className="border  h-full w-[200px]  " alt="Movie" /></figure>
                <div className="ml-10 space-y-5">
                    <h2 className="card-title mt-14"> <span className="text-xl font-bold">Provider Name : </span><span className="text-3xl font-bold uppercase ">{providerInfo.provederName}</span></h2>

                    <p><span className="font-bold">Service Location :</span> {serviceArea}</p>

                </div>
            </div>



            <div className="hero ">
                <div className="hero-content gap-10 lg:gap-20 flex-col lg:flex-row item-center">
                    <div className=" border p-4 rounded-2xl lg:w-[600px]">
                        <img src={image} className=" bg-base-300  py-10 lg:h-[260px]  lg:w-[600px] px-20 rounded-lg shadow-2xl" />
                    </div>
                    <div className="border-2 p-3 px-10 rounded-2xl lg:h-[300px] md:w-full lg:w-1/2 flex-grow">
                        <div className="space-y-5">

                            <p><span className="text-lg lg:text-2xl font-bold "> Service Name : </span><span className="text-xl font-bold">{name}</span></p>

                        </div>

                        <hr className="w-full border border-dotted mt-5 mb-5" />
                        <div className="flex flex-col space-y-2">
                            <p><span className="font-bold">Price :</span> {price} $</p>

                            <p className="text-base ">{description}.</p>


                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button disabled={providerInfo.providerEmail === user.email} className="btn btn-warning w-full taxt-2xl font-bold" onClick={() => document.getElementById('my_modal_3').showModal()}>Book Now</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box lg:max-w-4xl">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <div>
                                        <div className="hero w-full">
                                            <div className="hero-content w-full flex flex-col">
                                                <div className="card  w-full  shadow-2xl bg-[#F4F3F0]">
                                                    <form
                                                        onSubmit={handleAdd}
                                                        className="card-body">
                                                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                                                            <div className="form-control">
                                                                <label className="label">
                                                                    <span className="label-text">Service Id</span>
                                                                </label>
                                                                <input type="text" disabled name="id" defaultValue={_id} placeholder="service id" className="input input-bordered" required />
                                                            </div>
                                                            <div className="form-control">
                                                                <label className="label">
                                                                    <span className="label-text">Service Name</span>
                                                                </label>
                                                                <input type="text" disabled name="name" defaultValue={name} placeholder="service name" className="input input-bordered" required />
                                                            </div>
                                                            
                                                            <div className="form-control">
                                                                <label className="label">
                                                                    <span className="label-text">Price</span>
                                                                </label>
                                                                <input type="text" disabled name="price" defaultValue={price} placeholder="price" className="input input-bordered" required />
                                                            </div>

                                                            <div className="form-control">
                                                                <label className="label">
                                                                    <span className="label-text">Provider Name</span>
                                                                </label>
                                                                <input type="text" disabled name="pName" defaultValue={providerInfo.provederName} placeholder="service name" className="input input-bordered" required />
                                                            </div>
                                                            <div className="form-control">
                                                                <label className="label">
                                                                    <span className="label-text">Provider Email</span>
                                                                </label>
                                                                <input type="text" disabled name="email" defaultValue={providerInfo.providerEmail} placeholder="service name" className="input input-bordered" required />
                                                            </div>
                                                            <div className="form-control">
                                                                <label className="label">
                                                                    <span className="label-text">User Name</span>
                                                                </label>
                                                                <input type="text" disabled name="userName" defaultValue={user?.displayName} placeholder="user name" className="input input-bordered" required />
                                                            </div>
                                                            <div className="form-control">
                                                                <label className="label">
                                                                    <span className="label-text">User Email</span>
                                                                </label>
                                                                <input type="text" disabled name="UserEmail" defaultValue={user?.email} placeholder="user email" className="input input-bordered" required />
                                                            </div>
                                                            <div className="form-control">
                                                                <label className="label">
                                                                    <span className="label-text">Service Taking Date</span>
                                                                </label>
                                                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                                            </div>
                                                            <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text">Special instruction</span>
                                                            </label>
                                                            <input type="text" name="instruction" placeholder="Special instruction" className="input input-bordered" required />
                                                        </div>
                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text">Description</span>
                                                            </label>
                                                            <input type="text" name="description" disabled defaultValue={description} placeholder="Special instruction" className="input input-bordered" required />
                                                        </div>

                                                        </div>
                                                        

                                                        <div className="form-control">
                                                            <label className="label">
                                                                <span className="label-text">Service Image Url</span>
                                                            </label>
                                                            <input type="url" disabled name="image" defaultValue={image} placeholder="use image URL" className="input input-bordered" required />
                                                        </div>

                                                        <div className="form-control mt-6">
                                                            <button className="btn bg-[#D2B48C] font-bold">Purchase Now</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </dialog>
                            {/* <button className="btn btn-warning w-full taxt-2xl font-bold"></button> */}
                            <Link to='/'><button className="btn btn-primary w-full">Back To Home</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookServiceDetails;