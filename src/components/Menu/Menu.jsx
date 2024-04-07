import { Link } from "react-router-dom";

const Menu = ({meal}) => {
    const {idMeal, strMeal, strCategory} = meal;

    return (
        <div style={{border: "3px solid teal", margin: "20px", padding: "20px", borderRadius: "30px"}}>
            <p style={{fontSize: "20px", fontWeight: "bold"}}>Name: {strMeal}</p>
            <p>{strCategory}</p>
            <Link to={`/menu/${strMeal}`}>Show Details</Link>
        </div>
    );
};

export default Menu;