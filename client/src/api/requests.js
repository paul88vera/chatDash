import { baseApi } from "./base";

// @route    FETCH /requests/
// @desc     Add a request
// @access   Private
export const fetchRequests = async ({ params }) => {
  try {
    return baseApi.get(`/requests`, params).then((res) => res.data);
  } catch (error) {
    console.error("Error getting requests:", error);
    return []; // Return empty array instead of crashing
  }
};

// @route    FETCH /requests/:id
// @desc     Get a request by id
// @access   Private
export const fetchRequest = async (id, { params }) => {
  try {
    return baseApi.get(`/requests/${id}`, params).then((res) => res.data);
  } catch (error) {
    console.error("Error getting request by id:", error);
    return []; // Return empty array instead of crashing
  }
};

// @route    POST /requests/
// @desc     Add a request
// @access   Private
export const addRequest = async (id, { params }) => {
  try {
    return baseApi.post(`/requests/${id}`, params).then((res) => res.data);
  } catch (error) {
    console.error("Error adding a request:", error);
    return []; // Return empty array instead of crashing
  }
};

// @route    PUT /requests/:id
// @desc     Edit request by id
// @access   Private - Public For Now
export function updateRequest(id, data, options) {
  return baseApi.put(`requests/${id}`, data, options).then((res) => res.data);
}
// @route    DELETE /requests/:id
// @desc     Delete request by id
// @access   Private - Public For Now
export function deleteRequest(id) {
  return baseApi.delete(`requests/${id}`, { method: "DELETE" }).then(() => {
    window.location.replace("/dashboard");
  });
}
