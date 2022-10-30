import json from '../../component/서울교통공사_환승역거리 소요시간 정보_20210701.json';

/**
 * json파일의 환승시간정보를 초로 변경하여 console을 찍어주는 코드
 *
 * */
export const ch = json.map(value => {
  if (value.time) {
    const [minStr, secTemp] = value.time.split('분')
    const secStr = secTemp.replace('초', '');
    const totalSec = Number(minStr) * 60 + Number(secStr);
    console.log(value.time, ':', minStr, secStr, totalSec);
    value.time = totalSec;
  }
  return value
});
console.log(ch);
