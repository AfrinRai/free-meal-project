import { useLoaderData, useParams } from "react-router-dom";
import ShowDetail from "../ShowDetail/ShowDetail";

const ShowDetails = () => {
    const mealDetails = useLoaderData()
    const details = mealDetails.meals
    // const {menuId} = useParams();
    // console.log(menuId)

    return (
        <div>
            <h2>Details of meal </h2>
            {
                details.map(detail => <ShowDetail key={detail.idMeal} detail={detail}></ShowDetail>)
            }
        </div>
    );
};

export default ShowDetails;