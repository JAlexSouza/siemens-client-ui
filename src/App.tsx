import ClientWall from "./component/ClientWall";
import MainBar from "./component/MainBar";
import { ClientProvider } from "./context/ClientContext";

function App() {


  
  return (
    <>
      <ClientProvider >
        <MainBar />
        <ClientWall />
      </ClientProvider>
      
    </>
  );
}

export default App;
