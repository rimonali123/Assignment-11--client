
import { Fade } from "react-awesome-reveal";

const ExtraSection1 = () => {
    return (
        <div>
            <div className="mt-10" >
                <h1 className="text-center text-4xl font-bold  mb-4 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Our Best Doctors Team</h1>
                <p className="text-center text-xl text-purple-700  lg:w-[700px] mx-auto">ConsultHubs doctors offer personalized care, accurate diagnoses, and effective treatment plans for all medical needs, ensuring patient well-being.</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-9" >

               <Fade>
               <div className="card card-compact border-2 border-yellow-500  bg-base-100 shadow-xl">
                    <figure><img className="h-[200px] pt-1 w-[220px] rounded-full" src="https://i.ibb.co/YWp5C7B/doctor-2.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Dr. Abir John.smith</h2>
                        <p className="font-bold ">Email: jhon1222@gmail.com</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-yellow-500 w-full text-white text-xl ">Appointment</button>
                        </div>
                    </div>
                </div>
               </Fade>


                <Fade>
                <div className="card card-compact border-2 border-yellow-500  bg-base-100 shadow-xl">
                    <figure><img className="h-[200px] pt-1 w-[220px] rounded-full" src="https://i.ibb.co/4Zh41c1/doctor-3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Dr. Jsmith</h2>
                        <p className="font-bold">Email: jsmithjhon122@gmail.com</p>
                        <div className="card-actions justify-end">
                            <button className="btn  bg-yellow-500 w-full text-white text-xl  ">Appointment</button>
                        </div>
                    </div>
                </div>
                </Fade>

                <Fade>
                <div className="card card-compact border-2 border-yellow-500  bg-base-100 shadow-xl">
                    <figure><img className="h-[200px] pt-1 w-[220px] rounded-full" src="https://i.ibb.co/Br6JqW5/doctor-4.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Dr. Somrat Akbar</h2>
                        <p className="font-bold">Email: smithjhon122@gmail.com</p>
                        <div className="card-actions justify-end">
                            <button className="btn  bg-yellow-500 w-full text-white text-xl ">Appointment</button>
                        </div>
                    </div>
                </div>
                </Fade>

                <Fade>
                <div className="card border-2 border-yellow-500 card-compact  bg-base-100 shadow-xl">
                    <figure><img className="h-[200px] pt-1 w-[220px] rounded-full" src="https://i.ibb.co/PGrQD20/sd1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Dr. Leo Martinej</h2>
                        <p className="font-bold">Email: jhon122@gmail.com</p>
                        <div className="card-actions justify-end">
                            <button className="btn  bg-yellow-500 w-full text-white text-xl ">Appointment</button>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>



        </div>

    );
};

export default ExtraSection1;