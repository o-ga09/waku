async function PostPage({ id }: { id: string }) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());
  return (
    <div>
      <title>{data.title}</title>
      <meta name="description" content={data.body.slice(0, 100)} />
      <h1 className="text-3xl font-bold underline">Post: {data.title}</h1>
      <p className="text-xl">{data.body}</p>
    </div>
  );
}

export default PostPage;
