import { Hour, Day, Month, Year } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const DateAndTime = () => {
    const currentDate = useCurrentDate();

    return (
        <>
            <Hour>
                {currentDate.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
            </Hour>
            <Day>
                {currentDate.toLocaleDateString(undefined, { day: "numeric" })}
            </Day>
            <Month>
                {currentDate.toLocaleDateString(undefined, { month: "long" })}
            </Month>
            <Year>
                {currentDate.toLocaleDateString(undefined, { year: "numeric" })}
            </Year>
        </>
    );
};

export default DateAndTime;