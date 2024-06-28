import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import Client from "../interface/Client";

const URL = 'http://localhost:8080/client';

const fetchClients = async (): AxiosPromise<Client[]> => {
  const response = await axios.get(URL);
  return response.data
}

const addCLient = async (client: Client): AxiosPromise => {
  return await axios.post(URL, client);
}

export function useClient() {
  const query  = useQuery({
    queryKey: ['fetchclients'],
    queryFn: fetchClients    
  })
  
  return query;
}

export function createClient(){

  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: addCLient,
    mutationKey: ['addClient'],
    onSuccess: () => {
      queryClient.invalidateQueries(['fetchclients'])
    }
  })

  return mutate;
}