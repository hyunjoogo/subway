import React from 'react';
import {RealtimeArrivalList} from "../apis/Apis";

type RunProps = {
  arrivalData: RealtimeArrivalList[]
}


const Run = ({arrivalData}: RunProps) => {
  return (
    <div>
      <h1> 뛰 자 !</h1>
    </div>
  );
};

export default Run;
