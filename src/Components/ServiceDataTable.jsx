

import PropTypes from 'prop-types';

const ServiceDataTable = ({ bookMatch }) => {
    return (
        <div>
            {
                bookMatch.length === 0 ? (
                    <p className="text-center text-3xl font-bold text-purple-600">There is no service booked</p>
                ) : (

                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr className="text-sm lg:text-xl">
                                    <th></th>
                                    <th className="">Service Name</th>
                                    <th>Price</th>
                                    <th className="">Service taken Date</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    bookMatch.map(data => <tr key={data._id}>
                                        <th></th>
                                        <td className="">{data.name}</td>
                                        <td>{data.price} $</td>
                                        <td className="">{data.dateInt}</td>

                                        <div className=" p-3 ">
                                    <select className="border-none text-center join-item  text-green-500 text-2xl">
                                        
                                        
                                        <option className="bg-white text-black text-sm text-start">Pending</option>
                                        <option className="bg-white text-black text-sm text-start">Working</option>
                                        <option className="bg-white text-black text-sm text-start">Complete</option>
                                    </select>
                                </div>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                )
            }

        </div>
    );
};
ServiceDataTable.propTypes = {
    bookMatch: PropTypes.array
}

export default ServiceDataTable;