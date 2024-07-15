import { Link } from "waku";
import { GridBackground } from "../components/background/background.js";

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
    <div>
      <GridBackground />
    </div>
  );
};
