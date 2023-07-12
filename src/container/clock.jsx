import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  let timeArr = date.toLocaleTimeString().split(":");
  let timeFormat = `${timeArr[0]}:${timeArr[1]}`;
  let amPm = date.toLocaleTimeString().split(" ")[1];
  return (
    <div>
      <span>
        Current time is: {timeFormat} {amPm}
      </span>
    </div>
  );
}
