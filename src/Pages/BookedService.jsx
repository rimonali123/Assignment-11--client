import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookedDataTable from "../Components/BookedDataTable";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const BookedService = () => {
    const { user } = useContext(AuthContext)
    const [bookData, SetBookeData] = useState([]);
    useEffect(()=>{
        axios.get('https://assignment-11-server-side-theta.vercel.app/bookedService', {withCredentials: true})
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
                <title>Booked service | ConsultHub</title>
            </Helmet>
            {
                
                user ?
                    <BookedDataTable bookMatch={bookMatch}
                        providerInfo={user?.providerInfo}></BookedDataTable>
                    :
                    <h1 className="text-center text-3xl font-bold text-purple-500">There are no booked / Purchased service</h1>
            }




        </div>
    );
};

export default BookedService;