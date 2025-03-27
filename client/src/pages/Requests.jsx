import { useLoaderData } from "react-router";

export default function Requests() {
  const request = useLoaderData();

  return (
    <div>
      <h1>Pending Requests</h1>
      <div className="request_table">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
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
                  alignItems: "center",
                  flexWrap: "nowrap",
                  gap: "4rem",
                }}>
                <span className="subDate">
                  {new Date(item.CreatedDate).toLocaleString()}
                </span>
                <span className="taskId">{item.RequestID}</span>
                <span className="taskDetails">{item.Details}</span>
                {/* TODO: add AMName to schema: 
                <span className="amInfo">{request[item].AMName}fda</span> */}
                <span className="estTime">estimate</span>
              </div>
            );
          })}
        </div>
        <div>
          <div>
            <span>© copyright</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 *
 * Submission Date
 * Task ID
 * Task Details
 * AM Contact Info
 * Estimated Time
 *
 */
// function RequestContainer({ ...item, key }) {
//   return (
//     <div key={key}>
//       <span className="subDate">{item.sub}</span>
//       <span className="taskId">{item.id}</span>
//       <span className="taskDetails">{item.details}</span>
//       <span className="amInfo">{item.am}</span>
//       <span className="estTime">{item.est}</span>
//     </div>
//   );
// }
