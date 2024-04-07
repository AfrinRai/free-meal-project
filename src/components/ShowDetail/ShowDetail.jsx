import { useNavigate } from "react-router-dom";

const ShowDetail = ({detail}) => {
    const navigate = useNavigate();

    const handleGoingBack = () => {
        navigate(-1)
    }
    const {idMeal, strMeal, strCategory, strArea, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strMealThumb, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strInstructions} = detail;
    return (
        <div>
            <img style={{width: "400px", height: "400px", borderRadius: "20px"}} src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <p>Category: {strCategory}</p>
            <p>Origin: {strArea}</p>
            <p style={{color: "green", fontWeight: "bold"}}>Ingredients of {strMeal}:-</p>
            <ol style={{textAlign: "start", marginLeft: "500px"}}>
                <li>{strIngredient1}: {strMeasure1}</li>
                <li>{strIngredient2}: {strMeasure2}</li>
                <li>{strIngredient3}: {strMeasure3}</li>
                <li>{strIngredient4}: {strMeasure4}</li>
                <li>{strIngredient5}: {strMeasure5}</li>
                <li>{strIngredient6}: {strMeasure6}</li>
            </ol>
            <p style={{marginRight: "50px", marginLeft: "50px", textAlign: "start"}}>
                <span style={{fontWeight: "bold"}}>Instruction:</span> {strInstructions}
            </p>
            <button onClick={handleGoingBack}
            style={{border: "1px solid green", backgroundColor: "lightgreen", marginBottom: "40px"}}>
                Go Back
            </button>
        </div>
    );
};

export default ShowDetail;