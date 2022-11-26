import React, {useRef} from "react";

export default function ChronoInput({
    value,
    seconds,
}: {
    value: (value: number) => void;
    seconds: number;
}): JSX.Element {
    const minutesRef = useRef<HTMLInputElement>(null);
    const secondsRef = useRef<HTMLInputElement>(null);

    const setTime = () => {
        if (!minutesRef.current) throw Error("minutesRef is not assigned");
        let inputMinutes = parseInt(minutesRef.current.value);
        if (!secondsRef.current) throw Error("secondsRef is not assigned");
        let inputSeconds = parseInt(secondsRef.current.value);

        let totalSeconds = inputMinutes * 60 + inputSeconds;
        totalSeconds > 60 * 60 ? (totalSeconds = 60 * 60) : "";
        totalSeconds >= 0 ? value(totalSeconds) : "";
    };

    const updateTimer = (value: number) => {
        if (!minutesRef.current) throw Error("minutesRef is not assigned");
        let inputMinutes = parseInt(minutesRef.current.value);
        if (!secondsRef.current) throw Error("secondsRef is not assigned");
        let inputSeconds = parseInt(secondsRef.current.value);
        let totalSeconds = inputMinutes * 60 + inputSeconds;
        if (totalSeconds + value >= 0 && totalSeconds + value <= 60 * 60) {
            minutesRef.current.value = (inputMinutes + value / 60).toString();
        }
    };

    const resetTimer = () => {
        if (!minutesRef.current) throw Error("minutesRef is not assigned");
        minutesRef.current.value = "0";

        if (!secondsRef.current) throw Error("secondsRef is not assigned");
        secondsRef.current.value = "0";
    };

    return (
        <div>
            <input
                defaultValue={Math.floor(seconds / 60).toString()}
                type="text"
                ref={minutesRef}
            />
            :
            <input
                defaultValue={(seconds % 60).toString()}
                type="text"
                ref={secondsRef}
            />
            <button onClick={() => updateTimer(60)}>+</button>
            <button onClick={() => setTime()}>start</button>
            <button onClick={() => resetTimer()}>reset</button>
            <button onClick={() => updateTimer(-60)}>-</button>
        </div>
    );
}
