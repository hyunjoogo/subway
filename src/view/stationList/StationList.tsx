import React, {Fragment, useEffect, useCallback, useState} from 'react';
import json from "../../component/실시간도착_역정보_221028.json";
import {debounce} from "lodash";

type StationInfo = {
  "SUBWAY_ID": number,
  "STATN_ID": number,
  "STATN_NM": string
}

const StationList = () => {
  const [list, setList] = useState<StationInfo[]>([]);
  const [searchStr, setSearchStr] = useState('')

  const printValue = useCallback(
    debounce((value) => {
      const list = json.filter(station => station.STATN_NM.includes(value))
      setList([...list])
    }, 300),
    []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") return
    printValue(event.target.value);
    setSearchStr(event.target.value);
  }

  return (
    <>
      <form>
        <label>검색</label>
        <input
          type="search"
          placeholder="역명검색"
          onChange={onChange}
        />
      </form>
      <ul>
        {list.map((item, index) => {
          return (
            <Fragment key={index}>
              <li>{item.SUBWAY_ID}</li>
              <li>{item.STATN_ID}</li>
              <li>{item.STATN_NM}</li>
            </Fragment>
          )
        })}
      </ul>

    </>
  );
};

export default StationList;
