import React, { useEffect, useState } from "react";

function User() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data.map((user) => (
        <>
          <p key={user.name}>{user.name}</p>
          <hr />
          <p key={user.email}>{user.email}</p>
        </>
      ))}
    </div>
  );
}

export default User;
