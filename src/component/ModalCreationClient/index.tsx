import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useCity } from "../../hooks/useCity";
import { states } from "../../utils/States";
import { createClient } from "../../hooks/useClient";

export default ({ show, handleClose }) => {
  const [name, setName] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [birthDay, setBirthDay] = useState<Date>();
  const [state, setState] = useState<string>();
  const [city, setCity] = useState<string>();

  const { data, isLoading } = useCity(state);
  const { mutate } = createClient();

  const [validated, setValidated] = useState(false);

  const handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const createNewClient = (event) => {
    const formFulled = !!name && !!gender && !!birthDay && !!state && !!city;

    if (formFulled) {      
      mutate({
        name,
        gender,
        birthDay,
        address: {
          state,
          city
        }
      })
      cleanForm();
      setValidated(false);
      handleClose();
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
    setGender('')
    setBirthDay(null)
    setState('')
    setCity('')
  }

  return (
    <Modal show={show} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Novo cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="form-create-client" validated={validated}>
          <Form.Group
            hasValidation
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Nome</Form.Label>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Data de nascimento</Form.Label>
              <Form.Control
                type="date"
                style={{ width: "150px" }}
                value={birthDay}
                onChange={(event) => setBirthDay(event.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Informe a data de nascimento.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <div>
                <Form.Check
                  type="radio"
                  label="Homem"
                  name="gender"
                  value="MALE"
                  checked={gender === "MALE"}
                  onChange={(event) => setGender(event.target.value)}
                  inline
                  required
                />
                <Form.Check
                  type="radio"
                  label="Mulher"
                  name="gender"
                  value="FEMALE"
                  checked={gender === "FEMALE"}
                  onChange={(event) => setGender(event.target.value)}
                  inline
                  required
                />
              </div>
            </Form.Group>
          </div>
          <br />
          <Form.Group>
            <div>
              <Form.Label>Estado</Form.Label>
              <Form.Control
                as="select"
                value={state}
                onChange={(event) => setState(event.target.value)}
                required
              >
                <option value="">Selecione o estado</option>
                {states.map((state) => (
                  <option key={state.acronym} value={state.acronym}>
                    {state.name}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Informe a data de nascimento.
              </Form.Control.Feedback>
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                as="select"
                onChange={(event) => setCity(event.target.value)}
                disabled={!state || isLoading}
                required
              >
                <option value="">Selecione a cidade</option>
                {data?.data.map((city) => (
                  <option key={city.id} value={city.nome}>
                    {city.nome}
                  </option>
                ))}
              </Form.Control>
                <Form.Control.Feedback type="invalid" >
                  Informe a data de nascimento.
                </Form.Control.Feedback>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => cancelCreation() }>
          Cancelar
        </Button>
        <Button variant="primary" onClick={() => createNewClient()}>
          Adicionar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
