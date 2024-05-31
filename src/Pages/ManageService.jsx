import { useLoaderData } from "react-router-dom";
import ManageServiceCard from "../Components/ManageServiceCard";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const ManageService = () => {
    const { user } = useContext(AuthContext)
    const allData = useLoaderData();
    // console.log(allData);


    return (
        <div>
            <Helmet>
                <title>Manage service | ConsultHub</title>
            </Helmet>
            <div className="flex flex-col gap-10">
                {
                    allData.filter(d => d.providerInfo.providerEmail === user?.email)
                        .map(data => <ManageServiceCard key={data._id}
                            data={data}
                        ></ManageServiceCard>)
                }

            </div>
        </div>
    );
};

export default ManageService;