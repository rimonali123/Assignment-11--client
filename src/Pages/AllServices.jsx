import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Components/ServiceCard";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const AllServices = () => {
    const allData = useLoaderData();
    const [search, setSearch] = useState('');
    console.log(search)

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Helmet>
                <title>All service | ConsultHub</title>
            </Helmet>
            <div>
                <label className="input input-bordered border-2 border-purple-600 flex items-center gap-2">
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        type="text" className="grow border-3" placeholder="Search by service name" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>
            <div className="grid grid-cols-1 gap-10 mt-10">
                {currentItems
                    .filter((data) => {
                        const lowerCaseName = data.name.toLowerCase(); 
                        const searchLowerCase = search.toLowerCase();
                        const searchText = searchLowerCase.charAt(0).toUpperCase() + searchLowerCase.slice(1); 
                        return searchLowerCase === '' ? true : lowerCaseName.includes(searchLowerCase) || lowerCaseName.includes(searchText);
                    })
                    .map((data) => (
                        <ServiceCard key={data._id} data={data} />
                    ))}
            </div>
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(allData.length / itemsPerPage) }, (_, i) => (
                    <button key={i} onClick={() => paginate(i + 1)} className={`mx-1 p-2 rounded-md ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>{i + 1}</button>
                ))}
            </div>
        </div>
    );
};

export default AllServices;