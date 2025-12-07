import React from "react";
import { PostProps } from "@/interfaces";
export default function PostCard(props: PostProps) {
  return (
    <div>
      <h1>${props.title}</h1>
      <p>${props.content}</p>
    </div>
  );
}
