import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import Client from "../interface/Client";
import { useContext } from "react";
import { ClientContext } from "../context/ClientContext";

const URL = 'http://localhost:8080/client';

const fetchClients = async (): AxiosPromise<Client[]> => {
  const response = await axios.get(URL);
  return response.data
}

const addCLient = async (client: Client): AxiosPromise => {
  return await axios.post(URL, client);
}

const deleteClient = async (id: number): AxiosPromise => {
  console.log(`${URL}/${id}`)
  return await axios.delete(`${URL}/${id}`);
}

const alterClient = async (client: Client): AxiosPromise => {
  return await axios.patch(URL, client);
}

const clientsByName = async (name: string): AxiosPromise<Client[]> => {
  const response = await axios.get(`${URL}/names?name=${name}`);
  return response.data
}

const getClientByID = async (id: number): AxiosPromise<Client> => {
  const response = await axios.get(`${URL}/${id}`);
  return response.data
}


export function getClients() {

  const { setClients } = useContext(ClientContext);

  const query  = useQuery({
    queryKey: ['fetchclients'],
    queryFn: fetchClients    
  })
  
  setClients(query.data)
  return query;
}

export function createClient(){

  const queryClient = useQueryClient();

  const { isPending, mutate, isError } = useMutation({
    mutationFn: addCLient,
    mutationKey: ['addClient'],
    onSuccess: () => {
      queryClient.invalidateQueries(['fetchclients'])
    }
  })

  return { mutate , isPending, isError };
}

export function removeClient(){
  const queryClient = useQueryClient();

  const { mutate, isError, isPending } = useMutation({
    mutationFn: deleteClient,
    mutationKey: ['deleteClient'],
    onSuccess: () => {
      queryClient.invalidateQueries(['fetchclients'])
    }
  })

  return { mutate, isError, isPending };

}

export function updateClient(){

  const queryClient = useQueryClient();

  const { mutate, isError } = useMutation({
    mutationFn: alterClient,
    mutationKey: ['alterClient'],
    onSuccess: () => {
      queryClient.invalidateQueries(['fetchclients'])
    }
  })

  return { mutate, isError };
}