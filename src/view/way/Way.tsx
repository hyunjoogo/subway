import React, {useEffect, useState} from 'react';
import TimeLine from "../timeLine/TimeLine";
import {Item} from "../../component/Table";

const Way = (): React.ReactElement => {
  const [arrivalList, setArrivalList] = useState<Item[]>([]);

  useEffect(() => {
    // getXMLfromAPI()
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
    setArrivalList(res.realtimeArrivalList || []);
  };
  return (
    <div>
      <TimeLine arrivalList={arrivalList} getXMLfromAPI={getXMLfromAPI}/>
    </div>
  );
};

export default Way;
