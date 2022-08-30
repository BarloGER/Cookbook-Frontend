import { Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import './styles.css';
import Home from './Components/Home';
import RecipeOverview from './Components/RecipeOverview';
import Recipe from './Components/Recipe';

export default function App() {
	const myPosts = [
		{ id: 1, name: 'one', title: 'Lorem Ipsum Title' },
		{ id: 2, name: 'two', title: 'Lorem Ipsum Title 2' },
		{
			id: 3,
			name: 'three',
			title: 'Lorem Ipsum Title 3'
		}
	];

	return (
		<div className="App">
			<nav>
				<NavLink to="/">
					<li>Home</li>
				</NavLink>
				<NavLink to="/posts">
					<li>Rezepte</li>
				</NavLink>
			</nav>

			<Routes>
				<Route path="/" element={<Home myPosts={myPosts} />} />
				<Route path="posts" element={<RecipeOverview myPosts={myPosts} />} />
				<Route path="posts/:id" element={<Recipe myPosts={myPosts} />} />
				<Route path="error" element={<div>oops, something went wrong.</div>} />
				<Route path="*" element={<div>not found</div>} />
			</Routes>
		</div>
	);
}

