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
      const URL =
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x20178A5E1260779521e5F8594341961aD64C61CD&order_direction=asc";
      await axios
        .get(URL, {
          // method: 'GET',
          headers: {
            "Content-Type": "application/json",
            Authorization:'0xb784c1d5ae5b7e9640e1ab6626adf58f8bd5ec14'
          },
          // data: exp,
        })
        .then((response) => {
          setdata(response.data.assets);
          console.log(response.data.assets);
        })
        .catch((error) => {
          throw console.log(error);
        });
      // console.log(openseadata.data.assets);
    };
    return getdata();
  }, []);

  return (
    <div className="app">
      <Header />

      {data.length > 0 && (
        <>
          <Main select={select} punklistdata={data} />
          <Punklist punklistdata={data} selectedpunk={setselect} />
        </>
      )}
    </div>
  );
}

export default App;
