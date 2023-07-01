import React from "react";
import { LineWave } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="max-w-sm mx-auto">
    <LineWave
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="line-wave"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  firstLineColor=""
  middleLineColor=""
  lastLineColor=""
/>
    </div>
  );
};

export default Loading;
