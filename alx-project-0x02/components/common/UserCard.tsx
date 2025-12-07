import { UserProps } from "@/interfaces";
import React from "react";

export default function UserCard(props: UserProps) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.email}</h3>
      <h4>{props.address}</h4>
    </div>
  );
}
