import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {xmlToJson} from "./xmlToJson";
import Table, {Item} from "./Table";

interface Person {
  name: string;
  error: boolean;
}

function App() {
  const [arrivalList, setArrivalList] = useState<Item[]>([]);

  useEffect(() => {
    getXMLfromAPI()
  }, [])

  const getXMLfromAPI = async () => {
    const url = "http://swopenapi.seoul.go.kr/api/subway/smaple/json/realtimeStationArrival/0/5/오목교(목동운동장앞)";
    const response = await fetch(url);
    const res = await response.json();

    if (!response.ok) {
      throw Error("...");
    }
    console.log(res, res.realtimeArrivalList);
    setArrivalList(res.realtimeArrivalList);

  };

  return (
    <>
      <div className="App">
        <Table arrivalList={arrivalList}/>

      </div>
    </>


  );
}

export default App;

