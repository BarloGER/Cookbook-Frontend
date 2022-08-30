import { useParams, useNavigate } from 'react-router-dom';

export default function Recipe({ myPosts }) {
	console.log('params', useParams());

	const { id } = useParams();
	console.log(myPosts);

	console.log(id);

	const thisPost = myPosts.find((post) => post.id == id);

	console.log('this very post', thisPost);

	const navigate = useNavigate();

	return (
		<div className="component-container">
			{thisPost ? (
				<div>
					{' '}
					One Post with the id {id} and the name {thisPost.name} and the title{' '}
					{thisPost.title}
					<br />
					<button
						onClick={() => {
							navigate(-1);
						}}>
						back
					</button>
				</div>
			) : (
				'not found, nice try'
			)}
		</div>
	);
}
