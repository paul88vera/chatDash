import { useLoaderData } from "react-router";

export default function Requests() {
  const { request } = useLoaderData();

  return (
    <div>
      Requests
      {request}
    </div>
  );
}
