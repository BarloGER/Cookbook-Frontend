import { useParams } from "react-router-dom";
import "./recipe.css"

export default function Recipe({ posts }) {
    const { id } = useParams();
    const thisPost = posts.find((post) => post.id == id);
    console.log('Hier', thisPost);

    return (

        <div className="main">
            <div className="">
                <div className="thumb" style={{ backgroundImage: `url(${thisPost.postRecipeImage})` }}>

                </div>
                <article className="textContainer">
                    <h2>{thisPost.postTitle}</h2>
                    <ul>
                    {thisPost && posts.map((item) => {
                    })}    
                    </ul>
                    <p>Benötigte Zeit: {thisPost.postTime}</p>
                    <p>Schwierigkeit: {thisPost.postDifficulty}</p>
                    <span>{thisPost.postAuthor}</span>
                </article>
            </div>
        </div>
    )
}