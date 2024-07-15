"use client";
export default function PostButton() {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white px-2 py-1 rounded-md"
      onClick={() => {
        window.location.href = "/post";
      }}
    >
      投稿
    </button>
  );
}
