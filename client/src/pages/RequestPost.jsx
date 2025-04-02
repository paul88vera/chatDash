import { useLoaderData } from "react-router";

export default function RequestPost() {
  const request = useLoaderData();
  return (
    <div>
      RequestPost{" "}
      {request.map((item) => {
        <div key={item.RequestID}>
          {item.CompanyName}
          {item.CompanyID}
          {item.Details}
        </div>;
      })}
    </div>
  );
}
