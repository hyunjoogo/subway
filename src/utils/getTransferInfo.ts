import json from "../component/서울교통공사_환승역거리 소요시간 정보_20210701.json";

export type Info = {
  "no": number,
  "line": number,
  "transferStation": string,
  "transferLine": string,
  "meter": number,
  "time": number
}

interface GetTransferInfo {
  (myLine: number, targetStation: string, targetLine: number): Info[]
}

// 9호선의 여의도 환승정보 없으면 5호선의 여의도 환승정보
// myline => 내가 타고 있는 정보
// targetStation => 갈아탈 역 이름('역' 제거, () 제거)
// targetLine => 갈아탈 호선
export const getTransferInfo: GetTransferInfo = (myLine: number, targetStation: string, targetLine: number) => {
  let transferData = json.filter(item => item.line === myLine && item.transferStation === targetStation)
  if (transferData.length === 0) {
    console.log(`${myLine} => ${targetLine} 정보없음`)
    transferData = json.filter(item => item.line === targetLine && item.transferStation === targetStation)
    if (transferData.length === 0) {
      console.log(`${targetLine} => ${myLine} 정보없음 : 최종적으로 아무것도 없음`)
    }
  }
  return transferData
}
