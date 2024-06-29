import { Spinner } from "react-bootstrap";
import { getClients, useClient } from "../../hooks/useClient";
import ClientCard from "../ClientCard";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { ClientContext } from "../../context/ClientContext";

const CardsContainer = styled.div`
  width: 860px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 12px;
  margin: auto;
`;

export default () => {

  const { isLoading } = getClients();
  const { clients, clientsFilter } = useContext(ClientContext);

  return (
    <CardsContainer>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          { !!clientsFilter ? (
            clientsFilter.map((clientFilter) => (
              <ClientCard key={clientFilter.id} client={clientFilter} />
            ))
          ) : (
            clients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))
          )}
        </>
      )}
    </CardsContainer>
  );
};
