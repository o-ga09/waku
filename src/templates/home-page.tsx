import { Link } from "waku";

import { Counter } from "../components/counter.js";

type Post = {
  id: number;
  title: string;
  body: string;
};

export const HomePage = async () => {
  const data: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());

  return (
    <div className="flex flex-col">
      <h1>Post</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
