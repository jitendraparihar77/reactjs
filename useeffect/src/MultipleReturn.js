import React, { useEffect, useState } from "react";

function MultipleReturn() {
  const [Users, setUsers] = useState([]);
  const [Loading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setUsers(data);
        setIsloading(false);
      } catch (error) {
        setError(error);
        setIsloading(false);
      }
    }

    fetchUsers();
  }, []);

  if (Loading) {
    return <p>Loading.....</p>;
  }

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <div>
      <h1>multipleReturn</h1>

      <ul>
        {Users.map((user) => {
          return <li key={user.id}>{user.login}</li>;
        })}
      </ul>
    </div>
  );
}

export default MultipleReturn;
