
import "./App.css";
import "./components/Header.css";
import Header from "./components/Header";

import { useState, useEffect } from "react";
import axios from "axios";
import Punklist from "./components/Punklist";
import Main from "./components/Main";

function App() {
  const [data, setdata] = useState([]);
  const [select, setselect] = useState(0);
  useEffect(() => {
    const getdata = async () => {
      const openseadata = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x20178A5E1260779521e5F8594341961aD64C61CD&order_direction=asc"
      );
      console.log(openseadata.data.assets);
      setdata(openseadata.data.assets)
      
    };
    return getdata()
  }, []);

  return (
    <div className="app">
      <Header />
      
      {
        data.length > 0  && ( 
          <>
        <Main select={select} punklistdata={data}/>
          <Punklist 
           punklistdata={data} selectedpunk={setselect}/>
           </>
           )}
      
    </div>
  );
}

export default App;
