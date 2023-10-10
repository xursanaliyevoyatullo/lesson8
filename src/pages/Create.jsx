import { NavLink, } from "react-router-dom"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { useFetch } from "../hooks/useFetch";
import { toast } from "react-toastify";

function Create() {
  const { data, isPending, error, newData } = useFetch("https://quartz-billowy-diabloceratops.glitch.me/recipes", "POST" );
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [method, setMethod] = useState("")

  const [ingredient, setIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])


  const addIngredient = (e) => {
    e.preventDefault();
    if (!ingredients.includes(ingredient)) {
      setIngredients((prev) => {
        return [...prev, ingredient];
      });
    }
    setIngredient("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      cookingTime: `${cookingTime} minutes`,
      imgUrl,
      method,
      id: uuidv4(),
      ingredients,
    });
    toast.success("New recipie added seccessfuly")
  }

  return (
    <div>
      <h1 className="text-center text-4xl font-medium mb-3">Create New Recipie</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Title:</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        {/* ingredients */}
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Ingredients:</span>
          </label>
          <div className="flex gap-5 mb-1">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setIngredient(e.target.value)}
              value={ingredient}
            />
            <button onClick={addIngredient} className="btn btn-outline btn-secondary">Add</button>
          </div>
          <p>
            Ingredients: {ingredients.map((ing) => {
              return <i key={ing}>{ing}, </i>
            })}
          </p>
        </div>

        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Cooking Time:</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
          />
        </div>
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Image Url:</span>
          </label>
          <input
            type="url"
            placeholder="Past Url"
            className="textarea input-bordered w-full max-w-xs"
            onChange={(e) => setImgUrl(e.target.value)}
            value={imgUrl}
          />
        </div>
        <div className="form-control w-full max-w-xs mb-4">
          <label className="label">
            <span className="label-text">Method:</span>
          </label>
          <textarea
            type="text"
            placeholder="Type here"
            className="textarea input-bordered w-full max-w-xs"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
          ></textarea>
        </div>
        <button className="btn btn-outline btn-secondary w-80">Create</button>
      </form>
    </div>
  )
}

export default Create