// Clients
import { fetchClients, fetchClientById } from "./api/client";

export const clientsLoader = async () => {
  return (await fetchClients()) ?? [];
};

export const clientLoader = async ({ params }) => {
  return (await fetchClientById(params.id, { params })) ?? [];
};

// Requests
import {
  fetchRequests,
  fetchRequest,
  addRequest,
  updateRequest,
  deleteRequest,
} from "./api/requests";

export const requestsLoader = async () => {
  return (await fetchRequests()) ?? [];
};

export const requestLoader = async ({ params }) => {
  return (await fetchRequest(params.id)) ?? [];
};

export const addRequestLoader = async ({ params }) => {
  return (await addRequest(params.id, { params })) ?? [];
};

export const putRequestLoader = async ({ params }) => {
  return (await updateRequest(params.id, { params })) ?? [];
};

export const deleteRequestLoader = async ({ params }) => {
  return (await deleteRequest(params.id)) ?? [];
};

// Combined Loader for Requests Page
export const combinedRequestsLoader = async ({ params }) => {
  const requestsData = await requestsLoader();
  const requestData = await requestLoader({ params });
  const addRequestData = await addRequestLoader({ params });
  const updateRequestData = await putRequestLoader({ params });
  const deleteRequestData = await deleteRequestLoader({ params });

  return {
    requestData,
    requestsData,
    addRequestData,
    updateRequestData,
    deleteRequestData,
  };
};
