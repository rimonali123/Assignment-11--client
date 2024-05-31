import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import ServiceDataTable from "../Components/ServiceDataTable";


const ServiceToDo = () => {
    const {user} = useContext(AuthContext)
    const [bookData, SetBookeData] = useState([]);
    useEffect(()=>{
        axios.get('https://assignment-11-server-side-theta.vercel.app/servicesToDo', {withCredentials: true})
        .then(data =>{
            SetBookeData(data.data)
        })
    },[])

// console.log(bookData)

    const bookMatch = bookData.filter(e => e.providerInfo.providerEmail === user?.email);
    // console.log(bookMatch)
    return (
        <div>
            <Helmet>
                <title>Service To Do | ConsultHub</title>
            </Helmet>
            {
                
                user ?
                    <ServiceDataTable bookMatch={bookMatch}
                        providerInfo={user?.providerInfo}></ServiceDataTable>
                    :
                    <h1 className="text-center text-3xl font-bold text-purple-500">There are no booked / Purchased service</h1>
            }
        </div>
    );
};

export default ServiceToDo;