import { FormEvent, useState } from "react";

export default function PostModal() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  function handelSubmition(e: FormEvent): void {
    e.preventDefault();
    const newItme = { title, content };
  }
  return (
    <>
      <div>
        <form onSubmit={handelSubmition} className="form">
          <label htmlFor="">
            Title:
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="">
            Content:
            <textarea
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <div className="flex justify-around bg-red-400">
            <button className="bg-red-400">Submit</button>
            <button> Cancel </button>
          </div>
        </form>
      </div>
    </>
  );
}
