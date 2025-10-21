import { useState, useEffect } from "react";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

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

    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPosts();
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>express+react SNS</h1>
      <h2>投稿</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.content}
            ユーザーID: {post.user_id}
          </li>
        ))}
      </ul>
      <h2>こんなユーザーがいます</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
