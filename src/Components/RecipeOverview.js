import { Link } from "react-router-dom";

export default function RecipeOverview(props) {
	const { id, postAuthor, postDate, postDifficulty, 
		postRecipeImage, postTime, postTitle } = props
	return (
        <div className="main border">
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
        </div>
	)
}