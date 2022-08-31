import AllPosts from "./AllPosts";

export default function RecipeOverview({posts}) {
  console.log(posts);
    return (
        <div>
          {posts && posts.map((item) => {
            // destructure item
            const { id, postAuthor, postDate, postDifficulty, 
              postRecipeImage, postTime, postTitle } = item 
              return (
                <>
                  <AllPosts key={id} postAuthor={postAuthor} postDate={postDate} postDifficulty={postDifficulty} 
                postRecipeImage={postRecipeImage} postTime={postTime} postTitle={postTitle} />
                </>
              )
          })}
        </div>
    )
}