// import { useLoaderData } from "react-router";

export default function Requests() {
  // const { request } = useLoaderData();

  // const requestFilter = () => {}

  //temp data
  const request = {
    pending: [
      {
        id: 0,
        sub: "12",
        details: "hello",
        am: "am",
        est: "12",
      },
      {
        id: 1,
        sub: "12",
        details: "hello",
        am: "am",
        est: "12",
      },
    ],
  };

  console.log(
    request.pending.map((item) => {
      <div key={item.id}>
        <span className="subDate">{item.sub}fd</span>
        <span className="taskId">{item.id}fd</span>
        <span className="taskDetails">{item.details}fd</span>
        <span className="amInfo">{item.am}fd</span>
        <span className="estTime">{item.est}fd</span>
      </div>;
    })
  );
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "4rem",
            }}>
            <span className="subDate">subfdas</span>
            <span className="taskId">idfdsa</span>
            <span className="taskDetails">detailsfdsa</span>
            <span className="amInfo">amfda</span>
            <span className="estTime">estfdsa</span>
          </div>

          {request.pending.map((item) => {
            <div key={item.id}>
              <span className="subDate">{item.sub}fdas</span>
              <span className="taskId">{item.id}fdsa</span>
              <span className="taskDetails">{item.details}fdsa</span>
              <span className="amInfo">{item.am}fda</span>
              <span className="estTime">{item.est}fdsa</span>
            </div>;
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
