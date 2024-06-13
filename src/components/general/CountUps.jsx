import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CountUps = ({ end, sign, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col ">
      <VisibilitySensor
        onChange={(isVisible) => {
          if (isVisible) {
            setIsVisible(true);
          }
        }}
        delayedCall
      >
        <CountUp
          suffix={sign}
          className="text-2xl font-bold"
          end={end}
          start={isVisible ? 0 : null}
        />
      </VisibilitySensor>
      <h4 className="capitalize font-medium">{content}</h4>
    </div>
  );
};

export default CountUps;
