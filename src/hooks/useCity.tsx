import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { City } from "../interface/City";

const fetchCities = async (uf: string): AxiosPromise<City[]> => {
  const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
  return response;
}

export function useCity(uf: string | any ){
  const query  = useQuery({
    queryKey: ['fetchcities', uf],
    queryFn: () => fetchCities(uf),    
    enabled: !!uf
  })
  
  return query;
}