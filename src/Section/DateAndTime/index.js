import { useState, useEffect } from 'react';
import "./style.css";

const DateAndTime = () => {

    const [myDate, setMyDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => setMyDate(new Date()), 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <div className="hour">
                {myDate.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
            </div>
            <div className="day">
                {myDate.toLocaleDateString(undefined, { day: "numeric" })}
            </div>
            <div className="month">
                {myDate.toLocaleDateString(undefined, { month: "long" })}
            </div>
            <div className="year">
                {myDate.toLocaleDateString(undefined, { year: "numeric" })}
            </div>
        </>
    );
};

export default DateAndTime;