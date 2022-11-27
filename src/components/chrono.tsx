import {string} from "prop-types";
import React from "react";

export default function Chrono({
    seconds,
    action,
}: {
    seconds: number;
    action: (value: number) => void;
}): JSX.Element {
    const minutes: number = Math.floor(seconds / 60);
    const secondsLeft: number = seconds % 60;
    const [pause, setPause] = React.useState(false);

    const format = (num: number): string => `0${num}`.slice(-2);

    const fct = (value: number) => {
        setPause(!pause);
        action(value);
    };

    // return (
    //     <div className="grid grid-flow-rows gap-5">
    //         {/* grid grid-flow-col gap-5 text-center auto-cols-max */}
    //         {/* p-2 shadow bg-base-100 rounded-box w-52 */}
    //         <div className="grid grid-flow-col gap-5 text-center w-25">
    //             <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    //                 <span className="countdown font-mono text-5xl">
    //                     <span style={{"--value": minutes}} className="text-neutral-content">{format(minutes)}</span>
    //                 </span>
    //                 days
    //             </div>
    //             <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    //                 <span className="countdown font-mono text-5xl">
    //                     <span style={{"--value": secondsLeft}}></span>
    //                 </span>
    //                 hours
    //             </div>
    //         </div>
    //         <div className="grid grid-flow-col gap-5 text-center">
    //             <input type="button" value={pause ? "continue" : "pause"} onClick={() => fct(-1)} className="btn"/>
    //             <input type="button" value="stop" onClick={() => fct(-2)} className="btn"/>
    //             <input type="button" value="stop" onClick={() => fct(-2)} className="btn"/>
    //         </div>
    //     </div>
    // );
    return (
        <div>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center items-center mx-2 bg-neutral rounded-box w-36 h-36">
                    <span className="countdown font-mono text-5xl mb-6">
                        <span style={{"--value": minutes}}></span>
                    </span>
                    minutes
                </div>
                <div className="flex flex-col justify-center items-center mx-2 bg-neutral rounded-box w-36 h-36">
                    <span className="countdown font-mono text-5xl mb-6">
                        <span style={{"--value": secondsLeft}}></span>
                    </span>
                    seconds
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <input
                    type="button"
                    value={pause ? "continue" : "pause"}
                    onClick={() => fct(-1)}
                    className={`btn btn-outline ${
                        pause ? "btn-success" : "btn-warning"
                    }  flex flex-col justify-center items-center mx-2 bg-neutral w-36 h-10`}
                />
                <input
                    type="button"
                    value="stop"
                    onClick={() => fct(-2)}
                    className="btn btn-outline btn-error flex flex-col justify-center items-center mx-2 bg-neutral w-36 h-10"
                />
            </div>
        </div>
    );
}
