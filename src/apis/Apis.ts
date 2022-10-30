// API 요청 결과 인터페이스 정의
export type RealtimeStationArrival = {
  errorMessage: ErrorMessage,
  realtimeArrivalList: RealtimeArrivalList[],
}

type ErrorMessage = {
  "status": number,
  "code": string,
  "message": string,
  "link": string,
  "developerMessage": string,
  "total": number
}

export type RealtimeArrivalList = {
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
  "arvlCd": string,
  "isRun"?: string,
  "time"?: number,
  "meter"?: number
}


export const getArrivalList = async (stationName: string): Promise<RealtimeStationArrival> => {
  const apiKey = process.env.REACT_APP_SEOUL_SUBWAY_API_KEY;
  const baseURL = `http://swopenapi.seoul.go.kr/api/subway/${apiKey}/json/realtimeStationArrival/0/10/`
  // if (true) return dummy;

  const res = await fetch(baseURL + stationName);
  if (res.ok) {
    return await res.json();
  }
  throw new Error('API ERROR');
}
