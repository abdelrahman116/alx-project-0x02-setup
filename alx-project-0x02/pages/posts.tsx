import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import React, { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Posts() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("https:/jsonplaceholder.typicode.com/posts");
      const fetchedData: Post[] = await result.json();
      setData(fetchedData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {data.map((dat: Post) => (
        <PostCard
          key={dat.id}
          userId={dat.userId}
          title={dat.title}
          content={dat.body}
        />
      ))}
    </div>
  );
}
