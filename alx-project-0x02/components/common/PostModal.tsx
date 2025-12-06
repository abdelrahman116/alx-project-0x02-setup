import { FormEvent, useState } from "react";

export default function PostModal(
  isOpen: boolean,
  onClose: () => void,
  onSave: (card: { id: number; title: string; content: string }) => void
) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  if (!isOpen) return null;
  function handelSubmition(e: FormEvent): void {
    e.preventDefault();
    if (!title || !content) {
      alert("Fill all textboxs!");
      return;
    }

    const newCard = {
      id: Date.now(),
      title: title,
      content: content,
    };
    onSave(newCard);
    setTitle("");
    setContent("");
    onClose();
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
          <div className="flex justify-end gap-15">
            <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
              {" "}
              Cancel{" "}
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
