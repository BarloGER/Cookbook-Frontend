import { useParams } from "react-router-dom";
import "../Styles/recipe.css";

export default function Recipe({ posts }) {
  const { id } = useParams();
  const thisPost = posts.length && posts.find((post) => post.Recipe_id === id);
  const myDescription = thisPost && thisPost.description;
  const myIngredients = thisPost && thisPost.ingredients;
  console.log(posts);
  console.log(thisPost);
  return (
    <div className="recipe">
      {" "}
      {thisPost ? (
        <div className="card">
          <div
            className="thumb"
            style={{ backgroundImage: `url(${thisPost.image})` }}
          ></div>
          <article className="text-container">
            <div className="top-box">
              <h2>{thisPost.title}</h2>
              <span>
                {thisPost.author} / {thisPost.date}
              </span>
            </div>
            <div className="info">
              <p>Benötigte Zeit: {thisPost.required_time} Minuten</p>
              <p>Schwierigkeit: {thisPost.difficulty}</p>
            </div>
            <div className="bottom-box">
              <div className="ingredients">
                <h3>Zutaten</h3>
                <br />
                <ul>
                  {myIngredients.length &&
                    myIngredients.map((element) => {
                      return <li>{element}</li>;
                    })}
                </ul>
              </div>

              <div className="description">
                <br />
                <h3>Beschreibung</h3>
                <br />
                <ol>
                  {myDescription.length &&
                    myDescription.map((element) => {
                      return <li>{element}</li>;
                    })}
                </ol>
              </div>
            </div>
            {thisPost && posts.map((item) => {
              return <div>{item}</div>;
            })}
          </article>
        </div>
      ) : (
        "not found"
      )}
    </div>
  );
}
