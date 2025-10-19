import { useState, useEffect } from "react";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>投稿</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            ユーザーID: {post.user_id}
            内容: {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
