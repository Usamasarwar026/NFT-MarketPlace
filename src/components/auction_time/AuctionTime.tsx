import { useEffect, useState } from "react";
import Button from "../button/Button";
import { ButtonProps, TimeState } from "../../types/types";

function AuctionTime({ className }: ButtonProps) {
  const initialTime: TimeState = {
    hours: 59,
    minutes: 59,
    seconds: 59,
  };
  const [time, setTime] = useState<TimeState>(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;
        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          seconds = 59;
          minutes -= 1;
        } else if (hours > 0) {
          minutes = 59;
          seconds = 59;
          hours -= 1;
        } else {
          return initialTime;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [time, initialTime]);

  return (
    
      <div>
        <div className={`${className}`}>
          <div className=" mx-[30px] text-lg">Auction ends in:</div>
          <div className="flex space-x-2 justify-center ">
            <div>
              <div className="text-[38px] font-[700px]">
                {String(time.hours).padStart(2, "0")}
              </div>
              <div className="font-[400px] text-[12px]">Hours</div>
            </div>
            <div className="font-bold pt-4">:</div>
            <div>
              <div className="text-[38px] font-[700px]">
                {String(time.minutes).padStart(2, "0")}
              </div>
              <div className="font-[400px] text-[12px]">Minutes</div>
            </div>
            <div className="font-bold pt-4">:</div>
            <div>
              <div className="text-[38px] font-[700px]">
                {String(time.seconds).padStart(2, "0")}
              </div>
              <div className="font-[400px] text-[12px]">Seconds</div>
            </div>
          </div>
          <div className="self-center">
            <Button
              href="#"
              title="Place Bid"
              className="bg-primary w-full text-white text-center"
            />
          </div>
        </div>
      </div>
    
  );
}

export default AuctionTime;
