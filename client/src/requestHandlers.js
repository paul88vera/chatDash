import { getAuth } from "firebase/auth";
import { addRequest, getRequest, getRequests } from "./api/requests";
import { getClientById, getClients } from "./api/client";
import { redirect } from "react-router";

// requestHandlers.js
// For Requests Page
export async function RequestLoader({ request: { signal } }) {
  return (await getRequests({ signal })) || [];
}

// For Request Item Page
export async function RequestSingleLoader({
  request: { signal },
  params: { id },
}) {
  const requestId = parseInt(id, 10);
  // quick number check
  if (isNaN(requestId)) {
    throw new Response("Invalid request ID", { status: 400 });
  }

  return (await getRequest(requestId, { signal })) || [];
}

// For Navigation Auth Check
export async function ClientLoader({ request: { signal }, params: { id } }) {
  return (await getClientById(id, { signal })) || [];
}

// Client & Request Loader
export async function AllLoader({ request: { signal } }) {
  const client = (await getClients({ signal })) || [];
  const request = (await getRequests({ signal })) || [];
  return { client, request };
}

// To receive form data for Request Item
export async function action({ request }) {
  const auth = getAuth();
  const formData = await request.formData();
  const details = formData.get("Details");
  const clientID = parseInt(formData.get("ClientID"), 10);
  const am = formData.get("AMName");

  const errors = postFormValidator({
    details,
    clientID,
    am,
  });

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const post = await addRequest(
    {
      details,
      clientID: parseInt(clientID, 10),
      am,
    },
    { signal: request.signal }
  );

  return redirect(`/account/${auth.currentUser.uid}/requests/${post.id}`);
}

export function postFormValidator({ details, clientID, am }) {
  const errors = {};

  if (details === "") {
    errors.details = "*Required";
  }
  if (clientID === "") {
    errors.clientID = "*Required";
  }
  if (!clientID || isNaN(parseInt(clientID))) {
    errors.clientID = "*Required and must be a number";
  }
  if (am === "") {
    errors.am = "*Required";
  }

  return errors;
}
