import {
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { MdNoteAdd } from "react-icons/md";
import { useState } from "react";
import RequestForm from "../components/RequestForm";
import { getAuth } from "firebase/auth";

export default function Requests() {
  const request = useLoaderData();
  const [modal, setModal] = useState(false);
  const errors = useActionData();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";
  const auth = getAuth();

  const toggleRequestForm = () => {
    setModal((current) => !current);
  };

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div>
      <div className="p-4 md:p-8">
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
          <div className="flex flex-row justify-between bg-purple-950 py-2 px-4 rounded-tl-md rounded-tr-md gap-2">
            <span className="subDate w-[10%]">Sub Date</span>
            <span className="taskId  w-[10%] text-center">Entry ID</span>
            <span className="taskDetails w-[60%]">Task Details</span>
            <span className="amInfo w-[10%]">AM</span>
            <span className="estTime w-[10%] text-end">Est Due</span>
          </div>
          <div>
            {request.map((item, index) => {
              return (
                <Link
                  to={`/account/${auth.currentUser.uid}/requests/${item.RequestID}`}
                  key={index}
                  className="flex flex-row justify-between bg-slate-850 py-2 px-4 gap-2 bg-slate-800">
                  <span className="subDate w-[10%]">
                    {new Date(item.CreatedDate).toLocaleString(
                      "en-US",
                      options
                    )}
                  </span>
                  <span className="taskId w-[10%] text-center">
                    {item.RequestID}
                  </span>
                  <span className="taskDetails w-[60%]">{item.Details}</span>
                  <span className="amInfo w-[10%]">{item.AMName}</span>
                  <span className="estTime w-[10%] text-end">
                    {new Date(item.CreatedDate).toLocaleString(
                      "en-US",
                      options
                    )}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
