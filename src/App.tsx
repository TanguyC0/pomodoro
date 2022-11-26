import "./App.css";
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

    const onOff = (value: number):void => {
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
        <div className="App">
            <h1 className="text-rose-800">React Chrono</h1>
            {isRunning === false && time == 0 ? (
                <ChronoInput value={onOff} seconds={time} />
            ) : (
                <Chrono seconds={time} action={onOff} />
            )}
        </div>
    );
}

export default App;
