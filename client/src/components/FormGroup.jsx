/* eslint-disable react/prop-types */
export default function FormGroup({ children, errorMessage, classStyle }) {
  return (
    <div
      className={`form-group ${
        errorMessage != null ? "error" : ""
      } flex flex-col gap-2 w-full ${classStyle}`}>
      {children}
      {errorMessage !== null && (
        <div className="error-message text-red-500 bg-transparent">
          {errorMessage}
        </div>
      )}
    </div>
  );
}
