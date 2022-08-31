import { Link } from "react-router-dom";
import "./allPosts.css";


export default function AllPosts(props) {
	const { id, postAuthor, postDate, postDifficulty, 
		postRecipeImage, postTime, postTitle } = props

	return (
        <>
            <div className="main border">

                <Link to={`/Recipe`}>
                <div className="cardContainer border">
                    <div className="thumb" style={{ backgroundImage: `url(${postRecipeImage})` }}>

                    </div>
                    <div className="textContainer border">
                        <h2>{postTitle}</h2>
                        <p>{postTime}</p>
                        <p>{postDifficulty}</p>
                        <p>{postAuthor}</p>
                        <p>{postDate}</p>
                    </div>
                </div>
                </Link>
            </div>
        </>
	)
}