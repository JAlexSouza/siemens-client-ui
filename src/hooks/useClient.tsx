import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import Client from "../interface/Client";

const fetchClients = async (): AxiosPromise<Client[]> => {
  const response = await axios.get('http://localhost:8080/client');
  return response.data
}

export function useClient() {
  const query  = useQuery({
    queryKey: ['fetchclients'],
    queryFn: fetchClients    
  })
  
  return query;
}