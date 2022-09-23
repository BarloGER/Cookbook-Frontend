import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import RecipeOverview from "./Components/RecipeOverview";
import Recipe from "./Components/Recipe";
import AboutUs from "./Components/AboutUs";
import CreateRecipe from "./Components/CreateRecipe";

export default function App() {
  const [posts, setPosts] = useState([]);
  const API = "https://cookbook-api.onrender.com";
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home posts={posts.slice(0, 7)} />} />
        <Route
          path="/RecipeOverview"
          element={<RecipeOverview posts={posts} />}
        />
        <Route path="/Recipe/:id" element={<Recipe posts={posts} />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/CreateRecipe" element={<CreateRecipe />} />
        <Route path="*" element={<div>404 Seite nicht gefunden</div>} />
      </Routes>
    </>
  );
}
