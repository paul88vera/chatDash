import { baseApi } from "./base";

// @route    GET /clients
// @desc     Fetch all clients
// @access   Private
export const fetchClients = async (options) => {
  try {
    return baseApi.get("/clients", options).then((res) => res.data);
  } catch (error) {
    console.error("Error fetching clients:", error);
    return []; // Return empty array instead of crashing
  }
};

// @route    GET /clients/:id
// @desc     Fetch single clients
// @access   Private
export const fetchClientById = async (id) => {
  try {
    return baseApi.get(`/clients/${id}`).then((res) => res.data);
  } catch (error) {
    console.error("Error fetching client:", error);
    return []; // Return empty array instead of crashing
  }
};
