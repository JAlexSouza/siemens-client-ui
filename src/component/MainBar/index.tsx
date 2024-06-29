import styled from "styled-components";
import SearchBar from "../SearchBar";
import { IoPersonAddSharp } from "react-icons/io5";
import { LuPaintbrush } from "react-icons/lu";
import { useContext, useState } from "react";
import ModalCreationClient from "../ModalCreationClient";
import { ClientContext } from "../../context/ClientContext";

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
  const { setClientsFilter } = useContext(ClientContext);
  const [search, setSearch] = useState<string>();

  const cleanSearch = () => {
    setClientsFilter('');
    setSearch('')
  }

  return (
    <>
      <MainTitle>Siemens</MainTitle>
      <MainBarStyled>
        <MainButtons>
          <IoPersonAddSharp onClick={handleShow} size={20} />
          <LuPaintbrush onClick={() => cleanSearch() } size={20} />
        </MainButtons>
        <SearchBar search={search} setSearch={setSearch} />
      </MainBarStyled> 
      <ModalCreationClient show={show} handleClose={handleClose} />      
    </>
  );
};
