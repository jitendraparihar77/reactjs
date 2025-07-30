import React, { useEffect, useState } from "react";

function FetchApi() {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((Response) => Response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h1>FetchApi</h1>
      <ul>
        {Users.map((user) => {
          return (
            <li key={user.id}>
              <a href={user.html_url}> {user.login}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FetchApi;
