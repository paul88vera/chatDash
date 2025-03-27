// Clients
import { fetchClients, fetchClientById } from "./api/client";

export const clientsLoader = async () => {
  return (await fetchClients()) ?? [];
};

export const clientLoader = async ({ params }) => {
  return (await fetchClientById({ params })) ?? [];
};

// Requests
import { fetchRequests, fetchRequest, addRequest } from "./api/requests";

export const requestsLoader = async () => {
  return (await fetchRequest()) ?? [];
};

export const requestLoader = async ({ params }) => {
  return (await fetchRequests({ params })) ?? [];
};

export const addRequestLoader = async ({ params }) => {
  return (await addRequest({ params })) ?? [];
};
