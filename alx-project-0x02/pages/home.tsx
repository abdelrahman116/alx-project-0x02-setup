import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-black text-white-200">
      <h1>Welcome Home!</h1>
      <Card title="First Card" content="This is my First card" />
      <Card title="Firgstt Card" content="This is my First card" />

      <button onClick={() => setIsOpen(true)}>Add a New Card</button>
      {isOpen && <PostModal />}
    </div>
  );
}
