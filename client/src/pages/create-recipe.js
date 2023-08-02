import {useState} from "react";

export const CreateRecipe = () => {
    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: [],
        instructions: "",
        imageUrl: "",
        cookingTime: 0,
        userOwner: 0.
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRecipe({ ...recipe, [name]: value })
    }
    return (
        <div className="create-recipe">
            <h2>Create Recipe</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text"
                    id="name"
                    name="name"
                    onChange={handleChange} />
                    
                <label htmlFor="ingredients">Ingredients</label>

                <label htmlFor="instructions">Instructions</label>
                <textarea
                    id="instructions"
                    name="instructions"
                    onChange={handleChange}
                ></textarea>
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text"
                    id="imageUrl"
                    name="imageUrl"
                    onChange={handleChange} />
                <label htmlFor="cookingTime">Cooking Time(min)</label>
                <input type="number"
                    id="cookingTime"
                    name="cookingTime"
                    onChange={handleChange} />
            </form>
        </div>
    );
};