import { Route, Routes} from 'react-router-dom';
import { useState, useEffect, useCallback } from "react";
import { client } from './client';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import AllPosts from './Components/AllPosts';
import RecipeOverview from "./Components/RecipeOverview";



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
        <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/RecipeOverview" element={<RecipeOverview />} />
            </Routes>

        <div>
          {posts.map((item) => {
            const { id, postAuthor, postDate, postDifficulty, 
              postRecipeImage, postTime, postTitle } = item
              return (
                <AllPosts key={id} postAuthor={postAuthor} postDate={postDate} postDifficulty={postDifficulty} 
                postRecipeImage={postRecipeImage} postTime={postTime} postTitle={postTitle} />
              )
          })}
        </div>
      </>
    );
  }

