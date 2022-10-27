import React, {Fragment} from 'react';
import styled from "styled-components";
import {TableType} from "../../component/Table";
import moment from 'moment';
import dayjs from "dayjs";
import {convertMinuteAndSecond, displayDate, now} from "../../utils/displayDate";


const TimeLine = ({arrivalList}: TableType): React.ReactElement => {
  const list = arrivalList.filter((value, index) => {
    if (value.updnLine === "하행") {
      return value
    }
  })

  // let now = moment().format('hh:mm:ss');
  let nowTime = displayDate();

  return (
    <TimeLineWrapper>
      <p>회사 가는 길</p>
      <div className="title">
        <h2 className="station">
          <p className="lineNum">5</p>
          <p className="stationName">오목교역</p>
        </h2>
        <div className="updateTime_wrapper">
          <span className="updateTime">{nowTime}</span>
          <button className="resetBtn">리셋</button>
        </div>
      </div>
      <div>
        {list.map((value, index) => {
          return (
            <Fragment key={index}>
              <div>{value.btrainNo} / {convertMinuteAndSecond(value.barvlDt)} / {displayDate(value.recptnDt)} 도착 예정</div>
            </Fragment>
          )
        })}
        <div>05:47 열차번호 10분 00초 도착</div>
      </div>


    </TimeLineWrapper>
  );
};

export default TimeLine;

const TimeLineWrapper = styled.article`
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
