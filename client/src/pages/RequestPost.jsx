import { useLoaderData } from "react-router";

export default function RequestPost() {
  const request = useLoaderData();
  return (
    <div className="p-4 md:p-8">
      RequestPost{" "}
      {request.map((item) => {
        <div key={item.RequestID} className="bg-slate-800">
          {item.CompanyName}
          {item.CompanyID}
          {item.Details}
        </div>;
      })}
    </div>
  );
}
