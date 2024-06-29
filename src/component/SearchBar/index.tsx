import { useContext, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { getClientsByName } from "../../hooks/useClient";
import axios from "axios";
import { ClientContext } from "../../context/ClientContext";

export default ({ search, setSearch }) => {
  const URL = "http://localhost:8080/client";

  const [typeSearch, setTypeSearch] = useState<string>("BY_NAME");
  const { setClientsFilter } = useContext(ClientContext);

  const goSearch = async () => {
    if (!!search) {
      if (typeSearch === "BY_NAME") {
        const responseByName = await axios.get(`${URL}/names?name=${search}`);
        setClientsFilter(responseByName?.data);
      } else {
        const responseByID = await axios.get(`${URL}/${search}`);
        setClientsFilter(responseByID?.data);
      }
    }
  };

  return (
    <>
      <InputGroup className="mb-3" style={{ width: "750px" }}>
        <Form.Select
          onChange={(event) => setTypeSearch(event.target.value)}
          size="sm"
          style={{ width: "15%" }}
        >
          <option selected value="BY_NAME">
            Por nome
          </option>
          <option value="BY_ID">Por ID</option>
        </Form.Select>
        <Form.Control
          style={{ width: "73%" }}
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          onChange={(event) => setSearch(event.target.value)}
          value={search}
        />
        <Button
          onClick={() => goSearch()}
          variant="outline-secondary"
          id="button-addon2"
          style={{ width: "12%" }}
        >
          Buscar
        </Button>
      </InputGroup>
    </>
  );
};
