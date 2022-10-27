import dayjs from "dayjs";
import 'dayjs/locale/ko';

export const Format = {
  "YYYY-MM-DD_HH:mm:ss": 'YYYY-MM-DD HH:mm:ss',
  'HH:mm:ss': 'a HH:mm:ss',
  'HH-mm-ss': 'a hh시 mm분 ss초',
};

interface DisplayDate {
  (value?: string | undefined, format?: string | undefined): string;
}

export const displayDate: DisplayDate = (value, format = Format["HH-mm-ss"]) => {
  return dayjs(value).locale('ko').format(format);
};

export const now = () => {
  return dayjs().locale('ko').format('HH-mm-ss');
};

export const convertMinuteAndSecond = (value: string) => {
  const minute = Math.floor(Number(value) / 60);
  const second = Number(value) % 60;
  if (second === 0) {
    return `${minute}분`
  } else {
    return `${minute}분 ${second}초`
  }
};

