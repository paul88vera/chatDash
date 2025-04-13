import { IoIosCloseCircle } from "react-icons/io";
import { createPortal } from "react-dom";
import { Form, useLoaderData } from "react-router";
import FormGroup from "./FormGroup";
import { useEffect } from "react";

export default function RequestForm({
  close,
  isSubmitting,
  errors = {},
  // defaultValues = {},
}) {
  const client = useLoaderData();
  const data = client.client;

  // const filteredData = data

  useEffect(() => {
    console.log(data);
  }, [data]);

  console.log(data)

  return createPortal(
    <div
      id="requestForm_Container"
      className="fixed bg-[#020618af] h-full w-full top-0 left-0 flex flex-col justify-center align-middle items-center p-4 md:p-8">
      <Form
        id="requestForm_form"
        method="post"
        className="flex flex-col gap-2 justify-between p-8 bg-purple-950 h-9/12 w-full md:w-6/12 rounded-lg">
        <div>
          <button type="button" onClick={close} className="cursor-pointer">
            <IoIosCloseCircle className="hover:fill-slate-400 text-2xl" />
          </button>
        </div>
        <h2 className="font-bold text-5xl">Enter Your Edit Details</h2>
        <div className="flex flex-row gap-2 flex-wrap">
          <FormGroup
            classStyle={"flex flex-row gap-4 w-full pb-4"}
            errorMessage={[
              errors.data.AMName,
              errors.data.CompanyID,
              errors.data.CompanyName,
            ]}>
            <label htmlFor="AMName">Account Manager: </label>
            <input
              type="text"
              name="AMName"
              id="AMName"
              className="border-0 rounded-md w-1/5 border-slate-900"
              defaultValue={data.AMName}
            />
            <label htmlFor="CompanyID" className="z-0 absolute opacity-0">
              Company ID:{" "}
            </label>
            <input
              type="text"
              name="CompanyID"
              id="CompanyID"
              className="border-0 rounded-md w-1/5 border-slate-900 z-0 absolute opacity-0"
              defaultValue={data.CompanyID}
            />
            <label htmlFor="CompanyName" className="z-0 absolute opacity-0">
              Company Name:{" "}
            </label>
            <input
              type="text"
              name="CompanyName"
              id="CompanyName"
              className="border-0 rounded-md w-1/5 border-slate-900 z-0 absolute opacity-0"
              defaultValue={data.CompanyName}
            />
          </FormGroup>
          <FormGroup
            errorMessage={[errors.data.FirstName, errors.data.LastName]}
            classStyle={"flex flex-row gap-4 w-full"}>
            <label htmlFor="FirstName">
              First Name:
              <input
                type="text"
                name="FirstName"
                id="FirstName"
                className="border-1 rounded-md w-full border-slate-900"
                defaultValue={data.FirstName}
              />
            </label>
            <label htmlFor="LastName">
              Last Name:
              <input
                type="text"
                name="LastName"
                id="LastName"
                className="border-1 rounded-md w-full border-slate-900"
                defaultValue={data.LastName}
              />
            </label>
          </FormGroup>
          <FormGroup errorMessage={errors.data.details}>
            <div className="flex flex-col gap-2">
              <label>Details: </label>
              <textarea
                type="text"
                name="Details"
                id="Details"
                className="border-1 p-2 rounded-md w-full h-50"
                placeholder="Provide the page URL where you need the edit."></textarea>
            </div>
          </FormGroup>
        </div>
        <div className="form-btn-container flex flex-row gap-8 justify-between">
          <button
            type="button"
            className="cursor-pointer hover:text-slate-400"
            onClick={close}>
            Cancel
          </button>
          <button
            type="submit"
            className="cursor-pointer hover:text-slate-400"
            disabled={isSubmitting}>
            {isSubmitting ? "Loading" : "Save"}
          </button>
        </div>
      </Form>
    </div>,
    document.querySelector("#requestContainer")
  );
}
