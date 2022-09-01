import { Route, Routes} from 'react-router-dom';
import { useState, useEffect, useParam, useCallback } from "react";
import { client } from './client';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import RecipeOverview from "./Components/RecipeOverview";
import Recipe from "./Components/Recipe";



export default function App() {
  
    const[isPostsLoading, setIsPostsLoading] = useState(false)
    const [posts, setPosts] = useState([])


    // Filter Data updatedPost saved in cleanPosts
    const cleanUpPosts = useCallback((rawData) => {
      const cleanPosts = rawData.map((post) => {
        const {sys, fields} = post
        const {id} = sys
        const postAuthor = fields.author
        const postDate = fields.date
        const postDescription = fields.description
        const postDifficulty = fields.difficulty
        const postIngredients = fields.ingredients
        const postRecipeImage = fields.recipeImage.fields.file.url
        const postTime = fields.time
        const postTitle = fields.title
        const updatedPost = {id, postAuthor, postDate, postDescription, postDifficulty,
          postIngredients, postRecipeImage, postTime, postTitle}
        return updatedPost
      })

      setPosts(cleanPosts)
    }, [])


    // Fetch
    const getPosts = useCallback(async () => {
      setIsPostsLoading(true)
      try {
        const response = await client.getEntries({ content_type: 'recipe' })
        const responseData = response.items
        if (responseData) {
          cleanUpPosts(responseData)
        } else {
            setPosts([])
        }
        setIsPostsLoading(false)
      } catch (err) {
        console.log(err)
        setIsPostsLoading(false)
      }
    }, [cleanUpPosts])

    useEffect(() => {
        getPosts()
    },  [getPosts])
    
    console.log(posts)

    return (
      <>
        <Navbar />

            <Routes>
              <Route path="/" element={<Home posts = {posts.slice(0, 8)}/>} />
              <Route path="/RecipeOverview" element={<RecipeOverview posts = {posts}/>} />
              <Route path="/Recipe/:id" element={<Recipe />} />
              <Route path="*" element={<div>404 Seite nicht gefunden</div>} />
            </Routes>

        
      </>
    );
  }

