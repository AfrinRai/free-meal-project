import { useLoaderData } from "react-router-dom";
import Menu from "../Menu/Menu";

const Menus = () => {
    const menus = useLoaderData();
    console.log(menus.meals);
    const meals = menus.meals

    return (
        <div>
            <h2>Total meal numbers: {meals.length}</h2>
            <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)"}}>
                {
                    meals.map(meal => <Menu key={meal.idMeal} meal={meal}></Menu>)
                }
            </div>
        </div>
    );
};

export default Menus;