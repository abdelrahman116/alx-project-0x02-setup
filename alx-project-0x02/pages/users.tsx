import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
type User = {
  userId: number;
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
  };
};
export default function Users() {
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    async function fetchData() {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const fetchedData: User[] = await result.json();
      setData(fetchedData);
    }
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      {data.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          address={user.address.street}
        />
      ))}
    </div>
  );
}
