import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

const BookedDataTable = ({ bookMatch }) => {
    // console.log(bookMatch)
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
                                        <Link to={`/bookServiceDetails/${data._id}`}><td className="text-sm lg:text-xl">View Details</td></Link>

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
BookedDataTable.propTypes = {
    bookMatch: PropTypes.array
}
export default BookedDataTable;