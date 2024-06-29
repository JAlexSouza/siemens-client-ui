import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { updateClient } from "../../hooks/useClient";

export default ({ show, handleClose, id }) => {

  const [ name, setName ] = useState<string>();
  const { mutate, isError } = updateClient();

  const [validated, setValidated] = useState(false);

  const alterClientName = () => {
    const formFulled = !!name

    if (formFulled) {      
      mutate({id: id, name: name})
  
      cleanForm();
      setValidated(false);
      handleClose();

      if(!isError) {
        alert('Nome alterado com sucesso!')
      } else {
        alert('Algo deu errado. Tente novamente')
      }

    } else {
      setValidated(true);
    }
  };

  const cancelCreation = () => {
    cleanForm()
    handleClose()
  }

  const cleanForm = () => {
    setName('')
  }

  return (
    <Modal show={show} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Alterar nome</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form >
        <Form.Group
            hasValidation
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Novo nome</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Insira um nome
            </Form.Control.Feedback>
          </Form.Group>          
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => cancelCreation()}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={() => alterClientName()}>
          Alterar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
