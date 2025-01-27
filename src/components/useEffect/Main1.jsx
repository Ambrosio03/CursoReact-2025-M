import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const Main1 = () => {
  const [users, setUsers] = useState([]);

  const fetchDataUsers = async () => {
    try {
      const response = await fetch("http://localhost:5173/src/data/db.json");
      if (!response.ok) {
        throw new Error("Algo salió mal");
      }
      setUsers(await response.json());
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchDataUsers();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default Main1;
