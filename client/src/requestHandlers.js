import { getAuth } from "firebase/auth";
import { addRequest, getRequest, getRequests } from "./api/requests";
import { getClientById } from "./api/client";
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
  return (await getRequest(id, { signal })) || [];
}

// For Navigation Auth Check
export async function ClientLoader({ request: { signal }, params: { id } }) {
  return (await getClientById(id, { signal })) || [];
}

// To receive form data for Request Item
export async function action({ request }) {
  const auth = getAuth();
  const formData = await request.formData();
  const details = formData.get("Details");
  const clientID = formData.get("ClientID");
  const firstName = formData.get("FirstName");
  const lastName = formData.get("LastName");
  const companyID = formData.get("CompanyID");
  const companyName = formData.get("CompanyName");

  const errors = postFormValidator({
    details,
    clientID,
    firstName,
    lastName,
    companyID,
    companyName,
  });

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const post = await addRequest(
    { details, clientID, firstName, lastName, companyID, companyName },
    { signal: request.signal }
  );

  return redirect(`/account/${auth.currentUser.uid}/requests/${post.id}`);
}

export function postFormValidator({
  details,
  clientID,
  firstName,
  lastName,
  companyID,
  companyName,
}) {
  const errors = {};

  if (details === "") {
    errors.details = "*Required";
  }
  if (clientID === "") {
    errors.clientID = "*Required";
  }
  if (firstName === "") {
    errors.firstName = "*Required";
  }
  if (lastName === "") {
    errors.lastName = "*Required";
  }
  if (companyID === "") {
    errors.companyID = "*Required";
  }
  if (companyName === "") {
    errors.companyName = "*Required";
  }

  return errors;
}
