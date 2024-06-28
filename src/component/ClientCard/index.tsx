/* eslint-disable react-refresh/only-export-components */
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Client from "../../interface/Client";
import { calculateAge } from "../../utils/calculateAge";
import { Gender } from "../../utils/Gender";
import styled from "styled-components";

const CardClient = styled.div`
  width: 420px;
  display: flex;
  align-items: center;
  padding-bottom: 15px;
`

const CardClientButtons = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-around;
`

export default ({client}: Client) => {

  return (
    <CardClient className="card" >
      <div className="card-body" style={{ textAlign: 'center' }}>
        <h5 className="card-title">#{client.id} - {client.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          { calculateAge(new Date(client.birthDay)) } anos | { Gender[client.gender] }
        </h6>
        <p className="card-text" >{client.address.city}-{client.address.state}</p>
      </div>

      <CardClientButtons>
        <FaUserEdit size={25} /> 
        <RiDeleteBin6Fill size={23} />
      </CardClientButtons>
    </CardClient>
  );
};
