import React, {useEffect, useState} from 'react';
import './App.css';
import Way from './view/way/Way';
import Table, {Item} from "./component/Table";

function App(): React.ReactElement {
  const [arrivalList, setArrivalList] = useState<Item[]>([]);

  useEffect(() => {
    getXMLfromAPI()
  }, [])

  const getXMLfromAPI = async () => {
    const apiKey = process.env.REACT_APP_SEOUL_SUBWAY_API_KEY;
    const baseURL = `http://swopenapi.seoul.go.kr/api/subway/${apiKey}/json/realtimeStationArrival/0/10/`
    const stationName = "여의도"

    const response = await fetch(baseURL + stationName);
    const res = await response.json();

    if (!response.ok) {
      throw Error("...");
    }
    setArrivalList(res.realtimeArrivalList || []);
  };


  return (
    <>
      <div className="App">
        <Way/>
      </div>
      <Table arrivalList={arrivalList}/>
    </>


  );
}

export default App;

