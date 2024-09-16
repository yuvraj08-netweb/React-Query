import { useQuery } from '@tanstack/react-query'
import './App.css'
import { fetchPosts } from './api/api'
import PostList from './components/PostList'

function App() {

  const {data, isLoading} =useQuery({
    queryKey:["posts"],
    queryFn: fetchPosts,
  })

  console.log(data,isLoading);
  
  return (
    <>
      <h1 className='title'>My Posts</h1>
      <PostList/>
    </>
  )
}

export default App
