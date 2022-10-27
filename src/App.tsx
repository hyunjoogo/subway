import React, {useEffect, useState} from 'react';
import './App.css';
import Table, {Item} from "./component/Table";
import TimeLine from './view/timeLine/TimeLine';

function App() : React.ReactElement{
  const [arrivalList, setArrivalList] = useState<Item[]>([]);

  useEffect(() => {
    getXMLfromAPI()
  }, [])

  const getXMLfromAPI = async () => {
    const apiKey = process.env.REACT_APP_SEOUL_SUBWAY_API_KEY;
    const baseURL = `http://swopenapi.seoul.go.kr/api/subway/${apiKey}/json/realtimeStationArrival/0/10/`
    const stationName = "오목교(목동운동장앞)"

    const response = await fetch(baseURL + stationName);
    const res = await response.json();

    if (!response.ok) {
      throw Error("...");
    }
    console.log(res, res.realtimeArrivalList);
    setArrivalList(res.realtimeArrivalList || []);
  };

  return (
    <>
      <div className="App">
        <TimeLine arrivalList={arrivalList}/>
        <Table arrivalList={arrivalList}/>
      </div>
    </>


  );
}

export default App;

