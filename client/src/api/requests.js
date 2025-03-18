import { baseApi } from "./base";
import { getAuth } from "firebase/auth";

const auth = getAuth();

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
export const fetchRequest = async ({ params }) => {
  try {
    return baseApi.get(`/requests/${auth.uid}`, params).then((res) => res.data);
  } catch (error) {
    console.error("Error getting request by id:", error);
    return []; // Return empty array instead of crashing
  }
};

// @route    POST /requests/
// @desc     Add a request
// @access   Private
export const addRequest = async ({ params }) => {
  try {
    return baseApi
      .post(`/requests/${auth.uid}`, params)
      .then((res) => res.data);
  } catch (error) {
    console.error("Error adding a request:", error);
    return []; // Return empty array instead of crashing
  }
};
