import React from 'react';
import './App.css';
import Line5 from "./view/line/Line5";

function App(): React.ReactElement {

  return (
    <>
      <h1>뛸까? 말까?</h1>
      <div className="App">
        <Line5/>
      </div>
      {/*<Table arrivalList={arrivalList}/>*/}
    </>
  );
}

export default App;

export const dummy = {
  "errorMessage": {
    "status": 200,
    "code": "INFO-000",
    "message": "정상 처리되었습니다.",
    "link": "",
    "developerMessage": "",
    "total": 2
  },
  "realtimeArrivalList": [
    {
      "beginRow": null,
      "endRow": null,
      "curPage": null,
      "pageRow": null,
      "totalCount": 2,
      "rowNum": 1,
      "selectedCount": 2,
      "subwayId": "1005",
      "subwayNm": null,
      "updnLine": "상행",
      "trainLineNm": "방화행 - 목동방면 (막차)",
      "subwayHeading": "오른쪽",
      "statnFid": "1005000522",
      "statnTid": "1005000520",
      "statnId": "1005000521",
      "statnNm": "오목교(목동운동장앞)",
      "trainCo": null,
      "ordkey": "01007방화0",
      "subwayList": "1005",
      "statnList": "1005000521",
      "btrainSttus": null,
      "barvlDt": "780",
      "btrainNo": "5210",
      "bstatnId": "1",
      "bstatnNm": "방화 (막차)",
      "recptnDt": "2022-10-28 00:25:24.0",
      "arvlMsg2": "13분 후 (마포)",
      "arvlMsg3": "마포",
      "arvlCd": "99"
    },
    {
      "beginRow": null,
      "endRow": null,
      "curPage": null,
      "pageRow": null,
      "totalCount": 2,
      "rowNum": 2,
      "selectedCount": 2,
      "subwayId": "1005",
      "subwayNm": null,
      "updnLine": "하행",
      "trainLineNm": "애오개행 - 양평방면 (막차)",
      "subwayHeading": "왼쪽",
      "statnFid": "1005000520",
      "statnTid": "1005000522",
      "statnId": "1005000521",
      "statnNm": "오목교(목동운동장앞)",
      "trainCo": null,
      "ordkey": "11006애오개0",
      "subwayList": "1005",
      "statnList": "1005000521",
      "btrainSttus": null,
      "barvlDt": "720",
      "btrainNo": "5207",
      "bstatnId": "21",
      "bstatnNm": "애오개 (막차)",
      "recptnDt": "2022-10-28 00:25:34.0",
      "arvlMsg2": "12분 후 (발산)",
      "arvlMsg3": "발산",
      "arvlCd": "99"
    }
  ]
}
