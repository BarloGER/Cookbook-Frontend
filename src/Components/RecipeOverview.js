

export default function RecipeOverview(props) {
	const { id, postAuthor, postDate, postDifficulty, 
		postRecipeImage, postTime, postTitle } = props
	return (
		<div className="cardContainer" style={{ backgroundImage: `url(${postRecipeImage})` }}>
            <div className="textContainer">
                <h2>{postTitle}</h2>
                <p>{postTime}</p>
                <p>{postDifficulty}</p>
                <p>{postAuthor}</p>
                <p>{postDate}</p>
            </div>
        </div>
	)
}