import React from "react";

export default function Chrono({
    seconds,
    action,
}: {
    seconds: number;
    action: number;
}): JSX.Element {
    const minutes: number = Math.floor(seconds / 60);
    const secondsLeft: number = seconds % 60;
    const [pause, setPause] = React.useState(false);

    const format = (num: number): string => `0${num}`.slice(-2);

    const fct = (value: number) => {
        setPause(!pause);
        action(value);
    };

    return (
        <div>
            <em className="w-8 h-4 text-red-600">{format(minutes)}</em>
            <span>:</span>
            <em className="w-8 h-4 text-red-600">{format(secondsLeft)}</em>
            <button onClick={() => fct(-1)}>
                {pause ? "continue" : "pause"}
            </button>
            <button onClick={() => fct(-2)}>stop</button>
        </div>
    );
}
