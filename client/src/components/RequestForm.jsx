import { IoIosCloseCircle } from "react-icons/io";
import { createPortal } from "react-dom";
import { Form } from "react-router";
import FormGroup from "./FormGroup";

export default function RequestForm({
  close,
  isSubmitting,
  errors = {},
  defaultValues = {},
}) {
  return createPortal(
    <div id="requestForm_Container">
      <Form id="requestForm_form" method="post">
        <div>
          <button onClick={close}>
            <IoIosCloseCircle />
          </button>
        </div>
        <h2>Enter Your Edit Details</h2>
        <div>
          <FormGroup
            errorMessage={[
              errors.AMName,
              errors.CompanyID,
              errors.CompanyName,
              errors.FirstName,
              errors.LastName,
            ]}>
            <input
              type="text"
              name="AMName"
              id="AMName"
              defaultValue={defaultValues.AMName}
            />
            <input
              type="text"
              name="CompanyName"
              id="CompanyName"
              defaultValue={defaultValues.CompanyName}
            />
            <input
              type="text"
              name="FirstName"
              id="FirstName"
              defaultValue={defaultValues.FirstName}
            />
            <input
              type="text"
              name="LastName"
              id="LastName"
              defaultValue={defaultValues.LastName}
            />
            <input
              type="text"
              name="CompanyID"
              id="CompanyID"
              defaultValue={defaultValues.CompanyID}
            />
          </FormGroup>
          <FormGroup errorMessage={errors.details}>
            <label>Details: </label>
            <textarea
              type="text"
              name="Details"
              id="Details"
              placeholder="Provide the page URL where you need the edit."></textarea>
          </FormGroup>
        </div>
        <div className="form-btn-container">
          <button className="btn form-btn" onClick={close}>
            Cancel
          </button>
          <button className="btn submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Loading" : "Save"}
          </button>
        </div>
      </Form>
    </div>,
    document.querySelector("#requestContainer")
  );
}

// export function postFormValidator({
//   details,
//   clientID,
//   firstName,
//   lastName,
//   companyID,
//   companyName,
// }) {
//   const errors = {};

//   if (details === "") {
//     errors.details = "Required";
//   }
//   if (clientID === "") {
//     errors.clientID = "Required";
//   }
//   if (firstName === "") {
//     errors.firstName = "Required";
//   }
//   if (lastName === "") {
//     errors.lastName = "Required";
//   }
//   if (companyID === "") {
//     errors.companyID = "Required";
//   }
//   if (companyName === "") {
//     errors.companyName = "Required";
//   }

//   return errors;
// }
