import { useEffect, useState } from "react";


function Timer(props:any) {
  const {className} = props;
    const initialTime = {
      hours: 59,
      minutes: 59,
      seconds: 59,
    };
    const [time, setTime] = useState(initialTime);
  
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
    <>
    <div>
    <div className={`${className}`}>
            <div className="mb-1 mx-[30px] text-lg">Auction ends in:</div>
            <div className="flex space-x-2 justify-center ">
              {/* Timer Section */}
              <div >
                <div className="text-2xl font-bold">{String(time.hours).padStart(2, "0")}</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className='font-bold pt-1'>:</div>
              <div>
                <div className="text-2xl font-bold">{String(time.minutes).padStart(2, "0")}</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className='font-bold pt-1'>:</div>
              <div>
                <div className="text-2xl font-bold">{String(time.seconds).padStart(2, "0")}</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
          </div>
    </div>
    </>
  )
}

export default Timer
