import { fetchClients, fetchClientById } from "./api/client";

export const clientsLoader = async () => {
  return (await fetchClients()) ?? [];
};

export const clientLoader = async ({ params }) => {
  return (await fetchClientById({ params })) ?? [];
};
