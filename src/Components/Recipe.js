import { useParams } from "react-router-dom";
import "./recipe.css"

export default function Recipe({ posts }) {
    const { id } = useParams();
    const thisPost = posts.length && posts.find((post) => post.id == id);
    const myDescription = thisPost && thisPost.postDescription.content[1].content;
    const myIngredients = thisPost && thisPost.postIngredients.content[1].content;
    
    return (

        <div className="main"> {thisPost ?
            <div className="">
            <div className="thumb" style={{ backgroundImage: `url(${thisPost.postRecipeImage})` }}>

            </div>
            <article className="textContainer">
                <h2>{thisPost.postTitle}</h2><br/>

                <div className="left-box">
                    <p>Benötigte Zeit: {thisPost.postTime}</p>
                    <p>Schwierigkeit: {thisPost.postDifficulty}</p>
                    <div className="ingredients">
                        <h3>{thisPost.postIngredients.content[0].content[0].value}</h3><br/>
                        <ul>
                            {myIngredients.length && myIngredients.map((element) => {
                                return <li>{element.content[0].content[0].value}</li>
                            })}
                        </ul>
                    </div>
                </div>
                
                <div className="right-box">
                    <div className="description">
                        <h3>{thisPost.postDescription.content[0].content[0].value}</h3><br/>
                        <ol>
                            {myDescription.length && myDescription.map((element) => {
                                return <li>{element.content[0].content[0].value}</li>
                            })}
                        </ol>
                    </div>
                </div>            
                
                
                {thisPost && posts.map((item) => {
                })}    
                
                <span>{thisPost.postAuthor} / {thisPost.postDate}</span>
            </article>
            </div> 
            
        : 'not found'}</div>
    )
}