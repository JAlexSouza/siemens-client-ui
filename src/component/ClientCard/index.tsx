/* eslint-disable react-refresh/only-export-components */
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Client from "../../interface/Client";
import { calculateAge } from "../../utils/calculateAge";
import { Gender } from "../../utils/Gender";
import styled from "styled-components";
import { removeClient } from "../../hooks/useClient";
import { Spinner } from "react-bootstrap";
import ModalAlterClient from "../ModalAlterClient";
import { useState } from "react";

const CardClient = styled.div`
  width: 420px;
  display: flex;
  align-items: center;
  padding-bottom: 15px;
`;

const CardClientButtons = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-around;
`;

export default ({ client }: Client) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { mutate, isError, isPending } = removeClient();

  const rmvClient = () => {
    mutate(client.id);

    if (isError) {
      alert("Algo deu errado. Tente novamente.");
    }
  };

  return (
    <CardClient className="card">
      <div className="card-body" style={{ textAlign: "center" }}>
        <h5 className="card-title">
          #{client.id} - {client.name}
        </h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {calculateAge(new Date(client.birthDay))} anos |{" "}
          {Gender[client.gender]}
        </h6>
        <p className="card-text">
          {client.address.city}-{client.address.state}
        </p>
      </div>

      <CardClientButtons>
        <FaUserEdit onClick={() => handleShow() }  size={25} />
        <RiDeleteBin6Fill onClick={() => rmvClient()} size={23} />
      </CardClientButtons>
      {isPending ? (
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      ) : null}
      <ModalAlterClient  id={client.id} show={show} handleClose={handleClose} />
    </CardClient>    
  );
};
