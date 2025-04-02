import { useActionData, useLoaderData, useNavigation } from "react-router-dom";
import { MdNoteAdd } from "react-icons/md";
import { useState } from "react";
import RequestForm from "../components/RequestForm";
import { loader, action } from "../requestHandlers";
import Nav from "../components/Nav";

export default function Requests() {
  const request = useLoaderData();
  const [modal, setModal] = useState(false);
  const errors = useActionData();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";

  const toggleRequestForm = () => {
    setModal((current) => !current);
  };

  return (
    <div>
      <Nav />
      <h1>Pending Requests</h1>
      <button onClick={toggleRequestForm}>
        <MdNoteAdd />
      </button>
      {modal ? (
        <RequestForm
          close={toggleRequestForm}
          isSubmitting={isSubmitting}
          errors={errors}
        />
      ) : null}
      <div className="request_table">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "start",
            flexWrap: "nowrap",
            textAlign: "left",
            gap: "4rem",
          }}>
          <span className="subDate">Submission Date</span>
          <span className="taskId">Task ID</span>
          <span className="taskDetails">Details</span>
          <span className="amInfo">Account Manager</span>
          <span className="estTime">Estimated Completion Date</span>
        </div>
        <div>
          {request.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "start",
                  flexWrap: "nowrap",
                  textAlign: "left",
                  gap: "4rem",
                }}>
                <span className="subDate">
                  {new Date(item.CreatedDate).toLocaleString()}
                </span>
                <span className="taskId">{item.RequestID}</span>
                <span className="taskDetails">{item.Details}</span>
                <span className="amInfo">{item.AMName}</span>
                <span className="estTime">estimate</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const newRequestForm = {
  loader,
  action,
  element: <Requests />,
};
