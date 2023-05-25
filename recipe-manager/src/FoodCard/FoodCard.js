import './FoodCard.css';

function FoodCard({ recipe }) {
    
    return (
    <div className="card m-3" style={{height:"20rem"}}>
        <div className="card-body">
            <h5 className="card-title">{recipe.name}</h5>
            <p className="card-text">{recipe.description}</p>
            <a href="#" className="btn btn-primary">Details</a>
        </div>
    </div>
  );
}

export default FoodCard;
