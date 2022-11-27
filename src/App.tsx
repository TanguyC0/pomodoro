import React, {startTransition, useEffect, useState} from "react";
import Chrono from "./components/chrono";
import ChronoInput from "./components/chronoInput";

function App() {
    const [time, settime] = useState(0);
    const [isRunning, setisRunning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (time > 0 && isRunning === true) {
                settime(time - 1);
            } else {
                setisRunning(false);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [time, isRunning]);

    const onOff = (value: number): void => {
        console.log("start");
        if (value === -1) {
            ("");
        } else if (value === -2) {
            settime(0);
        } else {
            settime(value);
        }
        setisRunning(!isRunning);
    };

    return (
        <div className="flex flex-col items-center justify-between min-h-screen">
            <h1 className="pt-3 text-5xl font-bold text-accent">React timer</h1>
            {isRunning === false && time == 0 ? (
                <ChronoInput value={onOff} seconds={time} />
            ) : (
                <Chrono seconds={time} action={onOff} />
            )}
            <div></div>
        </div>
    );
}

export default App;
