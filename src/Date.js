import { useState } from "react";
import { useEffect } from "react";
const Date = () => {
    const [StartDate, setStartDate] = useState();
    const [EndDate, setEndDate] = useState();
    const [allDates, setAllDates] = useState([]);

    const s = () => {
        if (!StartDate || !EndDate) {
            alert("reqiure")
            return;
        }
        else {
            fetchd()
        }
    }
    const fetchd = () => {
        fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s&=on&start=${StartDate}&end=${EndDate}`)
            .then(data => { setAllDates(data); console.log(data); })
            .catch(console.error("error"));
    }

    useEffect(() =>
        fetch(), []
    )

    return (
        <div className="border">
            <input id="תאריך התחלה"
                placeholder="תאריך התחלה"
                onChange={(e) => setStartDate(e.target.value)}
                // type="date"
                type="string"
            />
            <br></br>
            <input id="תאריך סיום"
                placeholder="תאריך סיום"
                onChange={(e) => setEndDate(e.target.value)}
            />
            <button onClick={() => s()}>הכנס</button>
        </div>
    );

}

export default Date
