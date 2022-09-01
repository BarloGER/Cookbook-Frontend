import { Link } from "react-router-dom";
import "./allPosts.css";


export default function AllPosts(props) {
	const { id, postAuthor, postDate, postDifficulty, 
		postRecipeImage, postTime, postTitle } = props

	return (
        <div className="main">
            {/* {props.map(() => {
                return <Link to={`/recipe/${props.id}`}></Link>
            })} */}
            <Link to={`/Recipe/:id`}>
            <div className="cardContainer">
                <div className="thumb" style={{ backgroundImage: `url(${postRecipeImage})` }}>

                </div>
                <article className="textContainer">
                    <h2>{postTitle}</h2>
                    <p>Benötigte Zeit: {postTime}</p>
                    <p>Schwierigkeit: {postDifficulty}</p>
                    <span>{postAuthor}</span>
                </article>
            </div>
            </Link>
        </div>
	)
}