import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import toast from "react-hot-toast";
import Swal from "sweetalert2";
AOS.init();


const ContactUs = () => {
    const handleContact = e => {
        e.preventDefault();
        e.target.reset();
        Swal.fire({
            title: 'Success!',
            text: 'Message Sent Successfully',
            icon: 'success',
            confirmButtonText: 'Continue'
            // toast.success('Message Sent Successfully')
        })
    }
    return (
        <div id="contact">

            <div className="text-center mt-10">
                <h1 className="text-3xl font-bold text-violet-600 text-center mb-5 ">How to Reach us</h1>
                <p className=" md:w-[500px] lg:w-[700px] mx-auto text-base-content">ConsultHub provides accessible healthcare solutions, connecting patients with expert medical professionals worldwide for comprehensive virtual consultations.<br /> <span className="text-rose-600">If you feel free please send your feedback.</span></p>
            </div>

            <div className="flex md:w-[900px] lg:w-full mx-auto flex-col lg:flex-row justify-between lg:px-44 border mt-10 mb-10 p-5 border-red-500 bg-[#f9a8d4] rounded-xl">
                <div className="space-y-10">

                    <div >
                        <h1 className="text-4xl font-bold flex items-center gap-2"><span className="text-3xl"><SlLocationPin /></span>Head office</h1>
                        <p className="text-xl font-m ml-10">123 Main Street
                            CityTown, <br /> Dhaka, Bangladesh</p>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold flex items-center gap-2"><span className="text-3xl"><FiPhoneCall /></span> Phone</h1>
                        <p className="text-xl font-m ml-10">+8801610557930</p>
                    </div>
                    <div >
                        <h1 className="text-4xl font-bold flex items-center gap-2"><span className="text-3xl"><TfiEmail /></span> Email</h1>
                        <p className="text-xl font-m ml-10">consulthub@gmail.com</p>
                    </div>

                </div>
                <div data-aos="flip-down" data-aos-duration="1500" className="lg:w-1/2 mt-5 lg:mt-0">
                    <div className="card shrink-0 w-full  shadow-2xl bg-[#818cf8]">
                        <form onSubmit={handleContact} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full name" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <input type="text" placeholder="Type your message" className="input input-bordered" required />
                            </div>
                            <input className="btn btn-primary w-1/2 text-xl text-white hover:bg-green-500" type="submit" value="Send" />


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;