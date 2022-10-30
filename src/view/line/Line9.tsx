import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {displayDate} from "../../utils/displayDate";
import * as Apis from "../../apis/Apis";
import {RealtimeArrivalList} from "../../apis/Apis";
import {getTransferInfo} from "../../utils/getTransferInfo";

type ObjType = {
  [index: string]: string
}

const Line9 = () => {
  const [nowTime, setNowTime] = useState('');
  const [arrivalData, setArrivalData] = useState<RealtimeArrivalList[]>([]);
  const [screenCode, setScreenCode] = useState<number>(0);
  const [gotTime, setGotTime] = useState('');
  const [transferInfo, setTransferInfo] = useState<{ meter: number, time: number }>({
    "meter": 0,
    "time": 0
  })

  useEffect(() => {
    setTransferInfo(getTransferInfo(9, "여의도", 5)[0])
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setNowTime(displayDate());
    }, 1000);
    return (() => clearInterval(id))
  }, []);

  const getArrivalData = async () => {
    setGotTime(displayDate());
    const {realtimeArrivalList} = await Apis.getArrivalList('여의도')
    if (realtimeArrivalList) {
      const list = realtimeArrivalList.filter(item => {
        if (item.subwayId === "1005") {
          return item
        }
      })
      list.forEach(value => {
        value['isRun'] = isRun(transferInfo.time, Number(value.barvlDt), value.arvlCd)
      })
      setArrivalData([...list]);
    }
  }

  const isRun = (time: number, remainTime: number, arvlCd: string) => {
    console.log('남은시간', remainTime, '환승소요시간', time, time / 2, '도착정보', arvlCd)
    // 1. 남은시간이 60초 이하
    // - 진입현황과 소요시간을 보고 판단
    if (remainTime <= 60) {
      // 1.1. 소요시간이 60초 이하
      if (time <= 60) {
        console.log("남은시간이 60초 이하 && 소요시간이 60초 이하")
        if (arvlCd === '0') {
          return '진입중 : 뛸까? 말까?'
        } else if (arvlCd === '1') {
          return '도착 : 말자'
        } else if (arvlCd === '2') {
          return '출발 : 말자'
        } else {
          return statusCd[arvlCd] + "충분해";
        }
      }
      // 1.2. 소요시간이 60초 이상 && 뛰는시간이 60초 이하
      else if (time > 60 && time / 2 <= 60) {
        console.log("남은시간이 60초 이하 && 소요시간이 60초 초과 && 뛰는 시간 60초 이하")
        // TODO 나중에 뛸 수 있는 시간을 결정한다면? 60초를 변수로 주면 될듯
        if (time / 2 <= 60) {
          console.log('런소요시간이 30초 이하이므로 arvlCd로 판단', statusCd[arvlCd])
          if (arvlCd === '0') {
            return '진입중 : 뛸까? 말까?'
          } else if (arvlCd === '1') {
            return '도착 : 말자'
          } else if (arvlCd === '2') {
            return '출발 : 말자'
          } else if (arvlCd === '3') {
            return '전역출발 : 뛰자!'
          } else if (arvlCd === '4') {
            return '전역도착 : 뛰자'
          } else if (arvlCd === '5') {
            return '전역진입 : 뛰자'
          } else {
            return '운행중 : ???'
          }
        }
      }
      // 1.3. 소요시간이 60초 이상 && 뛰는시간이 60초 이상
      else {
        console.log("남은시간이 60초 이하 && 소요시간이 60초 초과 && 뛰는 시간 60초 이상")
        return '말자'
      }
    }

      // 2. 남은시간이 60초 초과
    // - 소요시간만 보고 판단
    else if (remainTime > 60) {
      // 2.1. 남은시간 < 소요시간
      if (remainTime < time) {
        // 2.1.1. 남은시간 <= 뛰는시간 (120초보다 더 뛰어)
        if (remainTime <= time / 2) {
          console.log('남은시간 60>, 남은시간 < 소요시간, 남은시간 <= 뛰는시간')
          return '말자!';
        }
        // 2.1.2. 남은시간 > 뛰는시간 (120초보다 덜 뛰어)
        else if (remainTime > time / 2) {
          console.log('남은시간 60>, 남은시간 < 소요시간, 남은시간 > 뛰는시간')
          return '뛸까? 말까?'
        } else {
          return '----'
        }
      }
      // 2.2. 남은시간 >= 소요시간
      else if (remainTime >= time) {
        console.log(remainTime, time, '충분해')
        return '충분해 : 남은시간 > 소요시간'
      }
    }
  }


  const statusCd: ObjType = {
    0: "진입", 1: "도착", 2: "출발", 3: "전역출발", 4: "전역진입", 5: "전역도착", 99: "운행중",
  }

  return (
    <>
      <div className="updateTime_wrapper">
        <span className="updateTime">{nowTime} / {gotTime}  </span>
        <button className="resetBtn" onClick={getArrivalData}>리셋</button>
      </div>
      <StyledStation>
        9호선 여의도 {`<->`} 5호선 여의도<br/>
        환승소요시간 : {transferInfo.meter} m / {transferInfo.time}초 소요
      </StyledStation>
      <div>
        <div>
          {arrivalData.map((value, index) => {
            return (
              <Card key={index}>
                <div>다음역 :</div>
                <div>열차 : {value.btrainNo} / 호선 : {value.subwayId}</div>
                <div>남은 시간 : {value.barvlDt}</div>
                <div>운행코드 : {statusCd[value.arvlCd]} / {value.arvlCd}</div>
                <div>판결 : {value.isRun}</div>
                <div>업데이트 : {displayDate(value.recptnDt)}</div>
                <div>{value.arvlMsg2}</div>
              </Card>
            )
          })}
        </div>
        {/*<Table arrivalList={arrivalData}/>*/}
      </div>
    </>
  );
};

export default Line9;

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

const Card = styled.div`
  width: 300px;
  border: 1px solid black;
  margin-top: 1rem;
`;
