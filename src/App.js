import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { useState, useEffect, useCallback } from "react";
import './styles.css';
import Home from './Components/Home';
import RecipeOverview from './Components/RecipeOverview';
import Recipe from './Components/Recipe';
import { client } from './client';

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
        const postDifficulty = fields.difficulty
        const postRecipeImage = fields.recipeImage.fields.file.url
        const postTime = fields.time
        const postTitle = fields.title
        const updatedPost = {id, postAuthor, postDate, postDifficulty,
          postRecipeImage, postTime, postTitle}
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
        <div>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="RecipeOverview">Rezeptübersicht</NavLink>
          </nav>

          <Routes>

          </Routes>
        </div>

        <div>
          {posts.map((item) => {
            const { id, postAuthor, postDate, postDifficulty, 
              postRecipeImage, postTime, postTitle } = item
              return (
                <RecipeOverview key={id} postAuthor={postAuthor} postDate={postDate} postDifficulty={postDifficulty} 
                postRecipeImage={postRecipeImage} postTime={postTime} postTitle={postTitle}/>
              )
          })}
        </div>
      </>
    );
  }

