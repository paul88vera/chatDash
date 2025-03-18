import { getAuth } from "firebase/auth";

export default function Account() {
  const client = getAuth();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <h1>Clients</h1>
      <ul>
        {/* {clients.map((client, index) => ( */}
        <li style={{ listStyle: "none" }}>
          {client.currentUser.uid}
          {" _ "}
          <a href={`/account/${client.currentUser.uid}/dashboard`}>
            {client.currentUser.first_name} {client.currentUser.last_name}
          </a>{" "}
          -- {client.currentUser.email}
        </li>
        {/* ))} */}
      </ul>
    </div>
  );
}
