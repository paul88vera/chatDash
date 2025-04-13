import { IoIosCloseCircle } from "react-icons/io";
import { createPortal } from "react-dom";
import { Form, useLoaderData } from "react-router";
import FormGroup from "./FormGroup";
import { useEffect, useState } from "react";

export default function RequestForm({
  close,
  isSubmitting,
  errors = {},
  // defaultValues = {},
}) {
  const { request, client } = useLoaderData();
  const clientData = client[0];
  const requestData = request[0];
  const [cid, setCid] = useState(
    parseInt(clientData?.ClientID, 10) ?? parseInt("", 10)
  );
  const [compId, setCompId] = useState(
    parseInt(clientData?.CompanyID, 10) ?? parseInt("", 10)
  );

  useEffect(() => {
    if (!clientData || !requestData) {
      console.log("no data");
    }
  }, [clientData, requestData]);

  return createPortal(
    <div
      id="requestForm_Container"
      className="fixed bg-[#020618af] h-full w-full top-0 left-0 flex flex-col justify-center align-middle items-center p-4 md:p-8">
      <Form
        id="requestForm_form"
        method="post"
        className="flex flex-col gap-2 justify-between p-8 bg-purple-950 w-full md:w-9/12 rounded-lg">
        <div>
          <button type="button" onClick={close} className="cursor-pointer">
            <IoIosCloseCircle className="hover:fill-slate-400 text-2xl" />
          </button>
        </div>
        <h2 className="font-bold text-5xl">Enter Your Edit Details</h2>
        <div className="flex flex-row gap-2 flex-wrap">
          <FormGroup
            classStyle={"flex flex-row gap-4 w-full pb-4 "}
            errorMessage={[
              errors.AMName,
              errors.CompanyID,
              errors.CompanyName,
            ]}>
            <label htmlFor="AMName">Account Manager: </label>
            <input
              type="text"
              name="AMName"
              id="AMName"
              className="border-0 rounded-md w-1/5 border-slate-900"
              value={requestData.AMName}
              onChange={(e) => {
                e.target.value;
              }}
            />
            <label htmlFor="ClientID" className=" ">
              ClientID:{" "}
            </label>
            <input
              type="number"
              name="ClientID"
              id="ClientID"
              className="border-0 rounded-md w-1/5 border-slate-900  "
              value={cid}
              onChange={(e) => {
                setCid(e.target.value);
              }}
            />
            <label htmlFor="CompanyID" className=" ">
              Company ID:{" "}
            </label>
            <input
              type="number"
              name="CompanyID"
              id="CompanyID"
              className="border-0 rounded-md w-1/5 border-slate-900  "
              value={compId}
              onChange={(e) => {
                setCompId(e.target.value);
              }}
            />
            {/* <label htmlFor="CompanyName" className="hidden ">
              Company Name:{" "}
            </label>
            <input
              type="text"
              name="CompanyName"
              id="CompanyName"
              className="border-0 rounded-md w-1/5 border-slate-900  hidden"
              value={requestData.CompanyName}
              onChange={(e) => {
                e.target.value;
              }}
            /> */}
          </FormGroup>
          {/* <FormGroup
            errorMessage={[errors.FirstName, errors.LastName]}
            classStyle={"flex flex-row gap-4 w-full hidden"}>
            <label htmlFor="FirstName">
              First Name:
              <input
                type="text"
                name="FirstName"
                id="FirstName"
                className=""
                value={requestData.FirstName}
                onChange={(e) => {
                  e.target.value;
                }}
              />
            </label>
            <label htmlFor="LastName">
              Last Name:
              <input
                type="text"
                name="LastName"
                id="LastName"
                className=""
                onChange={(e) => {
                  e.target.value;
                }}
                value={requestData.LastName}
              />
            </label>
          </FormGroup> */}
          <FormGroup errorMessage={errors.details}>
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
