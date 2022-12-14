import React, {Fragment, useState} from 'react';
import styled from "styled-components";
import {convertMinuteAndSecond, displayDate} from "../../utils/displayDate";
import * as Apis from "../../apis/Apis";
import {RealtimeArrivalList} from "../../apis/Apis";
import Table from "../../component/Table";
import Run from '../../component/Run';

type ObjType = {
  [index: string]: string
}

const Line5 = () => {
  const [arrivalData, setArrivalData] = useState<RealtimeArrivalList[]>([]);
  const [screenCode, setScreenCode] = useState<number>(0);
  const [transferData, setTransferData] = useState([])
  let nowTime = displayDate();

  const getArrivalData = async () => {
    const {realtimeArrivalList} = await Apis.getArrivalList('오목교(목동운동장앞)')
    if (realtimeArrivalList) {
      const list = realtimeArrivalList.filter(item => {
        if (item.updnLine === "하행") {
          return item
        }
      })
      setArrivalData(realtimeArrivalList);
    }
  }

  const statusCd: ObjType = {
    0: "진입", 1: "도착", 2: "출발", 3: "전역출발", 4: "전역진입", 5: "전역도착", 99: "운행중",
  }

  return (
    <>
      <StyledStation>
        <div className="title">
          <h2 className="station">
            <p className="lineNum">5</p>
            <p className="stationName">오목교</p>
          </h2>
          <div className="updateTime_wrapper">
            <span className="updateTime">{nowTime}</span>
            <button className="resetBtn" onClick={getArrivalData}>리셋</button>
          </div>
        </div>
        {screenCode === 1 && <Run arrivalData={arrivalData}/>}
        {screenCode === 2 && <Run arrivalData={arrivalData}/>}

      </StyledStation>
      <div>
        <div>
          {arrivalData.map((value, index) => {
            return (
              <Fragment key={index}>
                <div>열차 : {value.btrainNo}</div>
                <div>남은 시간 : {convertMinuteAndSecond(value.barvlDt)}</div>
                <div>업데이트 : {displayDate(value.recptnDt)}</div>
                <div>{value.arvlMsg2}</div>
                <div>{statusCd[value.arvlCd]}</div>
              </Fragment>
            )
          })}
        </div>
        <Table arrivalList={arrivalData}/>
      </div>
    </>
  );
};

export default Line5;

const StyledStation = styled.article`
  border: 1px solid black;
  padding: 1rem 2rem;

  .title {
    width: 300px;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .station {
    display: flex;
    align-items: center;
    font-size: 1rem;

    .lineNum {
      margin: 0;
      width: 1.5rem;
      height: 1.5rem;
      color: white;
      background-color: purple;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
    }
  }

`;
