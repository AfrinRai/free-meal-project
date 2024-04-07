import { Link } from "react-router-dom";

const Menu = ({meal}) => {
    const {idMeal, strMeal, strCategory} = meal;

    return (
        <div style={{border: "3px solid violet", margin: "20px", padding: "20px"}}>
            <p style={{fontSize: "20px"}}>Name: {strMeal}</p>
            <p>{strCategory}</p>
            <Link to={`/menu/${idMeal}`}>Show Details</Link>
        </div>
    );
};

export default Menu;