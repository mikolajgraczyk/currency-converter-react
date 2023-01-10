import { useState, useEffect } from 'react';
import { Hour, Day, Month, Year } from "./styled";

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
            <Hour>
                {myDate.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
            </Hour>
            <Day>
                {myDate.toLocaleDateString(undefined, { day: "numeric" })}
            </Day>
            <Month>
                {myDate.toLocaleDateString(undefined, { month: "long" })}
            </Month>
            <Year>
                {myDate.toLocaleDateString(undefined, { year: "numeric" })}
            </Year>
        </>
    );
};

export default DateAndTime;