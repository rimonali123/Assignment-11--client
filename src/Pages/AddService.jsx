import { Helmet } from "react-helmet-async";
import AddServicesFrom from "../Components/AddServicesFrom";


const AddService = () => {
    return (
        <div>
            <Helmet>
                <title>Add Service | ConsultHub</title>
            </Helmet>
            <h1>Add service area here</h1>
            <AddServicesFrom></AddServicesFrom>
        </div>
    );
};

export default AddService;