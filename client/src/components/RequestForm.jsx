// import { useLoaderData } from "react-router";
import { IoIosCloseCircle } from "react-icons/io";

import { createPortal } from "react-dom";

export default function RequestForm({ close }) {
  // const request = useLoaderData();

  return createPortal(
    <div id="requestForm_Container">
      <form id="requestForm_form">
        <div>
          <button onClick={close}>
            <IoIosCloseCircle />
          </button>
        </div>
        this is a form!
      </form>
    </div>,
    document.querySelector("#requestContainer")
  );
}
