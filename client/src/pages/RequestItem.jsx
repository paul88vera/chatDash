import { useLoaderData, useParams } from "react-router";

export default function RequestItem() {
  const requests = useLoaderData();
  const { id } = useParams();
  const request = requests.find((r) => r.RequestID === parseInt(id));

  // data check by RequestID
  if (!request) {
    return <div className="p-4 text-red-500">Request with {id} not found.</div>;
  }

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-2">
        Request ID: {request.RequestID}
      </h2>
      <p>
        <strong>Created:</strong>{" "}
        {new Date(request.CreatedDate).toLocaleString()}
      </p>
      <p>
        <strong>Account Manager:</strong> {request.AMName}
      </p>
      <p>
        <strong>Details:</strong> {request.Details}
      </p>
      <p>
        <strong>ClientID:</strong> {request.ClientID}
      </p>
    </div>
  );
}
