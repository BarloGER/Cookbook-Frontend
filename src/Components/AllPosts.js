import { Link } from "react-router-dom";
import "../Styles/globalStyle.css";

export default function AllPosts(props) {
  const {
    Recipe_id,
    author,
    date,
    description,
    difficulty,
    ingredients,
    image,
    required_time,
    title,
  } = props;
  console.log(props);

  return (
    <>
      <Link to={`/Recipe/${Recipe_id}`}>
        <div className="card-container">
          <div
            className="thumb"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <article className="text-container">
            <h2>{title}</h2>
            <p>Benötigte Zeit: {required_time} Minuten</p>
            <p>Schwierigkeit: {difficulty}</p>
            <span>{author}</span>
          </article>
        </div>
      </Link>
    </>
  );
}
