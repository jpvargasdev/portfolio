
import React from 'react';

function Time() {
  const [time, setTime] = React.useState<string>("00:00:00");
  React.useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours() >= 10 ? `${date.getHours()}` : `0${date.getHours()}`;
      const minutes = date.getMinutes() >= 10 ? `${date.getMinutes()}` : `0${date.getMinutes()}`;
      const seconds = date.getSeconds() >= 10 ? `${date.getSeconds()}` : `0${date.getSeconds()}`;
      const currentTime = `${hours}:${minutes}:${seconds}`;
      setTime(currentTime);
    }, 1000);

    return () => clearInterval(interval);
  });
  return (
    <div className="flex flex-wrap flex-row sm:justify-start justify-start content-end min-w-[120px]">
      <h3 className="text-base text-font_primary font-semibold mr-4 text-end">CET</h3>
      <p className="text-base text-font_primary font-semibold text-end">{time}</p>
    </div>
  );
}

export default Time;
