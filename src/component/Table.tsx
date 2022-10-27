import React from 'react';

export type TableType = {
  arrivalList: Item[] | [];
  getXMLfromAPI: () => void;
}

type TableTestType = {
  arrivalList: Item[] | [];
}

export type Item = {
  "beginRow": null,
  "endRow": null,
  "curPage": null,
  "pageRow": null,
  "totalCount": number,
  "rowNum": number,
  "selectedCount": number,
  "subwayId": string,
  "subwayNm": null,
  "trainCo": null,
  "btrainSttus": null,
  "updnLine": string,
  "trainLineNm": string,
  "statnFid": string,
  "statnTid": string,
  "statnId": string,
  "statnNm": string,
  "ordkey": string,
  "subwayList": string,
  "statnList": string,
  "barvlDt": string,
  "btrainNo": string,
  "bstatnId": string,
  "bstatnNm": string,
  "recptnDt": string,
  "arvlMsg2": string,
  "arvlMsg3": string,
  "arvlCd": string
}
const Table = ({arrivalList}: TableTestType): React.ReactElement => {
  console.log(arrivalList)
  return (
    <table>
      <caption>
        <strong>출력값</strong>
        <span className="ui-caption"/>
      </caption>
      <thead>
      <tr>
        <th scope="col">No</th>
        <th scope="col">출력명</th>
        {arrivalList.map((item, index) => {
          return <th key={index} scope="col">{index}</th>
        })}
        <th scope="col">출력설명</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>subwayId</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.subwayId}</td>
        })}
        <td>지하철호선ID</td>
      </tr>
      <tr>
        <td>2</td>
        <td>updnLine</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.updnLine}</td>
        })}
        <td>
          상하행선구분
          <br/> (2호선 : (내선:0,외선:1),상행,하행)
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>trainLineNm</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.trainLineNm}</td>
        })}
        <td>
          도착지방면
          <br/> (성수행 - 구로디지털단지방면)
        </td>
      </tr>
      <tr>
        <td>5</td>
        <td>statnFid</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.statnFid}</td>
        })}
        <td>이전지하철역ID</td>
      </tr>
      <tr>
        <td>6</td>
        <td>statnTid</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.statnTid}</td>
        })}
        <td>다음지하철역ID</td>
      </tr>
      <tr>
        <td>7</td>
        <td>statnId</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.statnId}</td>
        })}
        <td>지하철역ID</td>
      </tr>
      <tr>
        <td>8</td>
        <td>statnNm</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.statnNm}</td>
        })}
        <td>지하철역명</td>
      </tr>
      <tr>
        <td>10</td>
        <td>ordkey</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.ordkey}</td>
        })}
        <td>
          도착예정열차순번
          <br/> (상하행코드(1자리), 순번(첫번째, 두번째 열차 , 1자리), 첫번째
          도착예정 정류장 - 현재 정류장(3자리), 목적지 정류장, 급행여부(1자리))
        </td>
      </tr>
      <tr>
        <td>11</td>
        <td>subwayList</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.subwayList}</td>
        })}
        <td>
          연계호선ID
          <br/> (1002, 1007 등 연계대상 호상ID)
        </td>
      </tr>
      <tr>
        <td>12</td>
        <td>statnList</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.statnList}</td>
        })}
        <td>
          연계지하철역ID
          <br/> (1002000233,1007000744)
        </td>
      </tr>
      <tr>
        <td>13</td>
        <td>btrainSttus</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.btrainSttus}</td>
        })}
        <td>
          열차종류
          <br/> (급행,ITX)
        </td>
      </tr>
      <tr>
        <td>14</td>
        <td>barvlDt</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.barvlDt}</td>
        })}
        <td>
          열차도착예정시간
          <br/> (단위:초)
        </td>
      </tr>
      <tr>
        <td>15</td>
        <td>btrainNo</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.btrainNo}</td>
        })}
        <td>
          열차번호
          <br/> (현재운행하고 있는 호선별 열차번호)
        </td>
      </tr>
      <tr>
        <td>16</td>
        <td>bstatnId</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.bstatnId}</td>
        })}
        <td>종착지하철역ID</td>
      </tr>
      <tr>
        <td>17</td>
        <td>bstatnNm</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.bstatnNm}</td>
        })}
        <td>종착지하철역명</td>
      </tr>
      <tr>
        <td>18</td>
        <td>recptnDt</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.recptnDt}</td>
        })}
        <td>열차도착정보를 생성한 시각</td>
      </tr>
      <tr>
        <td>19</td>
        <td>arvlMsg2</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.arvlMsg2}</td>
        })}
        <td>
          첫번째도착메세지
          <br/> (전역 진입, 전역 도착 등)
        </td>
      </tr>
      <tr>
        <td>20</td>
        <td>arvlMsg3</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.arvlMsg3}</td>
        })}
        <td>
          두번째도착메세지
          <br/> (종합운동장 도착, 12분 후 (광명사거리) 등)
        </td>
      </tr>
      <tr>
        <td>21</td>
        <td>arvlCd</td>
        {arrivalList.map((item, index) => {
          return <td key={index}>{item.arvlCd}</td>
        })}
        <td>
          도착코드
          <br/> (0:진입, 1:도착, 2:출발, 3:전역출발, 4:전역진입, 5:전역도착,
          99:운행중)
        </td>
      </tr>
      </tbody>
    </table>
  );
};

export default Table;
