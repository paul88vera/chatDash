import { useLoaderData } from "react-router-dom";

export default function Account() {
  const clients = useLoaderData();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <h1>Clients</h1>
      <ul>
        {clients.map((client, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            {client.uid}
            {" _ "}
            <a href={`/account/${client.uid}/dashboard`}>
              {client.first_name} {client.last_name}
            </a>{" "}
            -- {client.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
