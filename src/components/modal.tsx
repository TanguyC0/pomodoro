import React from "react";

export default function Modal({value}: {value: boolean}) {
    return (
        <>
            <input
                type="checkbox"
                id="my-modal-4"
                className="modal-toggle"
                defaultChecked={value}
            />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-xl font-extrabold text-center text-error">
                        No time in timer ! start a new timer
                    </h3>
                    <ul className="py-4">
                        <li className="py-2">
                            You can add or remove one minute by clicking on the
                            buttons "+" or "-".
                        </li>
                        <li className="py-2">
                            Or you can set a custom time by clicking on the
                            counter.
                        </li>
                        <li className="py-2">
                            You can also reset the timer by clicking on the
                            button "reset".
                        </li>
                        <li className="py-2">
                            You can't go below 0 second. and you can't go above
                            60 minutes.
                        </li>
                        <li className="py-2">
                            Push the button "start" to start the timer.
                        </li>
                        <li className="py-2 text-error font-bold">
                            Click anywhere out of the modal to close it.
                        </li>
                    </ul>
                </label>
            </label>
        </>
    );
}
