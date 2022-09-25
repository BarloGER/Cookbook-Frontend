import { useState } from "react";
import { DeletePost } from "../Utils/DeletePost";
import "./createRecipe.css";

export default function DeleteRecipe() {
  const [inputs, setInputs] = useState({});

  const handleSubmit = async (e) => {
    try {
      const { post, error } = await DeletePost(inputs);
      e.preventDefault();
      if (error) throw error;
      console.log(post);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <fieldset>
      <form onSubmit={handleSubmit}>
        <label>
          Rezept löschen, ID erforderlich.
          <input type="number" name="Recipe_id" onChange={handleChange} />
        </label>
        <div className="terms">
          <label>
            Bist du sicher, das du das Rezept löschen willst?
            <input type="checkbox" name="confirm" onChange={handleChange} />
          </label>
        </div>
        <button>Löschen</button>
      </form>
      <legend>
        <h1>Rezept löschen</h1>
      </legend>
    </fieldset>
  );
}
