/* eslint-disable react-refresh/only-export-components */
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Client from "../../interface/Client";
import { calculateAge } from "../../utils/calculateAge";
import { Gender } from "../../utils/Gender";

export default ({client}: Client) => {

  return (
    <div className="card" style={{ width: "23rem" }}>
      <div className="card-body">
        <h4 className="card-title">#{client.id} - {client.name}</h4>
        <h5 className="card-subtitle mb-2 text-body-secondary">
          { calculateAge(new Date(client.birthDay)) } anos | { Gender[client.gender] }
        </h5>
        <p className="card-text">{client.address.city}-{client.address.state}</p>
      </div>

      <div>
        <FaUserEdit size={25} /> | <RiDeleteBin6Fill size={23} />
      </div>
    </div>
  );
};
