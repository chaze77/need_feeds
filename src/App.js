import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import PostsList from "./PostsList";

function App() {
  const [posts, setPosts] = useState([]);
  

  const API_POST = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    axios.get(API_POST).then((res) => {
      const dataPost = res.data;
      setPosts(dataPost);
    });
  }, []);


  // console.log(data);
  // console.log(posts);
  // console.log(comments);

  return (
    <div className="App">

      {posts.map(post=>
      <PostsList post={post}/>
      )}
    </div>
  );
}

export default App;
