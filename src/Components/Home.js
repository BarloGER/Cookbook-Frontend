import AllPosts from "./AllPosts";
import "./home.css";

export default function Home({posts}) {
  console.log(posts);
    return (
        <main>
          {posts && posts.map((item) => {
            // destructure item
            const { id, postAuthor, postDate, postDifficulty, 
              postRecipeImage, postTime, postTitle } = item 
              return (
                <div>
                  <AllPosts key={id} postId={id} postAuthor={postAuthor} postDate={postDate} postDifficulty={postDifficulty} 
                  postRecipeImage={postRecipeImage} postTime={postTime} postTitle={postTitle} />
                </div>
              )
          })}
        </main>
    )
}