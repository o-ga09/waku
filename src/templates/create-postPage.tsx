import { Form } from "../components/form.js";
import { createPost } from "../lib/actions.js";

function createPostPage() {
  return (
    <div className="container mx-auto p-4 font-IbmPlexSans">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center">投稿</h1>
        <Form createPost={createPost} />
      </div>
    </div>
  );
}

export default createPostPage;
