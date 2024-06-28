import { Button, Form, InputGroup } from "react-bootstrap";

export default () => {
  return (
    <>
      <InputGroup className="mb-3" style={{ width: '750px'}}>
        <Form.Select size="sm" style={{ width: '15%' }}>
          <option selected value="1">
            Por nome
          </option>
          <option value="2">Por ID</option>
        </Form.Select>
        <Form.Control
        style={{ width: '73%'}}
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
        <Button variant="outline-secondary" id="button-addon2" style={{ width: '12%' }}>
          Buscar
        </Button>
      </InputGroup>
    </>
  );
};
