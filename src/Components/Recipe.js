import { useParams } from "react-router-dom";
import "./recipe.css";

export default function Recipe({ posts }) {
  const { id } = useParams();
  const thisPost = posts.length && posts.find((post) => post.id == id);
  const myDescription = thisPost && thisPost.description;
  const myIngredients = thisPost && thisPost.ingredients;

  return (
    <div className="main">
      {" "}
      {thisPost ? (
        <div className="">
          <div
            id="bild"
            className="thumb"
            style={{ backgroundImage: `url(${thisPost.image})` }}
          ></div>
          <article className="textContainer">
            <h2>{thisPost.title}</h2>
            <br />

            <div className="left-box">
              <p>Benötigte Zeit: {thisPost.required_time}</p>
              <p>Schwierigkeit: {thisPost.difficulty}</p>
              <br />
              <div className="ingredients">
                <h3>Zutaten</h3>
                <br />
                <ul>
                  {myIngredients.length &&
                    myIngredients.map((element) => {
                      return <li>{element.ingredients.value}</li>;
                    })}
                </ul>
              </div>
            </div>

            <div className="right-box">
              <div className="description">
                <br />
                <h3>Beschreibung</h3>
                <br />
                <ol>
                  {myDescription.length &&
                    myDescription.map((element) => {
                      return <li>{element.description.value}</li>;
                    })}
                </ol>
              </div>
            </div>

            {thisPost && posts.map((item) => {})}

            <span>
              {thisPost.author} / {thisPost.date}
            </span>
          </article>
        </div>
      ) : (
        "not found"
      )}
    </div>
  );
}
