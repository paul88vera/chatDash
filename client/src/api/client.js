import { baseApi } from "./base";

// @route    GET /clients
// @desc     Fetch all clients
// @access   Private
export function fetchClients(options) {
  return baseApi.get("/clients", options).then((res) => res.data);
}

// @route    GET /clients/:id
// @desc     Fetch single clients
// @access   Private
export function fetchClientById(id) {
  return baseApi.get(`/clients/${id}`).then((res) => res.data);
}
