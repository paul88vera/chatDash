import { baseApi } from "./base";

// @route    FETCH /requests/
// @desc     Get all requests
// @access   Private
export function getRequests(options) {
  return baseApi.get(`/requests`, options).then((res) => res.data);
}

// @route    FETCH /requests/:id
// @desc     Get a request by id
// @access   Private
export function getRequest(id, options) {
  return baseApi.get(`/requests/${id}`, options).then((res) => res.data);
}

// @route    POST /requests/
// @desc     Add a request
// @access   Private
export function addRequest(data, options) {
  return baseApi.post(`/requests`, data, options).then((res) => res.data);
}

// @route    PUT /requests/:id
// @desc     Edit request by id
// @access   Private
export function updateRequest(id, data, options) {
  return baseApi.put(`/requests/${id}`, data, options).then((res) => res.data);
}
// @route    DELETE /requests/:id
// @desc     Delete request by id
// @access   Private
export function deleteRequest(id) {
  return baseApi.delete(`/requests/${id}`, { method: "DELETE" }).then(() => {
    window.location.replace("/dashboard");
  });
}
