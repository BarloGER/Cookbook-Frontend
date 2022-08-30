import { Link } from 'react-router-dom';

export default function RecipeOverview({ myPosts }) {
	console.log(myPosts);
	return (
		<div className="component-container">
			<h3>All Posts</h3>
			{myPosts.map((post) => {
				return <Link to={`/posts/${post.id}`}>Article {post.name}</Link>;
			})}
		</div>
	);
}