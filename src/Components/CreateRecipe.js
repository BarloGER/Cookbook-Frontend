import { useState } from "react";
import { CreatePost } from "../Utils/CreatePost";
import "../Styles/form.css";

export default function CreateRecipe() {
  const [inputs, setInputs] = useState({});

  const checkForPlus = (test3) => {
    if (test3.includes("+")) {
      test3 = test3.split("+");
      test3.toString();
    }
    return test3;
  };

  const handleSubmit = async (e) => {
    try {
      let test1 = inputs.description;
      let test2 = inputs.ingredients;
      inputs.description = checkForPlus(test1);
      inputs.ingredients = checkForPlus(test2);
      const { post, error } = await CreatePost(inputs);
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
          Bild URL:
          <input
            type="text"
            name="image"
            placeholder="https://beispiel.url.de"
            required
            onChange={handleChange}
          />
        </label>

        <label>
          Titel:
          <input
            type="text"
            name="title"
            placeholder="Das Beispiel"
            required
            onChange={handleChange}
          />
        </label>

        <label>
          Benötigte Zeit:
          <input
            type="number"
            name="requiredTime"
            placeholder="Nur Zahl, Beispiel 10"
            required
            onChange={handleChange}
          ></input>
        </label>

        <label>
          Schwierigkeit:
          <input
            type="text"
            name="difficulty"
            placeholder="leicht, mittel oder schwer"
            required
            onChange={handleChange}
          ></input>
        </label>

        <label>
          Autor:
          <input
            type="text"
            name="author"
            placeholder="Max Mustermann"
            required
            onChange={handleChange}
          ></input>
        </label>

        <label>
          Datum:
          <input
            type="text"
            name="date"
            placeholder="Format: YYYY-MM-DD"
            required
            onChange={handleChange}
          ></input>
        </label>

        <label>
          Beschreibung:
          <textarea
            type="text"
            name="description"
            placeholder="Schritte durch + trennen. Beispiel: Apfel schälen + Apfel in kleine Stücke schneiden"
            required
            onChange={handleChange}
          ></textarea>
        </label>

        <label>
          Zutaten:
          <textarea
            type="text"
            name="ingredients"
            placeholder="Zutaten durch + trennen. Beispiel: Zucker + Zimt"
            required
            onChange={handleChange}
          ></textarea>
        </label>

        <div className="terms">
          <label>
            Ich bin mir sicher, dass alle Angaben korrekt sind.
            <input type="checkbox" name="terms" onChange={handleChange} />
          </label>
        </div>
        <button>Abschicken</button>
      </form>
      <legend>
        <h1>Neues Rezept</h1>
      </legend>
    </fieldset>
  );
}
