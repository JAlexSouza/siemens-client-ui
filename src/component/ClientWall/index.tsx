import { Spinner } from "react-bootstrap";
import { useClient } from "../../hooks/useClient";
import ClientCard from "../ClientCard";
import styled from "styled-components";

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
  const { data, isLoading } = useClient();

  return (
    <CardsContainer>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          {data.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </>
      )}
    </CardsContainer>
  );
};
