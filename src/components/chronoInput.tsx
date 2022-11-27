import React, {useRef} from "react";
import Modal from "./modal";

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
            <div className="flex justify-center">
                <div className="flex flex-col justify-center items-center mx-2 bg-neutral rounded-box w-36 h-36">
                    <input
                        defaultValue={Math.floor(seconds / 60).toString()}
                        type="text"
                        ref={minutesRef}
                        className="font-mono text-5xl mb-6 w-20 text-center"
                    />
                    minutes
                </div>
                <div className="flex flex-col justify-center items-center mx-2 bg-neutral rounded-box w-36 h-36">
                    <input
                        defaultValue={(seconds % 60).toString()}
                        type="text"
                        ref={secondsRef}
                        className="font-mono text-5xl mb-6 w-20 text-center"
                    />
                    seconds
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <input
                    type="button"
                    value="+"
                    onClick={() => updateTimer(60)}
                    className="btn btn-outline btn-warning flex flex-col justify-center items-center mx-2 bg-neutral w-14 h-10"
                />
                <input
                    type="button"
                    value="start"
                    onClick={() => setTime()}
                    className="btn btn-outline btn-success flex flex-col justify-center items-center mx-2 bg-neutral w-20 h-10"
                />
                <input
                    type="button"
                    value="reset"
                    onClick={() => resetTimer()}
                    className="btn btn-outline btn-error flex flex-col justify-center items-center mx-2 bg-neutral w-20 h-10"
                />
                <input
                    type="button"
                    value="-"
                    onClick={() => updateTimer(-60)}
                    className="btn btn-outline btn-warning flex flex-col justify-center items-center mx-2 bg-neutral w-14 h-10"
                />
            </div>
            <Modal value={true}/>
        </div>
    );
}
