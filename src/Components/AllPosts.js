import { Link } from "react-router-dom";
import "./allPosts.css";

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
    <div className="main">
      <Link to={`/Recipe/${Recipe_id}`}>
        <div className="cardContainer">
          <div
            className="thumb"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <article className="textContainer">
            <h2>{title}</h2>
            <p>Benötigte Zeit: {required_time}</p>
            <p>Schwierigkeit: {difficulty}</p>
            <span>{author}</span>
          </article>
        </div>
      </Link>
    </div>
  );
}
