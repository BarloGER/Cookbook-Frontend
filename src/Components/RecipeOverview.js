import AllPosts from "./AllPosts";
import "./recipeOverview.css";

export default function RecipeOverview({ posts }) {
  return (
    <main>
      {posts &&
        posts.map((item) => {
          // destructure item
          const {
            Recipe_id,
            author,
            date,
            difficulty,
            image,
            required_time,
            title,
          } = item;

          return (
            <>
              <AllPosts
                key={Recipe_id}
                Recipe_id={Recipe_id}
                author={author}
                date={date}
                difficulty={difficulty}
                image={image}
                required_time={required_time}
                title={title}
              />
            </>
          );
        })}
    </main>
  );
}
