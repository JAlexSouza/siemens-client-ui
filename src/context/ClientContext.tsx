import { createContext, useEffect, useState } from "react";

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [ clients, setClients ] = useState<Client[]>();
  const [ clientsFilter, setClientsFilter ] = useState<Client[]>();

  return (
    <ClientContext.Provider value={{ clients, setClients, clientsFilter, setClientsFilter }}>
      {children}
    </ClientContext.Provider>
  )
}