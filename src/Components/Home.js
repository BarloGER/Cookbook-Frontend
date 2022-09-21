import AllPosts from "./AllPosts";
import "./home.css";

export default function Home({ posts }) {
  console.log(posts);
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
            <div>
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
            </div>
          );
        })}
    </main>
  );
}
