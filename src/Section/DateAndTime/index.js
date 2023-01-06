import { useState, useEffect } from 'react';
import "./style.css";

const DateAndTime = () => {

    const [currentTime, setCurrentTime] = useState();
    const [year, setyear] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();

    useEffect(() => {
        const setDateAndTime = () => {
            let myDate = new Date();
            const time = myDate.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit" });
            const year = myDate.toLocaleDateString(undefined, { year: "numeric" });
            const month = myDate.toLocaleDateString(undefined, { month: "long" });
            const day = myDate.toLocaleDateString(undefined, { day: "numeric" });

            setCurrentTime(time)
            setyear(year)
            setMonth(month)
            setDay(day)
        };
        setDateAndTime()
        const intervalId = setInterval(setDateAndTime, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <div className="hour">
                {currentTime}
            </div>
            <div className="day">
                {day}
            </div>
            <div className="month">
                {month}
            </div>
            <div className="year">
                {year}
            </div>
        </>
    );
};

export default DateAndTime;