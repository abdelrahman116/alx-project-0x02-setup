import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { useState } from "react";

export default function Home() {
  const [Open, setOpen] = useState(false);
  const [cards, setCards] = useState([
    { id: 1, title: "First Card", content: "This is my First card" },
    { id: 2, title: "Firgstt Card", content: "This is my First card" },
  ]);

  const handleSaveCard = (card: {
    id: number;
    title: string;
    content: string;
  }) => {
    setCards([...cards, { ...card, id: cards.length + 1 }]);
    setOpen(false);
  };
  return (
    <div className=" text-white-200">
      <Header />
      <h1>Welcome Home!</h1>
      {cards.map((card) => (
        <Card key={card.id} title={card.title} content={card.content} />
      ))}
      <button onClick={() => setOpen(true)}>Add a New Card</button>
      {PostModal(Open, () => setOpen(false), handleSaveCard)}
    </div>
  );
}
