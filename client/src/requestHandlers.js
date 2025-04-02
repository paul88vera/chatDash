import { getAuth } from "firebase/auth";
// import { postFormValidator } from "./components/RequestForm";
import { addRequest, getRequests } from "./api/requests";
import { redirect } from "react-router";

// requestHandlers.js
export function loader({ request: { signal } }) {
  return getRequests({ signal });
}

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

  return redirect(`/account/${auth.currentUser.id}/requests/${post.id}`);
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
    errors.details = "Required";
  }
  if (clientID === "") {
    errors.clientID = "Required";
  }
  if (firstName === "") {
    errors.firstName = "Required";
  }
  if (lastName === "") {
    errors.lastName = "Required";
  }
  if (companyID === "") {
    errors.companyID = "Required";
  }
  if (companyName === "") {
    errors.companyName = "Required";
  }

  return errors;
}
