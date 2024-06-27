import { Spinner } from "react-bootstrap";
import { useClient } from "../../hooks/useClient";
import ClientCard from "../ClientCard";

export default () => {
  const { data, isLoading } = useClient();

  return (
    <>
     { isLoading ? ( <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> ) : ( <>{data.map(client => <ClientCard key={client.id} client={client}/>)}</> )}
    </>
  );
};
