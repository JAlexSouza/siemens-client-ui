import styled from "styled-components";
import SearchBar from "../SearchBar";
import { IoPersonAddSharp } from "react-icons/io5";
import { LuPaintbrush } from "react-icons/lu";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { states } from "../../utils/States";
import { useCity } from "../../hooks/useCity";

const MainBarStyled = styled.div`
  margin: auto;
  width: 860px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 40px;
`;

const MainButtons = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 10px;
`;

const MainTitle = styled.h1`
  text-align: center;
  margin: 30px;
`;

export default () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [gender, setGender] = useState("");

  const [state, setState] = useState<string>();
  const { data, isLoading } = useCity(state);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  return (
    <>
      <MainTitle>Siemens</MainTitle>
      <MainBarStyled>
        <MainButtons>
          <IoPersonAddSharp onClick={handleShow} size={20} />
          <LuPaintbrush size={20} />
        </MainButtons>
        <SearchBar />
      </MainBarStyled>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
              <Form.Group className="mb-3">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control type="date" style={{ width: "150px" }} />
              </Form.Group>
              <Form.Group>
                <div>
                  <Form.Check
                    type="radio"
                    label="Homem"
                    name="gender"
                    value="MALE"
                    checked={gender === "MALE"}
                    onChange={handleChange}
                    inline
                  />
                  <Form.Check
                    type="radio"
                    label="Mulher"
                    name="gender"
                    value="FEMALE"
                    checked={gender === "FEMALE"}
                    onChange={handleChange}
                    inline
                  />
                </div>
              </Form.Group>
            </div>
            <br/>
            <Form.Group>
              <div>
                <Form.Label>Estado</Form.Label>
                <Form.Control
                  as="select"
                  value={state}
                  onChange={(event) => setState(event.target.value)}
                >
                  <option value="">Selecione o estado</option>
                  {states.map((state) => (
                    <option key={state.acronym} value={state.acronym}>
                      {state.name}
                    </option>
                  ))}
                </Form.Control>
                <Form.Label>Cidade</Form.Label>
                <Form.Control as="select" disabled={ !state || isLoading} >
                  {data?.data.map((city) => (
                    <option key={city.id} value={city.nome}>
                      {city.nome}
                    </option>
                  ))}
                </Form.Control>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
