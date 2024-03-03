export const Form = ({
  createPost,
}: {
  createPost: (formData: FormData) => Promise<void>;
}) => {
  return (
    <form action={createPost}>
      <div className="mt-4">
        <label htmlFor="title" className="block">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="body" className="block">
          Body
        </label>
        <textarea
          name="body"
          id="body"
          className="w-full border border-gray-300 rounded-md p-2"
        ></textarea>
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
      <button
        type="reset"
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Reset
      </button>
    </form>
  );
};
